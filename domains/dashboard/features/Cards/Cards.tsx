import { type FC } from 'react';
import type { TotalPatients } from '@/domains/dashboard/types';

interface CardProps {
  countPatients: TotalPatients['countPatients']
}
const Cards: FC<CardProps> = ({ countPatients }) => {
  const nroPacientes = Intl.NumberFormat('pt-BR').format(countPatients);
  return (
    <section className='w-full grid md:grid-cols-3 gap-6 lg:gap-25 xl:gap-32 px-5 pt-6'>
      <div className='h-32 bg-white rounded-md flex flex-col flex-1 justify-evenly p-3 relative border-2 border-slate-300'>
        <div className='absolute rounded-sm bg-indigo-600 border-green-400 left-[-3px] top-5 h-9 w-[.35rem]'></div>
        <h1 className='text-xl font-normal font-sans text-slate-700'>Nro. Pacientes</h1>
        <h2 className='text-xl text-slate-800 font-semibold'>{nroPacientes}</h2>
      </div>

      <div className='h-32 bg-white rounded-md flex flex-col flex-1 justify-evenly p-3 relative border-2 border-slate-300'>
        <div className='absolute rounded-sm bg-rose-500 border-green-400 left-[-3px] top-5 h-9 w-[.35rem]'></div>
        <h1 className='text-xl font-normal font-sans text-slate-700'>Nro. Pacientes</h1>
        <h2 className='text-xl text-slate-800 font-semibold'>{nroPacientes}</h2>
      </div>

      <div className='h-32 bg-white rounded-md flex flex-col flex-1 justify-evenly p-3 relative border-2 border-slate-300'>
        <div className='absolute rounded-sm bg-emerald-400 border-green-400 left-[-3px] top-5 h-9 w-[.35rem]'></div>
        <h1 className='text-xl font-normal font-sans text-slate-700'>Nro. Pacientes</h1>
        <h2 className='text-xl text-slate-800 font-semibold'>{nroPacientes}</h2>
      </div>
    </section>
  );
};

export { Cards };
