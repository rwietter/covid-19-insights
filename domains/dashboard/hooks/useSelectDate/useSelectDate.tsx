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
  return { selectedDate, onChangeDate };
};

export { useSelectDate };
