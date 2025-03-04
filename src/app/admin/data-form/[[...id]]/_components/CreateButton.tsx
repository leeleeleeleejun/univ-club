'use client';

import ActionButton from '@/app/_components/ActionButton';
import { CreateClub, updateLogoImg } from '../_lib';
import { ClubCreateForm as ClubCreateFormType } from '../_types';
import { useRouter } from 'next/navigation';
import { UseFormHandleSubmit } from 'react-hook-form';
import { useRef } from 'react';

const CreateButton = ({
  logoFile,
  handleSubmit,
  isSubmitting,
}: {
  logoFile: File | null;
  handleSubmit: UseFormHandleSubmit<ClubCreateFormType>;
  isSubmitting: boolean;
}) => {
  const router = useRouter();
  const isProcessing = useRef(false); // 중복 요청 방지용 ref

  const submitData = async (data: ClubCreateFormType) => {
    if (isProcessing.current) return;
    isProcessing.current = true;

    try {
      // 클럽 생성
      const { id } = await CreateClub(JSON.stringify(data));

      // 이미지가 있는 경우에만 업로드
      if (logoFile) {
        await updateLogoImg(logoFile, id);
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
      {isSubmitting ? '제출 중...' : '제출하기'}
    </ActionButton>
  );
};

export default CreateButton;
