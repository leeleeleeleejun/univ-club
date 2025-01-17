'use client';

import { CategoryList } from '@/constants/color';
import ActionButton from '@/app/_components/ActionButton';
import { ClubDetail, ClubDetailKey } from '@/types/club';
import { useEffect, useState } from 'react';
import Input, { commonInputStyle } from './Input';
import LogoImage from '@/app/admin/data-form/[[...id]]/_components/LogoImage';
import Select from './Select';

const PageComponent = ({
  initialData,
}: {
  initialData: ClubDetail | undefined;
}) => {
  const [data, setData] = useState<ClubDetail>({
    name: '',
    category: '',
    tag: '',
    campus: '',
    logoImageUrl: '',
    recruitmentPeriod: '',
    introduction: '',
    membershipMethod: '',
    instagram: '',
    recruitmentUrl: '',
  });
  const [viewProfileImg, setViewProfileImg] = useState<string | null>(null);
  const [imgFile, setImgFile] = useState<File | null>(null);

  useEffect(() => {
    if (initialData) {
      setData(initialData);
      setViewProfileImg(initialData.logoImageUrl);
    }
  }, [initialData]);

  const setDataFunc = (name: ClubDetailKey, data: string) => {
    setData((prev) => ({ ...prev, [name]: data }));
  };

  return (
    <div className={'p-[20px] gap-6 flex flex-col overflow-y-scroll'}>
      <ContentWrap content={'동아리 로고 이미지 (선택)'}>
        <LogoImage
          setImgFile={setImgFile}
          viewProfileImg={viewProfileImg}
          setViewProfileImg={setViewProfileImg}
        />
      </ContentWrap>
      <ContentWrap content={'캠퍼스'}>
        <Select
          value={data.campus}
          setDataFunc={setDataFunc}
          clubDetailKey={'campus'}
          optionList={['신관캠', '천안캠', '예산캠']}
        />
      </ContentWrap>
      <ContentWrap content={'카테고리'}>
        <Select
          value={data.category}
          setDataFunc={setDataFunc}
          clubDetailKey={'category'}
          optionList={CategoryList}
        />
      </ContentWrap>
      <ContentWrap content={'태그'}>
        <Input
          setDataFunc={setDataFunc}
          clubDetailKey={'tag'}
          placeholder={'창업'}
          value={data.tag}
        />
      </ContentWrap>
      <ContentWrap content={'동아리 이름'}>
        <Input
          setDataFunc={setDataFunc}
          clubDetailKey={'name'}
          placeholder={''}
          value={data.name}
        />
      </ContentWrap>
      <ContentWrap content={'동아리 소개'}>
        <textarea
          className={commonInputStyle + ' min-h-[200px]'}
          value={data.introduction}
          placeholder={
            '다양한 활동을 하며 진로를 찾아가는 진로탐색 동아리 『제로』 입니다!\n' +
            '\n' +
            '스펙업을 위한 취미 활동 ⬆️\n' +
            '\n' +
            '창업동아리 및 새로운 취미 탐색 모집시기: 학기마다 사전에 공지 계획'
          }
          onChange={(event) => {
            setDataFunc('introduction', event.target.value);
          }}
        />
      </ContentWrap>
      <ContentWrap content={'동아리 모집기간'}>
        <Input
          setDataFunc={setDataFunc}
          clubDetailKey={'recruitmentPeriod'}
          placeholder={'2월 1일 ~ 3월 10일'}
          value={data.recruitmentPeriod}
        />
      </ContentWrap>
      <ContentWrap content={'동아리 모집방법'}>
        <Input
          setDataFunc={setDataFunc}
          clubDetailKey={'membershipMethod'}
          placeholder={'추후 네이버 폼으로 모집 예정'}
          value={data.membershipMethod}
        />
      </ContentWrap>
      <ContentWrap content={'동아리 모집 url (구글폼, 사이트)'}>
        <Input
          setDataFunc={setDataFunc}
          clubDetailKey={'recruitmentUrl'}
          value={data.recruitmentUrl}
          placeholder={''}
        />
      </ContentWrap>
      <ContentWrap content={'동아리 인스타그램 아이디'}>
        <Input
          setDataFunc={setDataFunc}
          clubDetailKey={'instagram'}
          placeholder={'knu-times'}
          value={data.instagram}
        />
      </ContentWrap>
      <div className={'mt-10'}>
        <ActionButton>제출하기</ActionButton>
      </div>
    </div>
  );
};

export default PageComponent;

const ContentWrap = ({
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
