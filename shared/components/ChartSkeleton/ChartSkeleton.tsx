import React from 'react';

const ChartSkeleton = () => (
  <div role="status" className="w-full animate-pulse bg-secondary max-h-[500px] p-4 pb-20 shadow-lg rounded-lg">
    <div className='h-5 rounded-full m-auto bg-gray-300 max-w-[360px]' />
    <div className='h-5 rounded-full mt-4 m-auto bg-gray-300 max-w-[440px]' />
    <div className='h-96 mt-4 rounded-lg bg-gray-300 m-auto w-full max-w-2xl' />
  </div>
);

export { ChartSkeleton };
