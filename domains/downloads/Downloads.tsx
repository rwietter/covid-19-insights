import { type ReactNode } from 'react';
import { Header, Sidebar } from '../dashboard/features';
import { Drops } from '@/shared/components/Drops';
import { DownloadCard } from '@/domains/downloads/components';

const Downloads = (): ReactNode => {
  return (
    <main>
      <Header.Root>
        <Header.Icon />
      </Header.Root>
      <Sidebar />
      <div className='bg-white relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center text-slate-700 rounded-tl-3xl'>
        <section className='p-4 py-8 relative z-10'>
          <h1 className='text-center font-bold font-sans text-2xl'>Bases de dados anonimizados</h1>
          <section className='grid md:grid-cols-3 p-4 gap-5 py-8'>
            <DownloadCard />
          </section>
        </section>
        <div className='w-4/5 h-3/4 flex justify-between absolute z-0'>
          <Drops />
        </div>
      </div>
    </main>
  );
};

export { Downloads };
