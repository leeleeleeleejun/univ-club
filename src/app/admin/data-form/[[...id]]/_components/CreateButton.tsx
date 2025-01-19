import ActionButton from '@/app/_components/ActionButton';
import { CreateClub, updateLogoImg } from '../_lib';
import { ClubFormData } from '../_components/PageComponent';
import { useRouter } from 'next/navigation';
import validateData from '@/app/admin/data-form/[[...id]]/utills/validateData';

const CreateButton = ({
  formData,
  logoFile,
}: {
  formData: ClubFormData;
  logoFile: File | null;
}) => {
  const router = useRouter();

  const submitData = async () => {
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

  return <ActionButton onClick={submitData}>제출하기</ActionButton>;
};

export default CreateButton;
