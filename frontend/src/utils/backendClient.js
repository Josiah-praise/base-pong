import { resolveBackendUrl } from './backendUrl';

let warnedAboutMissingBase = false;

const maybeWarn = () => {
  if (warnedAboutMissingBase) {
    return;
  }

  if (typeof console === 'undefined') {
    return;
  }

  console.warn('[backend-url] No backend base URL resolved; falling back to relative paths');
  warnedAboutMissingBase = true;
};

export const buildBackendUrl = (path = '') => {
  const base = resolveBackendUrl();
  if (!base) {
    maybeWarn();
    return path || '';
  }

  if (!path) {
    return base;
  }

  if (!path.startsWith('/')) {
    return `${base}/${path}`;
  }

  return `${base}${path}`;
};
