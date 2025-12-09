import React from 'react';
import PropTypes from 'prop-types';
import { useBackendUrl } from '../hooks/useBackendUrl';
import { useBackendHealth } from '../hooks/useBackendHealth';
import '../styles/BackendStatusBanner.css';

export const BackendStatusBanner = ({ className = '' }) => {
  const { url, resolution, missing } = useBackendUrl();
  const { status, refresh } = useBackendHealth();

  if (status === 'ok') {
    return null;
  }

  const message = missing
    ? 'Backend URL missing. Update REACT_APP_BACKEND_URL or rely on local fallback.'
    : status === 'error'
      ? 'Backend unreachable. Is the server running?'
      : 'Attempting to reach backend...';

  const showRetry = status === 'error' || status === 'checking';

  return (
    <div className={`backend-status-banner ${className}`}>
      <strong>Backend connection issue</strong>
      <p>{message}</p>
      {showRetry && (
        <button type="button" onClick={refresh} className="retry-button">
          Retry connection
        </button>
      )}
      <small>Resolved via: {resolution.source} {resolution.detail && `(${resolution.detail})`}</small>
    </div>
  );
};

BackendStatusBanner.propTypes = {
  className: PropTypes.string,
};

export default BackendStatusBanner;
