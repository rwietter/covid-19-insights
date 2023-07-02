import { type FC, type PropsWithChildren, type ReactNode } from 'react';
import dayjs from 'dayjs';
import { useSelectDate } from '@/domains/dashboard/hooks/useSelectDate';

interface Props extends PropsWithChildren<unknown> {}

const Banner: FC<Props> = (props): ReactNode => {
  const { selectedDate } = useSelectDate();

  const startDate = dayjs(selectedDate.startDate).format('DD/MM/YYYY');
  const endDate = dayjs(selectedDate.endDate).format('DD/MM/YYYY');

  return (
    <section className='flex justify-between px-5 pt-10'>
      <section>
        <h1 className='text-3xl text-slate-500 font-sans'>
          Covid
          <strong className='text-slate-800'>&nbsp;Insights</strong>.
        </h1>
        <span className='pt-2 block text-slate-500 font-semibold w-full max-w-fit'>
          Pesquisa entre <strong className='text-slate-950'>{startDate}</strong> e{' '}
          <strong className='text-slate-950'>{endDate}</strong>
        </span>
      </section>
      {props.children}
    </section>
  );
};

export { Banner };
