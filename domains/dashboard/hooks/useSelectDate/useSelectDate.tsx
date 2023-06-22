import type { Dayjs } from 'dayjs';
import { useSlectedDateStore } from '@/domains/dashboard/store/useSlectedDateStore';
import { PANDEMIC_START_DATE, LAST_DATABASE_UPDATE } from '@/domains/dashboard/constants';

type EventValue<DateType> = DateType | null;
type RangeValue<DateType> = [EventValue<DateType>, EventValue<DateType>] | null;

interface UseSelectDateReturnType {
  selectedDate: {
    startDate: string;
    endDate: string;
  };
  onChangeDate: (date: RangeValue<Dayjs>) => void;
  disabledDate: (current: Dayjs) => boolean;
}

const useSelectDate = (): UseSelectDateReturnType => {
  const { setSelectedDate, selectedDate } = useSlectedDateStore();

  const onChangeDate = (date: RangeValue<Dayjs>): void => {
    if (date != null) {
      const [startDate, endDate] = date.map((item) => item);

      if (startDate != null && endDate != null) {
        const startIsoDate = startDate.toISOString();
        const endIsoDate = endDate.toISOString();

        setSelectedDate(startIsoDate, endIsoDate);
      }
    }
  };

  const disabledDate = (current: Dayjs): boolean => {
    const disableBeforePandemic = current.isBefore(PANDEMIC_START_DATE);
    const disableAfterToday = current.isAfter(LAST_DATABASE_UPDATE);

    if (disableBeforePandemic || disableAfterToday) {
      return true;
    }

    return false;
  };
  return { selectedDate, onChangeDate, disabledDate };
};

export { useSelectDate };
