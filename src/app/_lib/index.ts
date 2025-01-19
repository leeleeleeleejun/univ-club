import { Club } from '@/types/club';
import API_PATH, { BASE_URL } from '@/constants/path';

export const getClubs = async (): Promise<Club[]> => {
  const response = await fetch(BASE_URL + API_PATH.CLUB.GET.LIST);
  return response.json();
};
