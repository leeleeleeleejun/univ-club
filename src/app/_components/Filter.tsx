import { Fragment } from 'react';
import { FilterType } from '@/types/club';
import { deptCaptionColor } from '@/constants/color';
import CampusDropDown from '@/app/_components/CampusDropDown';
import { CategoryList } from '@/constants/category';
import { useFilterStore } from '@/store/filter';

interface FilterBarProps {
  ClubsLength: number;
  onFilter: (filterType: FilterType, value: string) => void;
}

const FilterBar = ({ ClubsLength, onFilter }: FilterBarProps) => {
  const { filters } = useFilterStore();
  // 필터 초기화 함수
  const handleReset = () => {
    onFilter('category', ''); // 빈 문자열을 보내 필터 초기화
  };

  return (
    <div className={'px-[20px]'}>
      <div
        className={
          'py-2 px-3 flex justify-between text-sm font-semibold text-gray-500'
        }
      >
        <div>총 {ClubsLength}개의 동아리</div>
        <CampusDropDown
          onFilterAction={onFilter}
          activeCampus={filters.campus}
        />
      </div>
      <div className='px-3 py-2 rounded-full flex justify-around gap-2 overflow-x-auto bg-gray-50'>
        <Fragment>
          <button
            onClick={handleReset}
            className={`rounded-lg text-sm font-semibold whitespace-nowrap ${filters.category.length === 0 && deptCaptionColor['전체']}`}
          >
            전체
          </button>
          <div className='flex items-center font-semibold text-gray-300'>|</div>
        </Fragment>
        {CategoryList.map((category, index) => (
          <Fragment key={category}>
            <CategoryTabBtn
              category={category}
              onFilter={onFilter}
              isActive={filters.category.includes(category)}
            />
            {index !== CategoryList.length - 1 && (
              <div className='flex items-center font-semibold text-gray-300'>
                |
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;

const CategoryTabBtn = ({
  category,
  isActive,
  onFilter,
}: Readonly<{
  category: string;
  isActive: boolean;
  onFilter: (filterType: FilterType, value: string) => void;
}>) => {
  return (
    <button
      onClick={() => {
        onFilter('category', category);
      }}
      className={`rounded-lg text-sm font-semibold whitespace-nowrap ${isActive && deptCaptionColor[category]}`}
    >
      {category}
    </button>
  );
};
