import Image from 'next/image';
import { type FC } from 'react';

const Header: FC = () => {
  return (
    <header className='bg-secondary text-foreground w-full h-16 flex items-center justify-between px-5 md:px-8 py-1'>
      <section className='flex items-center gap-3'>
        <Image src="/virus.svg" alt="Logo" width={42} height={42} />
        <h1 className='text-lg text-foreground font-bold'>Covid Insights</h1>
      </section>
      <section>
        <input
          type="text"
          defaultValue="01/01/23 - 08/01/23"
          className='border w-full max-w-[13rem] bg-secondary border-gray-300 rounded px-3 py-2 outline-none'
        />
      </section>
    </header>
  );
};

export { Header };
