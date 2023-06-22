import { type ReactNode } from 'react';
import { BiLeftArrow } from 'react-icons/bi';

const FakeChart = (): ReactNode => {
  return (
    <section className='absolute mt-28 select-none text-black text-center z-20 w-full max-w-2xl backdrop-blur-sm bg-transparent shadow-2xl p-5 rounded-lg'>
      <header>
        <div>
          <p className='font-normal text-2xl font-secondary'>Casos de covid por idade</p>
          <p className='font-light text-lg font-secondary'>
            Casos de covid por idade entre as datas de 15/03/2021 e 15/04/2022
          </p>
        </div>
      </header>
      <main className='flex justify-evenly items-end pt-10 relative'>
        <div className='h-40 rounded-sm w-14 bg-foregroundExtraLight relative'>
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
        <div className='h-44 rounded-sm w-14 bg-foregroundExtraLight relative'>
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
        <div className='text-start p-2 px-6 fixed bg-white shadow-slate-400 top-24 right-20 shadow-2xl rounded-md'>
          <BiLeftArrow size={20} className='absolute -left-7 top-5' />
          <p>30 a 49</p>
          <p>16000 (26%)</p>
        </div>
      </main>
      <div className='flex justify-center items-center w-full mt-10'>
        <div className='w-4 h-4 rounded-full bg-foregroundExtraLight' />
        <p className='pl-3 font-sans'>Idades</p>
      </div>
    </section>
  );
};

export { FakeChart };
