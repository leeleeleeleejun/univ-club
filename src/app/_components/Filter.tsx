import { CategoryList, deptCaptionColor } from '@/constants/color';

import { Fragment } from 'react';

const FilterBar = () => {
  return (
    <div className={'px-[20px]'}>
      <div
        className={
          'py-2 px-3 flex justify-between text-sm font-semibold text-gray-500'
        }
      >
        <div>총 124개의 동아리</div>
        <div>모집상태</div>
      </div>
      <div className='px-3 py-2 rounded-full flex gap-2 overflow-x-auto bg-gray-50'>
        {CategoryList.map((category, index) => (
          <Fragment key={category}>
            <CategoryTabBtn category={category}>{category}</CategoryTabBtn>
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
}: Readonly<{
  children: React.ReactNode;
  category: string;
}>) => {
  return (
    <button
      className={`rounded-lg text-sm font-semibold whitespace-nowrap ${deptCaptionColor[category]}`}
    >
      {children}
    </button>
  );
};
