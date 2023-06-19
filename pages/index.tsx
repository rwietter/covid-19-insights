import { Sidebar } from '@/domains/dashboard/features';
import Image from 'next/image';

export default function Page() {
  return (
    <div className='bg-primary overflow-hidden'>
      <header className='bg-primary bg-opacity-80 fixed top-0 backdrop-blur-sm text-foreground z-50 w-full h-16 flex items-center justify-center sm:justify-between px-5 md:px-8 py-1'>
        <section className='items-center gap-3 hidden sm:flex'>
          <Image src="/virus.svg" alt="Logo" width={30} height={30} />
          <h1 className='text-slate-800 font-sans font-semibold'>Covid Insights</h1>
        </section>
      </header>

      <Sidebar />

      <main className='px-2 min-h-[calc(100vh-4rem)] md:px-12 m-auto ml-16 mt-16 bg-background rounded-tl-3xl'>
        <section
          className='w-full h-full grid xl:grid-cols-2 grid-flow-row py-8 gap-4 lg:gap-7 max-w-full px-5 place-items-center'
        >
        </section>
      </main>
    </div>
  );
}
