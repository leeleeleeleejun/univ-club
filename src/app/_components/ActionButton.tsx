const ActionButton = ({
  children,
  onClick,
}: Readonly<{
  children: React.ReactNode;
  onClick?: () => void;
}>) => {
  return (
    <button
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
