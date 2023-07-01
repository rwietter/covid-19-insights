import { type FC } from 'react';
import type { TotalPatients } from '@/domains/dashboard/types';

interface CardProps {
  countPatients: TotalPatients['countPatients'];
  countDeadPatients: number;
}

const Cards: FC<CardProps> = ({ countPatients = 0, countDeadPatients = 0 }) => {
  const confirmedCases = Intl.NumberFormat('pt-BR').format(countPatients);
  const deaths = Intl.NumberFormat('pt-BR').format(countDeadPatients);

  const fatality = countDeadPatients / countPatients;
  const fatalityRate = (fatality * 100).toFixed(2);

  return (
    <section className='w-full grid md:grid-cols-3 gap-6 lg:gap-25 xl:gap-32 px-5 pt-10'>
      <div className='h-32 bg-white rounded-2xl flex flex-col flex-1 justify-evenly p-3 relative border-2 border-slate-200'>
        <div className='absolute rounded-sm bg-indigo-600 border-green-400 left-[-3px] top-5 h-9 w-[.35rem]'></div>
        <h1 className='text-xl uppercase font-normal font-sans text-foreground'>
          Casos Confirmados
        </h1>
        <h2 className='text-xl text-foreground font-semibold'>{confirmedCases}</h2>
      </div>

      <div className='h-32 bg-white rounded-2xl flex flex-col flex-1 justify-evenly p-3 relative border-2 border-slate-200'>
        <div className='absolute rounded-sm bg-rose-500 border-green-400 left-[-3px] top-5 h-9 w-[.35rem]'></div>
        <h1 className='text-xl font-normal uppercase font-sans text-foreground'>Mortes</h1>
        <h2 className='text-xl text-slate-800 font-semibold'>{deaths}</h2>
      </div>

      <div className='h-32 bg-white rounded-2xl flex flex-col flex-1 justify-evenly p-3 relative border-2 border-slate-200'>
        <div className='absolute rounded-sm bg-emerald-400 border-green-400 left-[-3px] top-5 h-9 w-[.35rem]'></div>
        <h1 className='text-xl font-normal uppercase font-sans text-foreground'>Letalidade</h1>
        <h2 className='text-xl text-foreground font-semibold'>{fatalityRate}%</h2>
      </div>
    </section>
  );
};

export { Cards };
