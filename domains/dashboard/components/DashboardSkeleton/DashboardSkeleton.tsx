import { Banner } from '@/domains/dashboard/components';
import { Header, Sidebar } from '@/shared/components';
import { type ReactNode } from 'react';

const Card = (): ReactNode => (
  <div className='h-32  bg-white rounded-2xl flex flex-col flex-1 justify-evenly p-3 relative border-2 border-slate-200'>
    <div className='absolute rounded-sm bg-indigo-600 border-green-400 left-[-4px] top-5 h-9 w-[.35rem]' />
    <div className='h-5 animate-pulse w-full rounded-full bg-gray-300 max-w-[300px]' />
    <div className='h-7 animate-pulse w-full rounded-full mt-2 bg-gray-300 max-w-[250px]' />
  </div>
);

const GridItem = (): ReactNode => (
  <div role='status' className='w-full p-4 pb-20 rounded-lg'>
    <div className='h-5 rounded-full animate-pulse m-auto bg-gray-200 max-w-[360px]' />
    <div className='h-5 rounded-full animate-pulse mt-4 m-auto bg-gray-200 max-w-[440px]' />
    <div className='h-96 mt-4 rounded-lg animate-pulse bg-gray-200 m-auto w-full max-w-2xl' />
  </div>
);

const DashboardSkeleton = (): ReactNode => (
  <div className='bg-primary overflow-hidden w-screen min-h-screen text-foreground font-sans'>
    <Header.Root>
      <Header.Icon />
      <div className='flex max-w-sm'>
        <Header.City />
        <Header.DatePicker />
      </div>
    </Header.Root>
    <Sidebar />
    <main className='px-2 md:px-12 m-auto md:ml-16 mt-16 bg-background rounded-tl-3xl'>
      <Banner.Root />
      <section className='w-full grid xl:grid-cols-4 gap-3 lg:gap-5 xl:gap-5 px-5 pt-10'>
        <Card />
        <Card />
        <Card />
        <Card />
      </section>

      <section className='w-full h-full grid xl:grid-cols-2 grid-flow-row py-8 gap-x-4 gap-y-14 max-w-full md:px-5 place-items-center'>
        <GridItem />
        <GridItem />
      </section>
    </main>
  </div>
);

export { DashboardSkeleton };
