import { type ReactNode } from 'react';
import { Patterns } from '@/domains/homepage/components/Patterns';
import { Header } from '@/domains/homepage/components/Header';
import { FakeChart } from '@/domains/homepage/components/FakeChart';
import { AccessDashboard } from '@/domains/homepage/components/AccessDashboard';
import { PolygonGradient } from '@/domains/homepage/components/PolygonGradient';

const Homepage = (): ReactNode => {
  return (
    <div className='relative w-screen h-full md:min-h-screen bg-white'>
      <Header />

      <main className='w-full h-full bg-background grid place-items-center gap-x-3 gap-y-44 xl:grid-cols-2 pb-96 xl:pb-0 px-10 pt-10 xl:pt-32'>
        <div className='flex justify-center flex-col z-10 max-w-xl pt-24 md:pt-44 xl:pt-32 xl:pl-9'>
          <PolygonGradient />
          <AccessDashboard />
        </div>

        <section className='hidden md:flex justify-center flex-col relative items-center w-full h-full'>
          <Patterns />
          <FakeChart />
        </section>
      </main>
    </div>
  );
};

export default Homepage;
