import Link from 'next/link';
import React, { type ReactNode } from 'react';

const AccessDashboard = (): ReactNode => {
  return (
    <>
      <div className='relative md:flex xl:block'>
        <h1
          className='text-black text-7xl font-black font-secondary pr-6 mix-blend-color-burn'
          id='title-blend'
        >
          Covid
        </h1>
        <p
          className='text-black text-7xl font-black font-secondary  mix-blend-color-burn'
          id='title-blend'
        >
          Insights
        </p>
      </div>
      <p
        id='subtitle-blend'
        className='text-black text-2xl md:text-3xl font-secondary relative z-10 pt-8'
      >
        Tenha uma visão detalhada sobre a pandemia do covid-19 no RS.
      </p>

      <button
        type='button'
        className='border-2 border-foreground text-foreground font-semibold text-xl px-8 py-3 rounded-lg mt-10 hover:text-white hover:bg-foreground transition-all relative z-10 shadow-2xl active:opacity-50'
      >
        <Link href='/dashboard'>Acessar Dashboard</Link>
      </button>
    </>
  );
};

export { AccessDashboard };
