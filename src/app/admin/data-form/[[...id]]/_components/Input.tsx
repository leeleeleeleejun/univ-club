import { useState } from 'react';

interface InputProps {
  placeholder: string;
  maxLength?: number;
}

const Input = ({ placeholder = '', maxLength, ...props }: InputProps) => {
  const [count, setCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(e.target.value.length);
  };

  return (
    <div>
      <input
        className={commonInputStyle}
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

export default Input;

export const commonInputStyle =
  'w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none';
