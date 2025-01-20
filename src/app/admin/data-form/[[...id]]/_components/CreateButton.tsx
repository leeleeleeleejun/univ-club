'use client';

import ActionButton from '@/app/_components/ActionButton';
import { CreateClub, updateLogoImg } from '../_lib';
import { ClubFormData } from '../_components/PageComponent';
import { useRouter } from 'next/navigation';
import validateData from '@/app/admin/data-form/[[...id]]/utills/validateData';
import { useRef, useState } from 'react';

const CreateButton = ({
  formData,
  logoFile,
}: {
  formData: ClubFormData;
  logoFile: File | null;
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const isSubmitting = useRef(false);

  const submitData = async () => {
    if (isSubmitting.current) return;
    isSubmitting.current = true;

    setIsLoading(true);
    try {
      if (!validateData(formData)) return;

      // 클럽 생성
      const { id } = await CreateClub(JSON.stringify(formData));

      // 이미지가 있는 경우에만 업로드
      if (logoFile) {
        await updateLogoImg(logoFile, id);
      }
      router.replace(`/admin/club/${id}`);
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ActionButton onClick={submitData} disabled={isSubmitting.current}>
      {isLoading ? '제출 중...' : '제출하기'}
    </ActionButton>
  );
};

export default CreateButton;
