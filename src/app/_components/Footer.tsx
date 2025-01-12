export default function Footer() {
  return (
    <footer className='flex w-full bg-gray-50'>
      <div className='w-full px-6 py-6'>
        <a
          target='_blank'
          href='https://www.notion.so/woopaca/722d2e1180f94eeead36ec09436d4576?pvs=4'
          className='text-xs font-semibold text-gray-500 md:text-sm'
        >
          개인정보 처리방침
        </a>
        <div className='text-xs font-medium text-gray-500 md:text-sm'>
          Copyright ⓒ ddingdong. All Rights Reserved
        </div>
        <div className='text-xs text-gray-400 md:text-sm'>
          E-mail: mju.ddingdong@gmail.com
        </div>
      </div>
    </footer>
  );
}
