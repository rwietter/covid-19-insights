import { cities } from '@/services/graphql/query';
import { useQuery } from '@apollo/client';
import { Select } from 'antd';
import { useState, type ComponentProps, type FC } from 'react';
import { useSelectCityStore } from '@/domains/dashboard/store';

interface Props extends ComponentProps<typeof Select> {}

interface City {
  name: string;
  code: string;
}

interface Data {
  cities: City[];
}

const SelectCity: FC<Props> = (props) => {
  const { data, error } = useQuery<Data>(cities);
  const { setSelectedCity, city } = useSelectCityStore();

  const handleSelectCity = (value: unknown, label: string): void => {
    // eslint-disable-next-line no-extra-boolean-cast
    if (Boolean(value)) {
      setSelectedCity({ city: label, cityCode: String(value) });
    }
  };

  if (error != null || data == null) {
    return;
  }

  const refined = data.cities.map((city) => ({
    label: city.name,
    value: city.code,
  }));

  return (
    <Select
      showSearch
      className='mr-3'
      style={{ width: 200 }}
      optionFilterProp='children'
      value={city}
      placeholder='Pesquise uma cidade'
      onSelect={(value: string | unknown, { label }) => {
        handleSelectCity(value, label);
      }}
      filterOption={(input, option) => (option?.label ?? '').includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
      }
      options={refined}
      {...props}
    />
  );
};

export { SelectCity };
