import { type FC } from 'react';

const Banner: FC = () => {
  const date = new Date().toLocaleDateString('pt-BR', { timeZone: 'UTC' });

  return (
    <section className='px-5 pt-6'>
      <h1 className='text-3xl text-slate-500 font-sans'>
        Covid
        <strong className='text-slate-800'>
          &nbsp;Insights
        </strong>
        .
      </h1>
      <span className='pt-1 block text-slate-500'>Atualizado em: {date}</span>
    </section>
  );
};

export { Banner };
