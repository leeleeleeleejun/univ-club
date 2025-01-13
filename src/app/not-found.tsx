import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <h1 className='p-4 text-7xl text-center mt-[160px] mb-[50px]'>
        404 ERROR
      </h1>
      <div className='p-4 mb-[50px] leading-7 text-center '>
        <p>죄송합니다. 해당 페이지를 찾을 수 없습니다.</p>
        <p>존재하지 않는 주소를 입력하셨거나,</p>
        <p>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</p>
      </div>
      <Link
        href='/'
        className='w-[50px] mx-auto border-solid border-b-2 border-black text-center font-semibold'
      >
        Home
      </Link>
    </>
  );
}
