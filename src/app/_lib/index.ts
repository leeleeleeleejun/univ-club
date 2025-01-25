import { Club } from '@/types/club';
import API_PATH, { BASE_URL } from '@/constants/path';
import { CAMPUS_OPTIONS } from '@/constants/campus';

// 클럽 목록 가져오기
export const fetchClubs = async (): Promise<Club[]> => {
  const response = await fetch(BASE_URL + API_PATH.CLUB.GET.LIST, {
    cache: 'no-store',
  });
  return response.json();
};

// 클럽 정렬
export const sortClubs = (clubs: Club[]): Club[] => {
  return clubs.sort((a, b) => {
    const campusComparison =
      CAMPUS_OPTIONS.indexOf(a.campus) - CAMPUS_OPTIONS.indexOf(b.campus);

    if (campusComparison === 0) {
      return a.category.localeCompare(b.category); // 같은 캠퍼스일 때는 카테고리로 정렬
    }

    return campusComparison;
  });
};

// 클럽 데이터 가져오고 정렬하기
export const getClubs = async (): Promise<Club[]> => {
  const clubs = await fetchClubs();
  return sortClubs(clubs);
};
