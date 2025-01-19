import { ClubDetail } from '@/types/club';
import API_PATH, { BASE_URL } from '@/constants/path';

export const getClub = async (clubId: string): Promise<ClubDetail> => {
  const response = await fetch(BASE_URL + API_PATH.CLUB.GET.DETAIL(clubId));
  return response.json();
};
