import { ClubDetailKey } from '@/types/club';

const Select = ({
  value,
  clubDetailKey,
  handleFieldChange,
  optionList,
}: {
  value: string;
  clubDetailKey: ClubDetailKey;
  handleFieldChange: (name: ClubDetailKey, data: string) => void;
  optionList: string[];
}) => {
  return (
    <select
      className={'w-full border rounded-md px-3 py-2'}
      value={value}
      onChange={(e) => {
        handleFieldChange(clubDetailKey, e.target.value);
      }}
    >
      {optionList.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </select>
  );
};

export default Select;
