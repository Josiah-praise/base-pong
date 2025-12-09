import { resolveBackendUrl } from './backendUrl';

export const buildBackendUrl = (path = '') => {
  const base = resolveBackendUrl();
  if (!base) {
    return path;
  }

  if (!path) {
    return base;
  }

  if (!path.startsWith('/')) {
    return `${base}/${path}`;
  }

  return `${base}${path}`;
};
