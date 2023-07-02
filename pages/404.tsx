import { Drops } from '@/shared/components/Drops';
import Link from 'next/link';
import { type ReactNode } from 'react';

const Page404 = (): ReactNode => {
  return (
    <div className='relative w-full h-screen overflow-hidden bg-white'>
      <section className='flex flex-col z-20 absolute justify-center w-full h-full items-start p-10 lg:p-72 '>
        <h1 className='text-9xl font-bold text-slate-600'>
          40
          <span className='rotate-3 text-9xl'>4</span>
        </h1>
        <h2 className='text-2xl text-slate-700 pt-4 font-semibold'>
          OOPS... PÁGINA NÃO ENCONTRADA :(
        </h2>
        <p className='text-lg pt-2 max-w-xl text-slate-700'>
          Nós sugerimos voltar para a página inicial enquanto tentamos resolver o problema.
        </p>
        <Link
          href='/'
          className='block cursor-pointer bg-purple-500 mt-10 hover:bg-purple-600 transition-colors text-white font-bold py-3 px-4 text-center rounded'
          role='button'
        >
          Voltar para a página inicial
        </Link>
      </section>
      <div className='w-full h-full flex justify-between absolute z-10'>
        <Drops />
      </div>
    </div>
  );
};

export default Page404;
