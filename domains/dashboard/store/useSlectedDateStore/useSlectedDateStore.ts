import { create } from 'zustand';

interface SelectedDateStore {
  selectedDate: {
    startDate: string;
    endDate: string;
  };
  setSelectedDate: (startDate: string, endDate: string) => void;
  getSelectedDate: () => { startDate: string; endDate: string };
}

const useSlectedDateStore = create<SelectedDateStore>((set, get) => ({
  selectedDate: {
    startDate: '2022-01-01T10:00:00Z',
    endDate: '2022-03-30T10:00:00Z',
  },
  setSelectedDate: (startDate: string, endDate: string) => {
    set({ selectedDate: { startDate, endDate } });
  },
  getSelectedDate: () => get().selectedDate,
}));

export { useSlectedDateStore };
