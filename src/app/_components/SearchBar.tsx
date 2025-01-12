import Image from 'next/image';
import SearchIcon from '@/assets/icons/search.svg';

const SearchBar = () => {
  return (
    <div className={'h-[46px] p-[15px] flex bg-gray-100 rounded-xl m-[20px]'}>
      <input
        className={'w-full bg-inherit outline-none text-black font-semibold'}
      />
      <Image src={SearchIcon} alt={''} />
    </div>
  );
};

export default SearchBar;
