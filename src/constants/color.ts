import { DeptCaptionColor } from '@/types/club';

export const CategoryList = [
  '봉사',
  '음악',
  // '연행예술',
  '미술',
  '종교',
  '체육',
  '학술',
  '기타',
];

export const deptCaptionColor: DeptCaptionColor = {
  전체: 'text-red-500',
  봉사: 'text-pink-500',
  음악: 'text-orange-500',
  // 연행예술: 'text-yellow-500',
  미술: 'text-emerald-500',
  종교: 'text-cyan-500',
  체육: 'text-blue-500',
  학술: 'text-purple-500',
  기타: 'text-zinc-500',
};

export const campusColor: DeptCaptionColor = {
  천안캠: 'text-blue-500 bg-blue-100',
  신관캠: 'text-rose-500 bg-rose-100',
  예산캠: 'text-orange-500 bg-orange-100',
};

export const campusTextColor: DeptCaptionColor = {
  천안: 'text-blue-500',
  신관: 'text-rose-500',
  예산: 'text-orange-500',
};
