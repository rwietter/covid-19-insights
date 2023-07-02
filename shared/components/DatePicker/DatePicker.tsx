import React, { type ReactNode } from 'react';
import { useSelectDate } from '@/domains/dashboard/hooks';
import { DatePicker as DatePickerRoot } from 'antd';
import locale from 'antd/lib/date-picker/locale/pt_BR';

const DatePicker = (): ReactNode => {
  const { onChangeDate, disabledDate } = useSelectDate();
  return (
    <section>
      <DatePickerRoot.RangePicker
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
  );
};

export { DatePicker };
