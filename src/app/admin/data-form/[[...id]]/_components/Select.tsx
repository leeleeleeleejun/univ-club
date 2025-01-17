import { ClubDetailKey } from '@/types/club';

const Select = ({
  value,
  clubDetailKey,
  setDataFunc,
  optionList,
}: {
  value: string;
  clubDetailKey: ClubDetailKey;
  setDataFunc: (name: ClubDetailKey, data: string) => void;
  optionList: string[];
}) => {
  return (
    <select
      className={'w-full border rounded-md px-3 py-2'}
      value={value}
      onChange={(e) => {
        setDataFunc(clubDetailKey, e.target.value);
      }}
    >
      {optionList.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </select>
  );
};

export default Select;
