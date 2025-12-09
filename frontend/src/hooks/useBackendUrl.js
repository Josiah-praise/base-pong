import { useMemo } from 'react';
import { resolveBackendUrl, getBackendUrlResolution } from '../utils/backendUrl';

export const useBackendUrl = () => {
  return useMemo(() => {
    const url = resolveBackendUrl();
    const resolution = getBackendUrlResolution();

    return { url, resolution, missing: !url };
  }, []);
};
