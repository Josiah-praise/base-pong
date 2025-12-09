const sanitizeUrl = (value) => {
  if (!value) {
    return '';
  }

  return value.trim().replace(/\/+$/, '');
};

const mapPort = (location) => {
  if (!location || !location.port) {
    return '';
  }

  if (location.hostname === 'localhost' && location.port === '3000') {
    return ':8080';
  }

  return `:${location.port}`;
};

const defaultPort = (location) => {
  if (!location || location.port) {
    return '';
  }

  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    return ':8080';
  }

  return '';
};

const buildUrlFromLocation = (location) => {
  if (!location) {
    return '';
  }

  const protocol = location.protocol || 'http:';
  const host = location.hostname || 'localhost';
  const port = mapPort(location) || defaultPort(location);

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
