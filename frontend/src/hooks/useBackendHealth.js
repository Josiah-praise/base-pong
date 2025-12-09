import React, { useEffect, useState } from 'react';
import { resolveBackendUrl } from '../utils/backendUrl';

export const useBackendHealth = () => {
  const [status, setStatus] = useState('unknown');

  const runCheck = React.useCallback(() => {
    const url = resolveBackendUrl();
    if (!url) {
      setStatus('missing-url');
      return () => {};
    }

    let cancelled = false;
    setStatus((current) => (current === 'missing-url' ? current : 'checking'));

    fetch(`${url}/health`)
      .then((response) => {
        if (cancelled) {
          return;
        }
        setStatus(response.ok ? 'ok' : 'error');
      })
      .catch(() => {
        if (cancelled) {
          return;
        }
        setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    return runCheck();
  }, [runCheck]);

  return { status, refresh: runCheck };
};
