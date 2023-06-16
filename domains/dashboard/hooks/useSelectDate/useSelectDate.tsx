import type { Dayjs } from 'dayjs';
import { useSlectedDateStore } from '@/domains/dashboard/store/useSlectedDateStore';

type EventValue<DateType> = DateType | null;
type RangeValue<DateType> = [EventValue<DateType>, EventValue<DateType>] | null;

const useSelectDate = () => {
  const { setSelectedDate, selectedDate } = useSlectedDateStore();

  const onChangeDate = (date: RangeValue<Dayjs>) => {
    if (date != null) {
      const [startDate, endDate] = date.map((item) => item);

      if ((startDate != null) && (endDate != null)) {
        const startIsoDate = startDate.toISOString();
        const endIsoDate = endDate.toISOString();

        setSelectedDate(startIsoDate, endIsoDate);
      }
    }
  };

  const disabledDate = (current: Dayjs) => {
    const pandemicStartDate = '2020-03-11';
    const beforeLastDatabaseUpdate = '2024-01-01';

    const disableBeforePandemic = current.isBefore(pandemicStartDate);
    const disableAfterToday = current.isAfter(beforeLastDatabaseUpdate);

    if (disableBeforePandemic || disableAfterToday) {
      return true;
    }

    return false;
  };
  return { selectedDate, onChangeDate, disabledDate };
};

export { useSelectDate };
