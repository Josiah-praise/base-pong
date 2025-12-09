import { useEffect, useState } from 'react';
import { resolveBackendUrl } from '../utils/backendUrl';

export const useBackendHealth = () => {
  const [status, setStatus] = useState('unknown');

  useEffect(() => {
    const url = resolveBackendUrl();
    if (!url) {
      setStatus('missing-url');
      return;
    }

    let cancelled = false;

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

  return status;
};
