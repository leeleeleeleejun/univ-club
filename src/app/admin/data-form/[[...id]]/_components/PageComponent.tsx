'use client';

import { CategoryList } from '@/constants/color';
import { ClubDetail, ClubDetailKey } from '@/types/club';
import { useEffect, useState } from 'react';
import Input, { commonInputStyle } from './Input';
import LogoImage from '@/app/admin/data-form/[[...id]]/_components/LogoImage';
import Select from './Select';
import CreateButton from '@/app/admin/data-form/[[...id]]/_components/CreateButton';
import UpdateButton from '@/app/admin/data-form/[[...id]]/_components/UpdateButton';

export interface ClubFormData {
  name: string;
  category: string;
  tag: string;
  campus: string;
  recruitmentPeriod: string;
  introduction: string;
  membershipMethod: string;
  instagram: string;
  recruitmentUrl: string;
}

const INITIAL_FORM_STATE: ClubFormData = {
  name: '',
  category: '봉사',
  tag: '',
  campus: '신관캠',
  recruitmentPeriod: '',
  introduction: '',
  membershipMethod: '',
  instagram: '',
  recruitmentUrl: '',
};

const CAMPUS_OPTIONS = ['신관캠', '천안캠', '예산캠'];

interface ClubFormProps {
  initialData?: ClubDetail;
}

const PageComponent = ({ initialData }: ClubFormProps) => {
  const [formData, setFormData] = useState<ClubFormData>(INITIAL_FORM_STATE);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [logoFile, setLogoFile] = useState<File | null>(null);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
      setLogoPreview(initialData.logoImageUrl);
    }
  }, [initialData]);

  const handleFieldChange = (field: ClubDetailKey, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className={'p-[20px] gap-6 flex flex-col overflow-y-scroll'}>
      <FormSection content={'동아리 로고 이미지'}>
        <LogoImage
          setLogoFile={setLogoFile}
          logoPreview={logoPreview}
          setLogoPreview={setLogoPreview}
        />
      </FormSection>
      <FormSection content={'캠퍼스 (필수)'}>
        <Select
          value={formData.campus}
          handleFieldChange={handleFieldChange}
          clubDetailKey={'campus'}
          optionList={CAMPUS_OPTIONS}
        />
      </FormSection>
      <FormSection content={'카테고리 (필수)'}>
        <Select
          value={formData.category}
          handleFieldChange={handleFieldChange}
          clubDetailKey={'category'}
          optionList={CategoryList}
        />
      </FormSection>
      <FormSection content={'태그 (필수)'}>
        <Input
          handleFieldChange={handleFieldChange}
          clubDetailKey={'tag'}
          placeholder={'창업'}
          value={formData.tag}
        />
      </FormSection>
      <FormSection content={'동아리 이름 (필수)'}>
        <Input
          handleFieldChange={handleFieldChange}
          clubDetailKey={'name'}
          placeholder={''}
          value={formData.name}
        />
      </FormSection>
      <FormSection content={'동아리 소개 (필수)'}>
        <textarea
          className={commonInputStyle + ' min-h-[200px]'}
          value={formData.introduction}
          placeholder={
            '다양한 활동을 하며 진로를 찾아가는 진로탐색 동아리 『제로』 입니다!\n' +
            '\n' +
            '스펙업을 위한 취미 활동 ⬆️\n' +
            '\n' +
            '창업동아리 및 새로운 취미 탐색 모집시기: 학기마다 사전에 공지 계획'
          }
          onChange={(event) => {
            handleFieldChange('introduction', event.target.value);
          }}
        />
      </FormSection>
      <FormSection content={'동아리 모집기간'}>
        <Input
          handleFieldChange={handleFieldChange}
          clubDetailKey={'recruitmentPeriod'}
          placeholder={'2월 1일 ~ 3월 10일'}
          value={formData.recruitmentPeriod}
        />
      </FormSection>
      <FormSection content={'동아리 모집방법'}>
        <Input
          handleFieldChange={handleFieldChange}
          clubDetailKey={'membershipMethod'}
          placeholder={'추후 네이버 폼으로 모집 예정'}
          value={formData.membershipMethod}
        />
      </FormSection>
      <FormSection content={'동아리 모집 url (구글폼, 사이트)'}>
        <Input
          handleFieldChange={handleFieldChange}
          clubDetailKey={'recruitmentUrl'}
          value={formData.recruitmentUrl}
          placeholder={''}
        />
      </FormSection>
      <FormSection content={'동아리 인스타그램 아이디'}>
        <Input
          handleFieldChange={handleFieldChange}
          clubDetailKey={'instagram'}
          placeholder={'knu-times'}
          value={formData.instagram}
        />
      </FormSection>
      <div className={'mt-10'}>
        {initialData ? (
          <UpdateButton
            id={initialData.id}
            formData={formData}
            logoFile={logoFile}
            logoPreview={logoPreview}
          />
        ) : (
          <CreateButton formData={formData} logoFile={logoFile} />
        )}
      </div>
    </div>
  );
};

export default PageComponent;

const FormSection = ({
  content,
  children,
}: {
  content: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h3 className={'font-semibold text-lg'}>{content}</h3>
      {children}
    </div>
  );
};
