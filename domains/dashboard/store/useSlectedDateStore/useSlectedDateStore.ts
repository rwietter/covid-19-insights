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
    startDate: '',
    endDate: '',
  },
  setSelectedDate: (startDate: string, endDate: string) => {
    set({ selectedDate: { startDate, endDate } });
  },
  getSelectedDate: () => get().selectedDate,
}));

export { useSlectedDateStore };
