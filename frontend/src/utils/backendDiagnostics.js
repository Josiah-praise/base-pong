import { getBackendUrlResolution, resolveBackendUrl } from './backendUrl';

let logged = false;

export const logBackendUrlResolution = () => {
  if (logged) {
    return;
  }

  if (typeof console === 'undefined') {
    return;
  }

  const url = resolveBackendUrl();
  const meta = getBackendUrlResolution();
  console.info('[backend-url] resolved to', url || '<empty>', 'via', meta.source);
  logged = true;
};
