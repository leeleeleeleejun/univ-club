import React from 'react';

const LoadingLine = ({ colSpan = 1 }) => (
  <div className={`h-2 bg-slate-200 rounded col-span-${colSpan}`} />
);

const LoadingSection = () => (
  <div className='flex-1 space-y-6 py-1'>
    <LoadingLine />
    <div className='space-y-3'>
      <div className='grid grid-cols-3 gap-4'>
        <LoadingLine colSpan={2} />
        <LoadingLine colSpan={1} />
      </div>
      <LoadingLine />
      <div className='grid grid-cols-3 gap-4'>
        <LoadingLine colSpan={1} />
        <LoadingLine colSpan={2} />
      </div>
      <LoadingLine />
    </div>
  </div>
);

export default function Loading() {
  return (
    <div className='flex flex-col justify-center h-full border border-blue-300 rounded-md p-[20px]'>
      <div className='animate-pulse flex space-x-4'>
        <div className='rounded-full bg-slate-200 h-24 w-24' />
        <LoadingSection />
      </div>
      {[...Array(4)].map((_, index) => (
        <div key={index} className='animate-pulse flex space-x-4 mt-5'>
          <LoadingSection />
        </div>
      ))}
    </div>
  );
}
