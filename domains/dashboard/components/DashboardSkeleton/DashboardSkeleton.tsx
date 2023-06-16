import { Header } from '@/domains/dashboard/features';
import { Banner } from '@/domains/dashboard/components';

const Card = () => (
  <div className='h-32  bg-white rounded-md flex flex-col flex-1 justify-evenly p-3 relative border-2 border-slate-300'>
    <div className='absolute rounded-sm bg-indigo-600 border-green-400 left-[-4px] top-5 h-9 w-[.35rem]' />
    <div className='h-5 animate-pulse w-full rounded-full bg-gray-300 max-w-[300px]' />
    <div className='h-7 animate-pulse w-full rounded-full mt-2 bg-gray-300 max-w-[250px]' />
  </div>
);

const GridItem = () => (
  <div role="status" className="w-full animate-pulse bg-secondary max-h-[500px] p-4 pb-20 shadow-lg rounded-lg">
    <div className='h-5 rounded-full m-auto bg-gray-300 max-w-[360px]' />
    <div className='h-5 rounded-full mt-4 m-auto bg-gray-300 max-w-[440px]' />
    <div className='h-96 mt-4 rounded-lg bg-gray-300 m-auto w-full max-w-2xl' />
  </div>
);

const DashboardSkeleton = () => (
  <div className={'bg-background overflow-hidden w-screen min-h-screen text-foreground font-sans'}>
    <Header />
    <main className='px-2 md:px-12 m-auto pt-28'>
      <Banner />
      <section className='w-full grid md:grid-cols-3 gap-6 lg:gap-25 xl:gap-32 px-5 pt-6'>
        <Card />
        <Card />
        <Card />
      </section>

      <section
        className='w-full h-full grid xl:grid-cols-2 grid-flow-row py-8 gap-4 lg:gap-7 max-w-full px-5 place-items-center'
      >
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </section>
    </main>
  </div>
);

export { DashboardSkeleton };
