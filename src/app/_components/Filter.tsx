import { Fragment, useState } from 'react';
import { FilterType } from '@/types/club';
import { deptCaptionColor } from '@/constants/color';
import CampusDropDown from '@/app/_components/CampusDropDown';
import { CategoryList } from '@/constants/category';

interface FilterBarProps {
  ClubsLength: number;
  onFilter: (filterType: FilterType, value: string) => void;
}

const FilterBar = ({ ClubsLength, onFilter }: FilterBarProps) => {
  const [activeCategories, setActiveCategories] = useState<string[]>([]);

  // 필터 초기화 함수
  const handleReset = () => {
    setActiveCategories([]);
    onFilter('category', ''); // 빈 문자열을 보내 필터 초기화
  };

  const handleCategorySelect = (category: string) => {
    setActiveCategories((prev) => {
      if (prev.includes(category)) {
        // 이미 선택된 카테고리면 제거
        const newCategories = prev.filter((cat) => cat !== category);
        return newCategories;
      } else {
        // 새로운 카테고리 추가
        return [...prev, category];
      }
    });
  };

  return (
    <div className={'px-[20px]'}>
      <div
        className={
          'py-2 px-3 flex justify-between text-sm font-semibold text-gray-500'
        }
      >
        <div>총 {ClubsLength}개의 동아리</div>
        <CampusDropDown onFilterAction={onFilter} />
      </div>
      <div className='px-3 py-2 rounded-full flex justify-around gap-2 overflow-x-auto bg-gray-50'>
        <Fragment>
          <button
            onClick={handleReset}
            className={`rounded-lg text-sm font-semibold whitespace-nowrap ${activeCategories.length === 0 && deptCaptionColor['전체']}`}
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
              handleCategorySelect={handleCategorySelect}
              isActive={activeCategories.includes(category)}
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
  handleCategorySelect,
}: Readonly<{
  category: string;
  isActive: boolean;
  onFilter: (filterType: FilterType, value: string) => void;
  handleCategorySelect: (category: string) => void;
}>) => {
  return (
    <button
      onClick={() => {
        onFilter('category', category);
        handleCategorySelect(category);
      }}
      className={`rounded-lg text-sm font-semibold whitespace-nowrap ${isActive && deptCaptionColor[category]}`}
    >
      {category}
    </button>
  );
};
