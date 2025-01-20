'use client';

import ActionButton from '@/app/_components/ActionButton';
import { updateClub, updateLogoImg } from '../_lib';
import { ClubFormData } from '../_components/PageComponent';
import { useRouter } from 'next/navigation';
import validateData from '@/app/admin/data-form/[[...id]]/utills/validateData';
import { useRef, useState } from 'react';

const UpdateButton = ({
  id,
  formData,
  logoFile,
  logoPreview,
}: {
  id: string;
  formData: ClubFormData;
  logoFile: File | null;
  logoPreview: string | null;
}) => {
  const router = useRouter();
  const isSubmitting = useRef(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitData = async () => {
    if (isSubmitting.current) return;
    isSubmitting.current = true;
    setIsLoading(true);

    try {
      if (!validateData(formData)) return;

      // 클럽 생성
      await updateClub(JSON.stringify(formData), id);

      // 이미지가 있는 경우에만 업로드
      if (logoFile) {
        await updateLogoImg(logoFile, id);
      }
      if (!logoPreview && !logoFile) {
        await updateLogoImg(null, id);
      }
      router.replace(`/admin/club/${id}`);
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ActionButton onClick={submitData} disabled={isSubmitting.current}>
      {isLoading ? '수정 중...' : '수정하기'}
    </ActionButton>
  );
};

export default UpdateButton;
