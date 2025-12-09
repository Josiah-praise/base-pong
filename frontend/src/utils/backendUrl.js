const DEFAULT_BACKEND_PORT = '8080';
const DEFAULT_PROTOCOL = 'http:';
const DEFAULT_HOST = 'localhost';
const LOCAL_EQUIVALENT_HOSTS = new Set([
  DEFAULT_HOST,
  '127.0.0.1',
  '0.0.0.0',
  'host.docker.internal',
]);

let cachedBackendUrl;
let cachedResolutionMeta = { source: 'unknown' };

const isLocalHost = (hostname) => LOCAL_EQUIVALENT_HOSTS.has(hostname);

const sanitizeUrl = (value) => {
  if (!value) {
    return '';
  }

  return value.trim().replace(/\/+$/, '');
};

const resolveHostname = (location) => {
  if (!location || !location.hostname) {
    return DEFAULT_HOST;
  }

  return location.hostname;
};

const resolveProtocol = (location) => {
  if (!location) {
    return DEFAULT_PROTOCOL;
  }

  if (isLocalHost(location.hostname)) {
    return DEFAULT_PROTOCOL;
  }

  return location.protocol || DEFAULT_PROTOCOL;
};

const mapPort = (location) => {
  if (!location || !location.port) {
    return '';
  }

  if (isLocalHost(location.hostname) && location.port === '3000') {
    return `:${DEFAULT_BACKEND_PORT}`;
  }

  return `:${location.port}`;
};

const defaultPort = (location) => {
  if (!location || location.port) {
    return '';
  }

  if (isLocalHost(location.hostname)) {
    return `:${DEFAULT_BACKEND_PORT}`;
  }

  return '';
};

const buildUrlFromLocation = (location) => {
  if (!location) {
    return '';
  }

  const protocol = resolveProtocol(location);
  const host = resolveHostname(location);
  const port = mapPort(location) || defaultPort(location);

  return `${protocol}//${host}${port}`;
};

const deriveFromWindow = () => {
  if (typeof window === 'undefined' || !window.location) {
    return '';
  }

  return buildUrlFromLocation(window.location);
};

const setResolutionMeta = (source, detail = '') => {
  cachedResolutionMeta = { source, detail };
};

export const getBackendUrlResolution = () => cachedResolutionMeta;

export const resolveBackendUrl = () => {
  if (typeof cachedBackendUrl === 'string') {
    return cachedBackendUrl;
  }

  const envOverride = sanitizeUrl(process.env.REACT_APP_BACKEND_URL);
  if (envOverride) {
    cachedBackendUrl = envOverride;
    setResolutionMeta('env', 'REACT_APP_BACKEND_URL');
    return cachedBackendUrl;
  }

  const inferred = sanitizeUrl(deriveFromWindow());
  cachedBackendUrl = inferred;
  setResolutionMeta('window', inferred ? 'window.location' : 'unresolved');
  return cachedBackendUrl;
};
