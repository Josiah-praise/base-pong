const sanitizeUrl = (value) => {
  if (!value) {
    return '';
  }

  return value.trim().replace(/\/+$/, '');
};

export const resolveBackendUrl = () => {
  return sanitizeUrl(process.env.REACT_APP_BACKEND_URL);
};
