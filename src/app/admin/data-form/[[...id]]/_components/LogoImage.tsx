import logo from '@/assets/icons/logo.svg';
import Image from 'next/image';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

const LogoImage = ({
  viewProfileImg,
  setViewProfileImg,
  setImgFile,
}: {
  viewProfileImg: string | null;
  setViewProfileImg: Dispatch<SetStateAction<string | null>>;
  setImgFile: Dispatch<SetStateAction<File | null>>;
}) => {
  const fileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setImgFile(selectedFile);
    if (selectedFile) {
      setViewProfileImg(URL.createObjectURL(selectedFile));
    }
  };

  const deleteImage = () => {
    setViewProfileImg(null);
    setImgFile(null);
  };

  return (
    <div className={'flex justify-around'}>
      <div className='h-30 w-30 overflow-hidden rounded-full border-solid border-[1.5px] border-gray-100 md:h-20 md:w-20'>
        <Image
          src={viewProfileImg ? viewProfileImg : logo}
          width={80}
          height={80}
          priority
          alt='logo'
        />
      </div>
      <input
        className={'hidden'}
        type='file'
        onChange={fileHandler}
        id='file'
        accept='image/jpeg, image/png'
        name='logo'
      />
      <div className={'flex flex-col justify-around text-white font-semibold'}>
        <label htmlFor='file' className={'bg-blue-400 p-3 rounded-xl'}>
          이미지 선택
        </label>
        <button onClick={deleteImage} className={'bg-gray-400 p-3 rounded-xl'}>
          이미지 삭제
        </button>
      </div>
    </div>
  );
};

export default LogoImage;
