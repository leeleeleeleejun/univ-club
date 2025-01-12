import ClubHeading from '@/app/club/[id]/_components/ClubHeading';
import LogoIcon from '@/assets/icons/logo.svg';
import ClubIntroduction from '@/app/club/[id]/_components/ClubIntroduction';

const ClubDetailPage = () => {
  return (
    <div className={'h-full p-[20px]'}>
      <ClubHeading
        logoImageUrl={LogoIcon}
        name={'PRIMITIVE'}
        category={'학술'}
        tag={'IT'}
        campus={'천안캠'}
      />
      <ClubIntroduction
        recruitmentPeriod={'2월 13일 ~ 3월 11일'}
        introduction={
          '프리미티브는 프로그래밍으로 어플리케이션, 웹사이트 등 실질적인 결과물을 토대로 경진대회 및 각종 공 모전에 참가하는 동아리입니다.'
        }
        membershipMethod={
          '모집 관련 내용 및 관련 내용 은 에브리타임에 게시, 1년에 한번 모집'
        }
        instagram={'primitive_knu'}
        formUrl={''}
      />
    </div>
  );
};

export default ClubDetailPage;
