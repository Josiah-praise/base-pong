const sanitizeUrl = (value) => {
  if (!value) {
    return '';
  }

  return value.trim().replace(/\/+$/, '');
};

const buildUrlFromLocation = (location) => {
  if (!location) {
    return '';
  }

  const protocol = location.protocol || 'http:';
  const host = location.hostname || 'localhost';
  const port = location.port ? `:${location.port}` : '';

  return `${protocol}//${host}${port}`;
};

const deriveFromWindow = () => {
  if (typeof window === 'undefined' || !window.location) {
    return '';
  }

  return buildUrlFromLocation(window.location);
};

export const resolveBackendUrl = () => {
  const envOverride = sanitizeUrl(process.env.REACT_APP_BACKEND_URL);
  if (envOverride) {
    return envOverride;
  }

  return sanitizeUrl(deriveFromWindow());
};
