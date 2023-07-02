import { type FC } from 'react';
import type { TotalPatients } from '@/domains/dashboard/types';

interface CardProps {
  countPatients: TotalPatients['countPatients'];
  countDeadPatients: number;
  averageDeadPatientAge: number;
}

const Cards: FC<CardProps> = ({
  countPatients = 0,
  countDeadPatients = 0,
  averageDeadPatientAge = 0,
}) => {
  const confirmedCases = Intl.NumberFormat('pt-BR').format(countPatients);
  const deaths = Intl.NumberFormat('pt-BR').format(countDeadPatients);

  const fatality: number = countDeadPatients / countPatients;
  const fatalityRate = isNaN(fatality * 100) ? 0 : (fatality * 100).toFixed(2);

  return (
    <section className='w-full grid xl:grid-cols-4 gap-3 lg:gap-5 xl:gap-5 px-5 pt-10'>
      <div className='h-32 bg-white rounded-2xl flex flex-col flex-1 justify-evenly p-3 relative border-2 border-slate-200 hover:border-2 hover:border-indigo-600 transition-colors'>
        <div className='absolute rounded-sm bg-indigo-600 border-green-400 left-[-3px] top-6 h-9 w-[.35rem]'></div>
        <h1 className='text-xl uppercase font-normal font-sans text-foreground'>
          Casos Confirmados
        </h1>
        <h2 className='text-xl text-foreground font-semibold'>
          {confirmedCases} <span className='text-sm text-slate-500 font-light'>casos</span>
        </h2>
      </div>

      <div className='h-32 bg-white rounded-2xl flex flex-col flex-1 justify-evenly p-3 relative border-2 border-slate-200 hover:border-2 hover:border-rose-500 transition-colors'>
        <div className='absolute rounded-sm bg-rose-500 border-green-400 left-[-3px] top-6 h-9 w-[.35rem]'></div>
        <h1 className='text-xl font-normal uppercase font-sans text-foreground'>Mortes</h1>
        <h2 className='text-xl text-slate-800 font-semibold'>
          {deaths} <span className='text-sm text-slate-500 font-light'>vítimas</span>
        </h2>
      </div>

      <div className='h-32 bg-white rounded-2xl flex flex-col flex-1 justify-evenly p-3 relative border-2 border-slate-200 hover:border-2 hover:border-blue-500 transition-colors'>
        <div className='absolute rounded-sm bg-blue-500 border-green-400 left-[-3px] top-6 h-9 w-[.35rem]'></div>
        <h1 className='text-xl font-normal uppercase font-sans text-foreground'>
          Idade média das vítimas
        </h1>
        <h2 className='text-xl text-slate-800 font-semibold'>
          {averageDeadPatientAge}{' '}
          <span className='text-sm text-slate-500 font-light'>idade média</span>
        </h2>
      </div>

      <div className='h-32 bg-white rounded-2xl flex flex-col flex-1 justify-evenly p-3 relative border-2 border-slate-200 hover:border-2 hover:border-slate-700 transition-colors'>
        <div className='absolute rounded-sm bg-slate-700 border-green-400 left-[-3px] top-6 h-9 w-[.35rem]'></div>
        <h1 className='text-xl font-normal uppercase font-sans text-foreground'>Letalidade</h1>
        <h2 className='text-xl text-foreground font-semibold'>
          {fatalityRate}%{' '}
          <span className='text-sm text-slate-500 font-light'>taxa de fatalidade</span>
        </h2>
      </div>
    </section>
  );
};

export { Cards };
