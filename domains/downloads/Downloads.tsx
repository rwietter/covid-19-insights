import { type ReactNode } from 'react';
import { Header, Sidebar } from '../dashboard/features';
import { Drops } from '@/shared/components/Drops';
import { downloadUrls } from './lib/download-urls';

const Downloads = (): ReactNode => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className='bg-white relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center text-slate-700 rounded-tl-3xl'>
        <main className='p-4 py-8 relative z-10'>
          <h1 className='text-center font-bold font-sans text-2xl'>Bases de dados anonimizados</h1>
          <section className='grid md:grid-cols-3 p-4 gap-5 py-8'>
            {downloadUrls.map((link) => (
              <a
                key={link.download}
                href={link.download}
                target='_blank'
                rel='noreferrer'
                className={`bg-white border-2 border-slate-200 hover:bg-slate-50 hover:border-indigo-400 transition-colors shadow-2xl p-5 rounded-md ${link.span}`}
              >
                <h1 className='text-sm font-medium font-secondary text-center'>{link.title}</h1>
              </a>
            ))}
          </section>
        </main>
        <div className='w-4/5 h-3/4 flex justify-between absolute z-0'>
          <Drops />
        </div>
      </div>
    </div>
  );
};

export { Downloads };
