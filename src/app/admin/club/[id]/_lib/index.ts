import API_PATH, { BASE_URL } from '@/constants/path';

export const deleteClub = async (id: string): Promise<ResponseType> => {
  const response = await fetch(BASE_URL + API_PATH.CLUB.DELETE(id), {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};
