'use client';

import { useRouter } from 'next/navigation';
import ActionButton from '@/app/_components/ActionButton';
import { updateClub, updateLogoImg } from '../_lib';
import { ClubCreateForm as ClubCreateFormType } from '../_types';
import { UseFormHandleSubmit } from 'react-hook-form';
import { useRef } from 'react';

const UpdateButton = ({
  id,
  logoFile,
  logoPreview,
  isSubmitting,
  handleSubmit,
}: {
  id: string;
  logoFile: File | null;
  logoPreview: string | null;
  isSubmitting: boolean;
  handleSubmit: UseFormHandleSubmit<ClubCreateFormType>;
}) => {
  const router = useRouter();
  const isProcessing = useRef(false); // 중복 요청 방지용 ref

  const submitData = async (data: ClubCreateFormType) => {
    if (isProcessing.current) return;
    isProcessing.current = true;

    try {
      // 클럽 생성
      const trimData = {
        ...data,
        instagram: data.instagram.trim().replace(/^@/, ''),
        recruitmentUrl: data.recruitmentUrl.trim(),
        youtubeUrl: data.youtubeUrl.trim(),
        homepageUrl: data.homepageUrl.trim(),
      };

      await updateClub(JSON.stringify(trimData), id);

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
      isProcessing.current = false;
    }
  };

  return (
    <ActionButton onClick={handleSubmit(submitData)} disabled={isSubmitting}>
      {isSubmitting ? '수정 중...' : '수정하기'}
    </ActionButton>
  );
};

export default UpdateButton;
