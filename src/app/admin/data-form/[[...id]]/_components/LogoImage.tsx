import logo from '@/assets/icons/logo.svg';
import Image from 'next/image';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

const LogoImage = ({
  logoPreview,
  setLogoPreview,
  setLogoFile,
}: {
  logoPreview: string | null;
  setLogoPreview: Dispatch<SetStateAction<string | null>>;
  setLogoFile: Dispatch<SetStateAction<File | null>>;
}) => {
  const fileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    const LOGO_IMG_MAX_SIZE_5MB = 5 * 1024 * 1024;
    if (selectedFile.size > LOGO_IMG_MAX_SIZE_5MB) {
      alert('파일첨부 사이즈는 5MB 이내로 가능합니다.');
      e.target.value = '';
      return;
    }

    const previewURL = URL.createObjectURL(selectedFile);
    setLogoPreview(previewURL);

    return () => {
      URL.revokeObjectURL(previewURL);
    };
  };

  const deleteImage = () => {
    setLogoPreview(null);
    setLogoFile(null);
  };

  return (
    <div className={'flex justify-around'}>
      <div className='h-30 w-30 overflow-hidden rounded-full border-solid border-[1.5px] border-gray-100 md:h-20 md:w-20'>
        <Image
          src={logoPreview ? logoPreview : logo}
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
      <div
        className={
          'flex flex-col gap-2 justify-around text-white font-semibold'
        }
      >
        <label htmlFor='file' className={'bg-blue-400 p-3 rounded-xl'}>
          이미지 선택
        </label>
        <button onClick={deleteImage} className={'bg-gray-400 p-3 rounded-xl'}>
          기본 이미지
        </button>
      </div>
    </div>
  );
};

export default LogoImage;
