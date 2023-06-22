import Link from 'next/link';
import React from 'react';
import { Patterns } from './components/Patterns';
import { BiLeftArrow } from 'react-icons/bi';

const Homepage: React.FC = () => {
  return (
    <div className='relative w-screen h-full md:min-h-screen bg-white'>
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
          <Link
            href='/downloads'
            className='hover:underline px-6 hover:text-slate-300 transition-all'
          >
            Downloads
          </Link>
          <Link href='/about' className='hover:underline hover:text-slate-300 transition-all'>
            Sobre
          </Link>
        </nav>
      </header>

      <main className='w-full h-full bg-background grid place-items-center gap-y-44 xl:grid-cols-2 pb-96 xl:pb-0 px-10 pt-10 xl:pt-32'>
        <div className='flex justify-center flex-col z-10 max-w-xl pt-24 md:pt-44 xl:pt-32 xl:pl-9'>
          <div id='main-homepage'></div>
          <div className='relative md:flex xl:block'>
            <h1
              className='text-black text-7xl lg:text-8xl font-black font-secondary pr-6 mix-blend-color-burn'
              id='title-blend'
            >
              Covid
            </h1>
            <p
              className='text-black text-7xl lg:text-8xl font-black font-secondary  mix-blend-color-burn'
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
        </div>

        <section className='hidden md:flex justify-center flex-col relative items-center w-full h-full'>
          <Patterns />
          <section className='absolute mt-32 text-black text-center z-20 w-full max-w-2xl backdrop-blur-sm bg-transparent shadow-2xl p-10 rounded-lg'>
            <header>
              <div>
                <p className='font-normal text-2xl font-secondary'>Casos de covid por idade</p>
                <p className='font-light text-lg font-secondary'>
                  Casos de covid por idade entre as datas de 15/03/2021 e 15/04/2022
                </p>
              </div>
            </header>
            <main className='flex justify-evenly items-end pt-10 relative'>
              <div className='h-48 rounded-sm w-14 bg-foregroundExtraLight relative'>
                <p className='-bottom-7 absolute left-0 right-0'>0-1</p>
              </div>
              <div className='h-40 rounded-sm w-14 bg-foregroundExtraLight relative'>
                <p className='-bottom-7 absolute left-0 right-0'>1-5</p>
              </div>
              <div className='h-24 rounded-sm w-14 bg-foregroundExtraLight relative'>
                <p className='-bottom-7 absolute left-0 right-0'>5-10</p>
              </div>
              <div className='h-16 rounded-sm w-14 bg-foregroundExtraLight relative'>
                <p className='-bottom-7 absolute left-0 right-0'>10-20</p>
              </div>
              <div className='h-52 rounded-sm w-14 bg-foregroundExtraLight relative'>
                <p className='-bottom-7 absolute left-0 right-0'>20-30</p>
              </div>
              <div className='h-36 rounded-sm w-14 bg-foregroundExtraLight relative'>
                <p className='-bottom-7 absolute left-0 right-0'>30-40</p>
              </div>
              <div className='h-28 rounded-sm w-14 bg-foregroundExtraLight relative'>
                <p className='-bottom-7 absolute left-0 right-0'>40-50</p>
              </div>
              <div className='h-10 rounded-sm w-14 bg-foregroundExtraLight relative'>
                <p className='-bottom-7 absolute left-0 right-0'>50-60</p>
              </div>
              <div className='text-start p-2 px-6 fixed bg-white shadow-slate-400 top-28 right-20 shadow-2xl rounded-md'>
                <BiLeftArrow size={20} className='absolute -left-7 top-7' />
                <p>30 a 49</p>
                <p>16000 (26%)</p>
              </div>
            </main>
            <div className='flex justify-center items-center w-full mt-10'>
              <div className='w-4 h-4 rounded-full bg-foregroundExtraLight' />
              <p className='pl-3 font-sans'>Idades</p>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
