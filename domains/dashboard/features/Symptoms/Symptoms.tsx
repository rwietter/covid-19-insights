import { type FC } from 'react';
import { Pie } from 'react-chartjs-2';
import { type PatientsSymptoms } from '@/domains/dashboard/types';
import { options } from './options';
import { Chart } from '@/domains/dashboard/components';

interface ComponentProps {
  countPatientsSymptoms: PatientsSymptoms
}

const Symptoms: FC<ComponentProps> = ({ countPatientsSymptoms }) => {
  const [, ...labels] = Object.keys(countPatientsSymptoms);
  const [, ...values] = Object.values(countPatientsSymptoms);

  const dataset = {
    labels: labels.map((label: string) => label[0].toUpperCase() + label.slice(1)),
    datasets: [
      {
        label: 'Sintomas',
        data: values,
        backgroundColor: [
          'rgba(235, 188, 186, 0.6)',
          'rgba(235, 111, 146, 0.6)',
          'rgba(246, 193, 119, 0.6)',
          'rgba(156, 207, 216, 0.6)',
          'rgba(49, 116, 143, 0.6)',
          'rgba(196, 167, 231, 0.6)'
        ],
        hoverOffset: 6
      }
    ]
  };

  return (
    <Chart title='Sintomas de Covid-19' subtitle='Sintomas mais comuns entre os pacientes'>
      <Pie
        options={options}
        width="100%"
        fallbackContent='Loading...'
        height="100%"
        className='h-full w-full p-2'
        data={dataset}
      />
    </Chart>
  );
};

export { Symptoms };
