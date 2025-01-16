const ActionButton = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <button
      className={
        'mt-auto mb-[100px] w-full py-4 rounded-xl bg-blue-500 font-bold text-white transition-colors hover:bg-blue-600'
      }
    >
      {children}
    </button>
  );
};

export default ActionButton;
