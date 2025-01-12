import { campusColor } from '@/constants/color';

const CampusTag = ({ campus }: { campus: string }) => {
  return (
    <div
      className={`h-fit ${campusColor[campus]} text-base font-semibold ml-auto rounded-xl px-4 py-2`}
    >
      {campus}
    </div>
  );
};

export default CampusTag;
