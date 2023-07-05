import { create } from 'zustand';

interface City {
  city: string;
  cityCode: string;
}

interface SelectedCityStore {
  city: string;
  cityCode: string;
  setSelectedCity: ({ city, cityCode }: City) => void;
  getSelectedCity: () => { city: string; cityCode: string };
}

const useSelectCityStore = create<SelectedCityStore>((set, get) => ({
  city: '',
  cityCode: '',
  setSelectedCity: ({ city, cityCode }) => {
    set({ city, cityCode });
  },
  getSelectedCity: () => {
    const { city, cityCode } = get();
    return { city, cityCode };
  },
}));

export { useSelectCityStore };
