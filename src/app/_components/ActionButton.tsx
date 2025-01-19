const ActionButton = ({
  children,
  onClick,
  disabled,
}: Readonly<{
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}>) => {
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
