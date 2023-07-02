import Image from 'next/image';
import { type ReactNode } from 'react';

const Drops = (): ReactNode => (
  <>
    <Image
      src='/use292.svg'
      alt='404'
      className='absolute z-30 left-0 top-0 pointer-events-none'
      width={300}
      height={300}
    />
    <Image
      src='/use308.svg'
      alt='404'
      className='absolute z-30 right-0 bottom-0 pointer-events-none'
      width={300}
      height={300}
    />
  </>
);

export { Drops };
