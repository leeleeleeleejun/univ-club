import { FilterType } from '@/types/club';
import { campusBackgroundColor } from '@/constants/color';
import { CategoryList } from '@/constants/category';
import { useFilterStore } from '@/store/filter';

interface FilterBarProps {
  onFilter: (filterType: FilterType, value: string) => void;
}

const FilterBar = ({ onFilter }: FilterBarProps) => {
  const { filters } = useFilterStore();
  // 필터 초기화 함수
  const handleReset = () => {
    onFilter('category', ''); // 빈 문자열을 보내 필터 초기화
  };

  return (
    <div className={'px-[20px]'}>
      <div className='rounded-xl flex justify-around gap-2 overflow-x-auto'>
        <button
          onClick={handleReset}
          className={`rounded-full text-sm font-semibold whitespace-nowrap py-1.5 px-4 ${filters.category.length === 0 ? campusBackgroundColor['천안캠'] + ' text-white' : 'bg-gray-100 text-gray-400'}`}
        >
          전체
        </button>
        {CategoryList.map((category) => (
          <CategoryTabBtn
            key={category}
            category={category}
            campus={'천안캠'}
            onFilter={onFilter}
            isActive={filters.category.includes(category)}
          />
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
  campus,
}: Readonly<{
  category: string;
  isActive: boolean;
  onFilter: (filterType: FilterType, value: string) => void;
  campus: string;
}>) => {
  return (
    <button
      onClick={() => {
        onFilter('category', category);
      }}
      className={`rounded-full text-sm font-semibold whitespace-nowrap py-1.5 px-4 ${isActive ? campusBackgroundColor[campus] + ' text-white' : 'bg-gray-100 text-gray-400'}`}
    >
      {category}
    </button>
  );
};
