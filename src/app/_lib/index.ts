import { Club } from '@/types/club';
import API_PATH, { BASE_URL } from '@/constants/path';

export const getClubs = async (): Promise<Club[]> => {
  const response = await fetch(BASE_URL + API_PATH.CLUB.GET.LIST, {
    cache: 'no-store',
  });
  const result = await response.json();
  return result.sort((a: Club, b: Club) => a.campus.localeCompare(b.campus)); // Sorting by campus
};
