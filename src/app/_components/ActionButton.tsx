import { PropsWithChildren } from 'react';

interface ActionButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

const ActionButton = ({
  children,
  onClick,
  disabled,
}: Readonly<PropsWithChildren<ActionButtonProps>>) => {
  return (
    <button
      disabled={disabled}
      className={
        'mt-auto w-full py-4 rounded-xl bg-blue-500 font-bold text-white transition-colors hover:bg-blue-600'
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ActionButton;
