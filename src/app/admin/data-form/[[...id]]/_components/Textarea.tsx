import { commonInputStyle } from '@/app/admin/data-form/[[...id]]/_components/Input';
import { useState } from 'react';

interface TextareaProps {
  placeholder: string;
  maxLength?: number;
  addStyles?: string;
}

const Textarea = ({
  placeholder = '',
  maxLength,
  addStyles,
  ...props
}: TextareaProps) => {
  const [count, setCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(e.target.value.length);
  };

  return (
    <div>
      <textarea
        className={commonInputStyle + ' ' + addStyles}
        placeholder={placeholder}
        maxLength={maxLength}
        {...props}
        onChange={handleChange}
      />
      {maxLength && (
        <div className={'text-sm text-right font-semibold text-gray-400'}>
          {count} / {maxLength}
        </div>
      )}
    </div>
  );
};

export default Textarea;
