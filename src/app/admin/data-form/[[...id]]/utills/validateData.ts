import { ClubFormData } from '@/app/admin/data-form/[[...id]]/_components/PageComponent';

const validateData = (registerData: ClubFormData) => {
  const { name, tag, introduction } = registerData;

  if (!name.trim()) {
    alert('동아리 이름을 입력해 주세요.');
    return;
  }

  if (!tag.trim()) {
    alert('태그을 입력해 주세요.');
    return;
  }

  if (!introduction.trim()) {
    alert('동아리 소개를 입력해 주세요.');
    return;
  }

  return true;
};

export default validateData;
