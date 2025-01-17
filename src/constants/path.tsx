export const BASE_URL = process.env.BASE_URL;

const API_PATH = {
  CLUB: {
    GET: {
      LIST: '/api/v1/clubs',
      DETAIL: (id: string) => `/api/v1/clubs/${id}`,
    },
    PUT: '/api/v1/clubs',
    CREATE: '/api/v1/clubs',
    DELETE: '/api/v1/clubs',
  },
};

export default API_PATH;
