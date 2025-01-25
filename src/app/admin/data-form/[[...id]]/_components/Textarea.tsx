import { ClubDetailKey } from '@/types/club';
import { commonInputStyle } from '@/app/admin/data-form/[[...id]]/_components/Input';

const Textarea = ({
  value,
  placeholder = '',
  clubDetailKey,
  handleFieldChange,
  maxLength,
  addStyles,
}: {
  value: string;
  placeholder: string;
  clubDetailKey: ClubDetailKey;
  handleFieldChange: (name: ClubDetailKey, data: string) => void;
  maxLength?: number;
  addStyles?: string;
}) => {
  return (
    <div>
      <textarea
        className={commonInputStyle + ' ' + addStyles}
        placeholder={placeholder}
        value={value || ''}
        onChange={(event) => {
          handleFieldChange(clubDetailKey, event.target.value);
        }}
        maxLength={maxLength}
      />
      {maxLength && (
        <div className={'text-sm text-right font-semibold text-gray-400'}>
          {value?.length || 0} / {maxLength}
        </div>
      )}
    </div>
  );
};

export default Textarea;
