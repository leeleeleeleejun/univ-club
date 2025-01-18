import ActionButton from '@/app/_components/ActionButton';
import { updateClub, updateLogoImg } from '../_lib';
import { ClubFormData } from '../_components/PageComponent';
import { useRouter } from 'next/navigation';

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

  const submitData = async () => {
    try {
      // 클럽 생성
      await updateClub(JSON.stringify(formData), id);

      // 이미지가 있는 경우에만 업로드
      if (logoFile) {
        console.log('a');
        await updateLogoImg(logoFile, id);
      }
      if (!logoPreview && !logoFile) {
        console.log('b');

        await updateLogoImg(null, id);
      }
      router.replace(`/admin/club/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return <ActionButton onClick={submitData}>수정하기</ActionButton>;
};

export default UpdateButton;
