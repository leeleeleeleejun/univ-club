import { ClubDetailKey } from '@/types/club';

const Input = ({
  value,
  placeholder = '',
  clubDetailKey,
  setDataFunc,
}: {
  value: string;
  placeholder: string;
  clubDetailKey: ClubDetailKey;
  setDataFunc: (name: ClubDetailKey, data: string) => void;
}) => {
  return (
    <input
      className={commonInputStyle}
      placeholder={placeholder}
      value={value || ''}
      onChange={(event) => {
        setDataFunc(clubDetailKey, event.target.value);
      }}
    />
  );
};

export default Input;

export const commonInputStyle =
  'w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none';
