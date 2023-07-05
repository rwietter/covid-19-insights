import { create } from 'zustand';

interface City {
  city: string | undefined;
  cityCode: string;
}

interface SelectedCityStore {
  city: string | undefined;
  cityCode: string;
  setSelectedCity: ({ city, cityCode }: City) => void;
  getSelectedCity: () => City;
}

const useSelectCityStore = create<SelectedCityStore>((set, get) => ({
  city: undefined,
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
