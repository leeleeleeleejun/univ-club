import { CategoryList } from '@/constants/color';
import ActionButton from '@/app/_components/ActionButton';

const Page = async ({ params }: { params: Promise<{ id?: string[] }> }) => {
  const { id } = await params;
  console.log(id);

  return (
    <div className={'p-[20px] gap-2 flex flex-col overflow-y-scroll'}>
      <Title content={'캠퍼스'} />
      <select className={'border rounded-md px-3 py-2'}>
        <option>신관캠</option>
        <option>천안캠</option>
        <option>예산캠</option>
      </select>
      <Title content={'카테고리'} />
      <select className={'border rounded-md px-3 py-2'}>
        {CategoryList.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <Title content={'태그'} />
      <input className={commonInputStyle} placeholder={'창업'} />
      <Title content={'동아리 로고 이미지 (선택)'} />
      <input
        type={'file'}
        id='file'
        accept='image/jpeg, image/png'
        className={commonInputStyle}
      />
      <Title content={'동아리 이름'} />
      <input className={commonInputStyle} />
      <Title content={'동아리 소개'} />
      <textarea
        className={commonInputStyle + ' min-h-[200px]'}
        placeholder={
          '다양한 활동을 하며 진로를 찾아가는 진로탐색 동아리 『제로』 입니다!\n' +
          '\n' +
          '스펙업을 위한 취미 활동 ⬆️\n' +
          '\n' +
          '창업동아리 및 새로운 취미 탐색 모집시기: 학기마다 사전에 공지 계획'
        }
      />
      <Title content={'동아리 모집기간'} />
      <input className={commonInputStyle} placeholder={'2월 1일 ~ 3월 10일'} />
      <Title content={'동아리 모집방법'} />
      <input
        className={commonInputStyle}
        placeholder={'추후 네이버 폼으로 모집 예정'}
      />
      <Title content={'동아리 모집 url (구글폼, 사이트)'} />
      <input className={commonInputStyle} />
      <Title content={'동아리 인스타그램 아이디'} />
      <input className={commonInputStyle + ' mb-6'} placeholder={'knu-times'} />
      <ActionButton>제출하기</ActionButton>
    </div>
  );
};

export default Page;

const Title = ({ content }: { content: string }) => {
  return <h3 className={'font-semibold text-lg'}>{content}</h3>;
};

const commonInputStyle =
  'border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none';
