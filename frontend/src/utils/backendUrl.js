const sanitizeUrl = (value) => {
  if (!value) {
    return '';
  }

  return value.trim().replace(/\/+$/, '');
};

const deriveFromWindow = () => {
  if (typeof window === 'undefined' || !window.location) {
    return '';
  }

  return window.location.origin || '';
};

export const resolveBackendUrl = () => {
  const envOverride = sanitizeUrl(process.env.REACT_APP_BACKEND_URL);
  if (envOverride) {
    return envOverride;
  }

  return sanitizeUrl(deriveFromWindow());
};
