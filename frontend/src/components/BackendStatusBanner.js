import React from 'react';
import PropTypes from 'prop-types';
import { useBackendUrl } from '../hooks/useBackendUrl';
import { useBackendHealth } from '../hooks/useBackendHealth';
import '../styles/BackendStatusBanner.css';

export const BackendStatusBanner = ({ className = '' }) => {
  const { url, resolution } = useBackendUrl();
  const status = useBackendHealth();

  if (status === 'ok') {
    return null;
  }

  const message = !url
    ? 'Backend URL missing. Update REACT_APP_BACKEND_URL or rely on local fallback.'
    : 'Attempting to reach backend...';

  return (
    <div className={`backend-status-banner ${className}`}>
      <strong>Backend connection issue</strong>
      <p>{message}</p>
      <small>Resolved via: {resolution.source}</small>
    </div>
  );
};

BackendStatusBanner.propTypes = {
  className: PropTypes.string,
};

export default BackendStatusBanner;
