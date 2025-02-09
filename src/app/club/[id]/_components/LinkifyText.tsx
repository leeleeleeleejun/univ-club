import Link from 'next/link';

const LinkifyText = ({ text }: { text: string }) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  const parts = text.split(urlRegex);

  return (
    <>
      {parts.map((part, i) => {
        if (part.match(urlRegex)) {
          return (
            <Link
              key={i}
              href={part}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500'
            >
              {part}
            </Link>
          );
        }
        return part;
      })}
    </>
  );
};

export default LinkifyText;
