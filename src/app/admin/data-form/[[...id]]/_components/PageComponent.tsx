'use client';

import { CategoryList } from '@/constants/category';
import { ClubDetail, ClubDetailKey } from '@/types/club';
import { useEffect, useState } from 'react';
import Input from './Input';
import LogoImage from '@/app/admin/data-form/[[...id]]/_components/LogoImage';
import Select from './Select';
import CreateButton from '@/app/admin/data-form/[[...id]]/_components/CreateButton';
import UpdateButton from '@/app/admin/data-form/[[...id]]/_components/UpdateButton';
import Textarea from '@/app/admin/data-form/[[...id]]/_components/Textarea';
import { CAMPUS_OPTIONS } from '@/constants/campus';

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
  contact: string;
  youtubeUrl: string;
  homepageUrl: string;
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
  contact: '',
  youtubeUrl: '',
  homepageUrl: '',
};

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
      <FormSection content={'캠퍼스'} required>
        <Select
          value={formData.campus}
          handleFieldChange={handleFieldChange}
          clubDetailKey={'campus'}
          optionList={CAMPUS_OPTIONS}
        />
      </FormSection>
      <FormSection content={'카테고리'} required>
        <Select
          value={formData.category}
          handleFieldChange={handleFieldChange}
          clubDetailKey={'category'}
          optionList={CategoryList}
        />
      </FormSection>
      <FormSection content={'태그'} required>
        <Input
          handleFieldChange={handleFieldChange}
          clubDetailKey={'tag'}
          placeholder={'창업'}
          value={formData.tag}
          maxLength={8}
        />
      </FormSection>
      <FormSection content={'동아리 이름'} required>
        <Input
          handleFieldChange={handleFieldChange}
          clubDetailKey={'name'}
          placeholder={''}
          value={formData.name}
          maxLength={20}
        />
      </FormSection>
      <FormSection content={'동아리 소개'} required>
        <Textarea
          value={formData.introduction}
          clubDetailKey={'introduction'}
          placeholder={
            '다양한 활동을 하며 진로를 찾아가는 진로탐색 동아리 『제로』 입니다!\n' +
            '\n' +
            '스펙업을 위한 취미 활동 ⬆️\n' +
            '\n' +
            '창업동아리 및 새로운 취미 탐색 모집시기: 학기마다 사전에 공지 계획'
          }
          handleFieldChange={handleFieldChange}
          maxLength={2000}
          addStyles={'min-h-[200px]'}
        />
      </FormSection>
      <FormSection content={'회장단(관계자) 번호'}>
        <Textarea
          value={formData.contact}
          clubDetailKey={'contact'}
          placeholder={'OOO : 010-1234-5678\n' + 'OOO : 010-1234-5678\n'}
          handleFieldChange={handleFieldChange}
          maxLength={100}
          addStyles={'min-h-[100px]'}
        />
      </FormSection>
      <FormSection content={'동아리 모집기간'}>
        <Textarea
          handleFieldChange={handleFieldChange}
          clubDetailKey={'recruitmentPeriod'}
          placeholder={'2월 1일 ~ 3월 10일'}
          value={formData.recruitmentPeriod}
          maxLength={50}
          addStyles={'min-h-[100px]'}
        />
      </FormSection>
      <FormSection content={'동아리 모집방법'}>
        <Textarea
          handleFieldChange={handleFieldChange}
          clubDetailKey={'membershipMethod'}
          placeholder={'추후 네이버 폼으로 모집 예정'}
          value={formData.membershipMethod}
          maxLength={100}
          addStyles={'min-h-[100px]'}
        />
      </FormSection>
      <FormSection content={'동아리 모집 url (구글폼, 사이트)'}>
        <Input
          handleFieldChange={handleFieldChange}
          clubDetailKey={'recruitmentUrl'}
          value={formData.recruitmentUrl}
          placeholder={''}
          maxLength={1000}
        />
      </FormSection>
      <FormSection content={'동아리 인스타그램 아이디'}>
        <Input
          handleFieldChange={handleFieldChange}
          clubDetailKey={'instagram'}
          placeholder={'knu-times'}
          value={formData.instagram}
          maxLength={30}
        />
      </FormSection>
      <FormSection content={'동아리 유튜브'}>
        <Input
          handleFieldChange={handleFieldChange}
          clubDetailKey={'youtubeUrl'}
          placeholder={'https://www.youtube.com/@KNU1948'}
          value={formData.youtubeUrl}
          maxLength={1000}
        />
      </FormSection>
      <FormSection content={'동아리 홈페이지'}>
        <Input
          handleFieldChange={handleFieldChange}
          clubDetailKey={'homepageUrl'}
          placeholder={'https://www.kongju.ac.kr'}
          value={formData.homepageUrl}
          maxLength={1000}
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
  required,
  children,
}: {
  content: string;
  required?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h3 className={'font-semibold text-lg'}>
        {content}
        {required && <span> (필수)</span>}
      </h3>
      {children}
    </div>
  );
};
