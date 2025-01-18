import API_PATH, { BASE_URL } from '@/constants/path';

interface ResponseType {
  id: string;
}

export const CreateClub = async (data: string): Promise<ResponseType> => {
  const response = await fetch(BASE_URL + API_PATH.CLUB.CREATE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};

export const updateClub = async (
  data: string,
  id: string
): Promise<ResponseType> => {
  const response = await fetch(BASE_URL + API_PATH.CLUB.PUT(id), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};

export const updateLogoImg = async (
  imgFile: File | null,
  id: string
): Promise<ResponseType> => {
  let data = null;
  if (imgFile) {
    data = new FormData();
    data.append('logoImage', imgFile);
  }

  const response = await fetch(BASE_URL + API_PATH.LOGO_IMG(id), {
    method: 'PUT',
    body: data,
  });

  if (!response.ok) {
    throw new Error();
  }
  return response.json();
};
