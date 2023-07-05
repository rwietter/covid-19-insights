import { useSelectCityStore } from '@/domains/dashboard/store';
import React from 'react';
import { BsTrash2 } from 'react-icons/bs';

const ResetSearch: React.FC = () => {
  const { setSelectedCity } = useSelectCityStore();

  const handleClear = (): void => {
    setSelectedCity({ city: undefined, cityCode: '' });
  };

  return (
    <button type='button' onClick={handleClear}>
      <BsTrash2 size={20} className='fill-slate-500 ml-3' />
    </button>
  );
};

export { ResetSearch };
