import { DatePicker } from 'antd';
import Image from 'next/image';
import { useSelectDate } from '@/domains/dashboard/hooks/useSelectDate';

const Header = () => {
  const { onChangeDate } = useSelectDate();
  return (
    <header className='bg-secondary bg-opacity-80 fixed border-b border-slate-300 backdrop-blur-sm text-foreground z-50 w-full h-12 flex items-center justify-center sm:justify-between px-5 md:px-8 py-1'>
      <section className='items-center gap-3 hidden sm:flex'>
        <Image src="/virus.svg" alt="Logo" width={30} height={30} />
        <h1 className='text-slate-800 font-sans font-semibold'>Covid Insights</h1>
      </section>
      <section>
        <DatePicker.RangePicker
          onChange={(date) => { onChangeDate(date); }}
          format="DD/MM/YYYY"
          size="middle"
        />
      </section>
    </header>
  );
};

export { Header };
