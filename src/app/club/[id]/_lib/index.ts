import { ClubFeed, ClubInfo } from '@/types/club';

const BASE_URL = process.env.BASE_URL;

export const getClub = async (clubId: number): Promise<ClubInfo & ClubFeed> => {
  const response = await fetch(BASE_URL + `/api/v1/clubs/${clubId}`);
  return response.json();
};
