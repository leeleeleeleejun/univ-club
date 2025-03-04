const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <p className={'ml-1 -mt-5 text-red-400 text-small font-light'}>{message}</p>
  );
};
export default ErrorMessage;
