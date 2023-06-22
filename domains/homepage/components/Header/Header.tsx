import Link from 'next/link';
import { type ReactNode } from 'react';

const Header = (): ReactNode => (
  <header className='absolute top-0 text-white z-50 w-full max-w-full h-16 flex items-center justify-center md:justify-between p-8 md:p-16'>
    <section>
      <h1 className='font-sans text-xl md:text-3xl font-bold select-none hidden md:block'>
        Covid Insights
      </h1>
    </section>
    <nav className='text-xl md:text-2xl font-sans'>
      <Link href='/dashboard' className='hover:underline hover:text-slate-300 transition-all'>
        Dashboard
      </Link>
      <Link href='/downloads' className='hover:underline px-6 hover:text-slate-300 transition-all'>
        Downloads
      </Link>
      <Link href='/about' className='hover:underline hover:text-slate-300 transition-all'>
        Sobre
      </Link>
    </nav>
  </header>
);

export { Header };
