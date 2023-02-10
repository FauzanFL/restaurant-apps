import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.API}/list`,
  DETAIL: (id) => `${CONFIG.API}/detail/${id}`,
  REVIEW: `${CONFIG.API}/review`,
};

export default API_ENDPOINT;
