export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';

const API_PATH = {
  CLUB: {
    GET: {
      LIST: '/api/v1/clubs',
      DETAIL: (id: string) => `/api/v1/clubs/${id}`,
    },
    CREATE: '/api/v1/clubs',
    PUT: (id: string) => `/api/v1/clubs/${id}`,
    DELETE: (id: string) => `/api/v1/clubs/${id}`,
  },
  LOGO_IMG: (id: string) => `/api/v1/clubs/${id}/logo`,
};

export default API_PATH;
