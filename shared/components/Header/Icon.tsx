import Image from 'next/image';
import { type FC } from 'react';

const Icon: FC = () => (
  <section className='items-center gap-3 hidden sm:flex'>
    <Image src='/virus.svg' alt='Logo' width={30} height={30} />
    <h1 className='text-slate-800 font-sans font-semibold'>Covid Insights</h1>
  </section>
);

export default Icon;
