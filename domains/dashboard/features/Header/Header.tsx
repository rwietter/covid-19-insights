import { DatePicker } from 'antd';
import Image from 'next/image';
import { useSelectDate } from '@/domains/dashboard/hooks/useSelectDate';
import locale from 'antd/lib/date-picker/locale/pt_BR';
import { type ReactNode } from 'react';

const Header = (): ReactNode => {
  const { onChangeDate, disabledDate } = useSelectDate();
  return (
    <header className='bg-primary bg-opacity-80 fixed backdrop-blur-sm text-foreground z-50 w-full h-16 flex items-center justify-center sm:justify-between px-5 md:px-8 py-1'>
      <section className='items-center gap-3 hidden sm:flex'>
        <Image src='/virus.svg' alt='Logo' width={30} height={30} />
        <h1 className='text-slate-800 font-sans font-semibold'>Covid Insights</h1>
      </section>
      <section>
        <DatePicker.RangePicker
          onChange={(date) => {
            onChangeDate(date);
          }}
          format='DD/MM/YYYY'
          disabledDate={disabledDate}
          size='middle'
          locale={locale}
          allowClear={false}
          style={{ width: '100%' }}
          picker='date'
          placement='bottomRight'
          renderExtraFooter={() => (
            <p className='text-center text-foreground'>Selecione um intervalo de tempo</p>
          )}
        />
      </section>
    </header>
  );
};

export { Header };
