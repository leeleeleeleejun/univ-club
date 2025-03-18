import Image from 'next/image';
import KnuIcon from '@/assets/icons/knu.svg';

export default function Footer() {
  return (
    <footer className='flex w-full bg-gray-50'>
      <div className='w-full px-6 py-6 text-xs text-gray-500'>
        <div className='flex gap-1 items-center font-semibold md:text-sm'>
          <Image src={KnuIcon} alt={''} width={10} />
          <a
            target='_blank'
            href='https://www.notion.so/woopaca/722d2e1180f94eeead36ec09436d4576?pvs=4'
          >
            개인정보 처리방침
          </a>
        </div>
        <p>
          본 서비스는
          <a
            className='font-semibold'
            target='_blank'
            href='https://ddingdong.mju.ac.kr/'
          > {''}띵동
          </a>
          의 기능을 참고하여 개발되었습니다.
        </p>
        <div className='text-gray-400'>
          E-mail: jcw001031@gmail.com
        </div>
      </div>
    </footer>
  );
}
