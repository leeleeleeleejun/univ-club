import Image from 'next/image';
import KnuIcon from '@/assets/icons/knu.svg';

export default function Footer() {
  return (
    <footer className='flex w-full bg-gray-50'>
      <div className='w-full px-6 py-6'>
        <div className='flex gap-2 items-center text-xs font-medium text-gray-500 md:text-sm'>
          <Image src={KnuIcon} alt={''} width={10} />
          like-knu
        </div>
        <a
          target='_blank'
          href='https://www.notion.so/woopaca/722d2e1180f94eeead36ec09436d4576?pvs=4'
          className='text-xs font-semibold text-gray-500 md:text-sm'
        >
          개인정보 처리방침
        </a>
        <div className='text-xs text-gray-400 md:text-sm'>
          E-mail: jcw001031@gmail.com
        </div>
      </div>
    </footer>
  );
}
