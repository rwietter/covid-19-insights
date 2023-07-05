/* eslint-disable no-extra-boolean-cast */
import { type FC, type PropsWithChildren, type ReactNode } from 'react';
import dayjs from 'dayjs';
import { useSelectDate } from '@/domains/dashboard/hooks/useSelectDate';
import { useSelectCityStore } from '../../store';

interface Props extends PropsWithChildren<unknown> {}

const Banner: FC<Props> = (props): ReactNode => {
  const { selectedDate } = useSelectDate();
  const { city } = useSelectCityStore();

  const startDate = dayjs(selectedDate.startDate).format('DD/MM/YYYY');
  const endDate = dayjs(selectedDate.endDate).format('DD/MM/YYYY');

  const hasDate = Boolean(selectedDate.startDate) && Boolean(selectedDate.endDate);
  const hasCity = Boolean(city);

  return (
    <section className='flex justify-between px-5 pt-10'>
      <section>
        <h1 className='text-3xl text-slate-500 font-sans'>
          Covid
          <strong className='text-slate-800'>&nbsp;Insights</strong>.
        </h1>
        {hasDate ? (
          <p className='pt-2 block text-slate-500 font-semibold w-full max-w-fit'>
            Pesquisa entre <strong className='text-slate-950'>{startDate}</strong> e{' '}
            <strong className='text-slate-950'>{endDate}</strong>{' '}
            {hasCity ? (
              <span>
                na cidade de <strong className='text-slate-950'>{city}</strong>
              </span>
            ) : (
              ''
            )}
          </p>
        ) : (
          <div />
        )}
      </section>
      {props.children}
    </section>
  );
};

export { Banner };
