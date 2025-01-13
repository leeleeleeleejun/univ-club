import { Fragment, useState } from 'react';
import { FilterType } from '@/types/club';
import { CategoryList, deptCaptionColor } from '@/constants/color';
import DropDown from '@/app/_components/DropDown';

interface FilterBarProps {
  ClubsLength: number;
  onFilter: (filterType: FilterType, value: string) => void;
}

const FilterBar = ({ ClubsLength, onFilter }: FilterBarProps) => {
  return (
    <div className={'px-[20px]'}>
      <div
        className={
          'py-2 px-3 flex justify-between text-sm font-semibold text-gray-500'
        }
      >
        <div>총 {ClubsLength}개의 동아리</div>
        <DropDown />
      </div>
      <div className='px-3 py-2 rounded-full flex gap-2 overflow-x-auto bg-gray-50'>
        {CategoryList.map((category, index) => (
          <Fragment key={category}>
            <CategoryTabBtn category={category} onFilter={onFilter}>
              {category}
            </CategoryTabBtn>
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
  children,
  category,
  onFilter,
}: Readonly<{
  children: React.ReactNode;
  category: string;
  onFilter: (filterType: FilterType, value: string) => void;
}>) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={() => {
        onFilter('category', category);
        setIsActive(!isActive);
      }}
      className={`rounded-lg text-sm font-semibold whitespace-nowrap ${isActive && deptCaptionColor[category]}`}
    >
      {children}
    </button>
  );
};
