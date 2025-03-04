'use client';

import { CategoryList } from '@/constants/category';
import { ClubDetail } from '@/types/club';
import { PropsWithChildren, useState } from 'react';
import Input from './_components/Input';
import LogoImage from './_components/LogoImage';
import Select from './_components/Select';
import CreateButton from './_components/CreateButton';
import UpdateButton from './_components/UpdateButton';
import Textarea from './_components/Textarea';
import { CAMPUS_OPTIONS } from '@/constants/campus';
import {
  ClubCreateForm as ClubCreateFormType,
  clubCreateSchema,
} from './_types';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ErrorMessage from '@/app/admin/data-form/[[...id]]/_components/ErrorMessage';

const INITIAL_FORM_STATE: ClubCreateFormType = {
  name: '',
  category: '공연',
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
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm<ClubCreateFormType>({
    resolver: zodResolver(clubCreateSchema),
    defaultValues: initialData || INITIAL_FORM_STATE,
  });

  const [logoPreview, setLogoPreview] = useState<string | null>(
    initialData?.logoImageUrl || null
  );
  const [logoFile, setLogoFile] = useState<File | null>(null);

  return (
    <div className={'p-[20px]'}>
      <FormSection content={'동아리 로고 이미지'}>
        <LogoImage
          setLogoFile={setLogoFile}
          logoPreview={logoPreview}
          setLogoPreview={setLogoPreview}
        />
      </FormSection>
      <form className={'flex flex-col gap-2'}>
        <FormSection content={'캠퍼스'} required>
          <Controller
            render={({ field }) => (
              <Select {...field} optionList={CAMPUS_OPTIONS} />
            )}
            name={'campus'}
            control={control}
          />
        </FormSection>
        <FormSection content={'카테고리'} required>
          <Controller
            render={({ field }) => (
              <Select {...field} optionList={CategoryList} />
            )}
            name={'category'}
            control={control}
          />
        </FormSection>
        <FormSection content={'태그'} required>
          <Input
            placeholder={'창업'}
            maxLength={8}
            {...register('tag', {
              required: true,
            })}
          />
          {errors.tag?.message && <ErrorMessage message={errors.tag.message} />}
        </FormSection>
        <FormSection content={'동아리 이름'} required>
          <Input
            placeholder={''}
            maxLength={20}
            {...register('name', { required: true })}
          />
          {errors.name?.message && (
            <ErrorMessage message={errors.name.message} />
          )}
        </FormSection>
        <FormSection content={'동아리 소개'} required>
          <Textarea
            placeholder={
              '다양한 활동을 하며 진로를 찾아가는 진로탐색 동아리 『제로』 입니다!\n' +
              '\n' +
              '스펙업을 위한 취미 활동 ⬆️\n' +
              '\n' +
              '창업동아리 및 새로운 취미 탐색 모집시기: 학기마다 사전에 공지 계획'
            }
            maxLength={2000}
            addStyles={'min-h-[200px]'}
            {...register('introduction', { required: true })}
          />
          {errors.introduction?.message && (
            <ErrorMessage message={errors.introduction.message} />
          )}
        </FormSection>
        <FormSection content={'회장단(관계자) 번호'}>
          <Textarea
            placeholder={'OOO : 010-1234-5678\n' + 'OOO : 010-1234-5678\n'}
            maxLength={100}
            addStyles={'min-h-[100px]'}
            {...register('contact')}
          />
        </FormSection>
        <FormSection content={'동아리 모집기간'}>
          <Textarea
            placeholder={'2월 1일 ~ 3월 10일'}
            maxLength={50}
            addStyles={'min-h-[100px]'}
            {...register('recruitmentPeriod')}
          />
        </FormSection>
        <FormSection content={'동아리 모집방법'}>
          <Textarea
            placeholder={'추후 네이버 폼으로 모집 예정'}
            maxLength={100}
            addStyles={'min-h-[100px]'}
            {...register('membershipMethod')}
          />
        </FormSection>
        <FormSection content={'동아리 모집 url (구글폼, 사이트)'}>
          <Input
            placeholder={''}
            maxLength={1000}
            {...register('recruitmentUrl')}
          />
        </FormSection>
        <FormSection content={'동아리 인스타그램 아이디'}>
          <Input
            placeholder={'knu-times'}
            maxLength={30}
            {...register('instagram')}
          />
        </FormSection>
        <FormSection content={'동아리 유튜브'}>
          <Input
            placeholder={'https://www.youtube.com/@KNU1948'}
            maxLength={1000}
            {...register('youtubeUrl')}
          />
        </FormSection>
        <FormSection content={'동아리 홈페이지'}>
          <Input
            placeholder={'https://www.kongju.ac.kr'}
            {...register('homepageUrl')}
            maxLength={1000}
          />
        </FormSection>
        <div className={'mt-10'}>
          {initialData ? (
            <UpdateButton
              id={initialData.id}
              logoFile={logoFile}
              logoPreview={logoPreview}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          ) : (
            <CreateButton
              logoFile={logoFile}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default PageComponent;

const FormSection = ({
  content,
  required,
  children,
}: PropsWithChildren<{
  content: string;
  required?: boolean;
}>) => {
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
