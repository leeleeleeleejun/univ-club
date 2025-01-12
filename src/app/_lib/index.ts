import { Club } from '@/types/club';

const BASE_URL = process.env.BASE_URL;

export const getClubs = async (): Promise<Club[]> => {
  const response = await fetch(BASE_URL + '/api/v1/clubs');
  return response.json();
};
