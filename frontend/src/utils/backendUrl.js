const DEFAULT_BACKEND_PORT = '8080';
const DEFAULT_PROTOCOL = 'http:';
const LOCAL_HOSTNAMES = new Set(['localhost', '127.0.0.1']);

const sanitizeUrl = (value) => {
  if (!value) {
    return '';
  }

  return value.trim().replace(/\/+$/, '');
};

const resolveProtocol = (location) => {
  if (!location) {
    return DEFAULT_PROTOCOL;
  }

  if (LOCAL_HOSTNAMES.has(location.hostname)) {
    return DEFAULT_PROTOCOL;
  }

  return location.protocol || DEFAULT_PROTOCOL;
};

const mapPort = (location) => {
  if (!location || !location.port) {
    return '';
  }

  if (LOCAL_HOSTNAMES.has(location.hostname) && location.port === '3000') {
    return `:${DEFAULT_BACKEND_PORT}`;
  }

  return `:${location.port}`;
};

const defaultPort = (location) => {
  if (!location || location.port) {
    return '';
  }

  if (LOCAL_HOSTNAMES.has(location.hostname)) {
    return `:${DEFAULT_BACKEND_PORT}`;
  }

  return '';
};

const buildUrlFromLocation = (location) => {
  if (!location) {
    return '';
  }

  const protocol = resolveProtocol(location);
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
