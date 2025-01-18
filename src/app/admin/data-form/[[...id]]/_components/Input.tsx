import { ClubDetailKey } from '@/types/club';

const Input = ({
  value,
  placeholder = '',
  clubDetailKey,
  handleFieldChange,
  maxLength,
}: {
  value: string;
  placeholder: string;
  clubDetailKey: ClubDetailKey;
  handleFieldChange: (name: ClubDetailKey, data: string) => void;
  maxLength?: number;
}) => {
  return (
    <div>
      <input
        className={commonInputStyle}
        placeholder={placeholder}
        value={value || ''}
        onChange={(event) => {
          handleFieldChange(clubDetailKey, event.target.value);
        }}
        maxLength={maxLength}
      />
      {maxLength && (
        <div className={'text-sm text-right font-semibold text-gray-400'}>
          {value.length} / {maxLength}
        </div>
      )}
    </div>
  );
};

export default Input;

export const commonInputStyle =
  'w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none';
