'use client';

import { useRouter } from 'next/navigation';
import { deleteClub } from '@/app/admin/club/[id]/_lib';

const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();

  const DeleteClubFunc = async () => {
    const userAnswer = confirm('정말 삭제하시겠습니까?');
    if (userAnswer) {
      await deleteClub(id);
      router.replace('/admin');
      router.refresh();
    }
  };

  return (
    <button className={'bg-rose-500 p-4 rounded-xl'} onClick={DeleteClubFunc}>
      삭제하기
    </button>
  );
};

export default DeleteButton;
