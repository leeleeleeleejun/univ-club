import { campusTextColor } from '@/constants/color';

const CampusTag = ({ campus }: { campus: string }) => {
  return (
    <div
      className={`text-nowrap h-fit ${campusTextColor[campus]} bg-gray-50 text-base font-semibold rounded-xl px-4 py-2 ml-auto`}
    >
      {campus}
    </div>
  );
};

export default CampusTag;
