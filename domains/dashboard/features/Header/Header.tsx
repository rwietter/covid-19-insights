import { DatePicker } from 'antd';
import Image from 'next/image';
import { useSelectDate } from '@/domains/dashboard/hooks/useSelectDate';

const Header = () => {
  const { onChangeDate } = useSelectDate();
  return (
    <header className='bg-secondary text-foreground w-full h-12 flex items-center justify-between px-5 md:px-8 py-1'>
      <section className='flex items-center gap-3'>
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
