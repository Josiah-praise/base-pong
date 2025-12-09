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

const buildUrlFromLocation = (location) => {
  if (!location) {
    return '';
  }

  const protocol = location.protocol || 'http:';
  const host = location.hostname || 'localhost';

  return `${protocol}//${host}${mapPort(location)}`;
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
