import Image from 'next/image';
import SearchIcon from '@/assets/icons/search.svg';

const SearchBar = ({
  handleSearch,
}: {
  handleSearch: (value: string) => void;
}) => {
  return (
    <div
      className={
        'h-[46px] px-[15px] flex rounded-xl m-[20px] border-solid border-[1px] border-gray-100 shadow-sm'
      }
    >
      <input
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        className={'w-full bg-inherit outline-none text-black font-semibold'}
      />
      <Image src={SearchIcon} alt={''} />
    </div>
  );
};

export default SearchBar;
