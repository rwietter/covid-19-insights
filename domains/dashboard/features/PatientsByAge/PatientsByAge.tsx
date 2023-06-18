import { type FC } from 'react';
import { Bar } from 'react-chartjs-2';
import type { PatientByAge } from '@/domains/dashboard/types';
import { options } from './options';
import { Chart } from '@/domains/dashboard/components';

interface IPatientsByAge {
  readonly countPatientsByAge: PatientByAge[]
}

const orderByAge = ({ countPatientsByAge }: IPatientsByAge) => {
  return [...countPatientsByAge].sort((a, b) => {
    const ageA = parseInt(a.age.split(' ')[0]);
    const ageB = parseInt(b.age.split(' ')[0]);

    return ageA - ageB;
  });
};

const PatientsByAge: FC<IPatientsByAge> = ({ countPatientsByAge }) => {
  if (!Boolean(countPatientsByAge)) return null;

  const sortedDataChart = orderByAge({ countPatientsByAge });

  const sortedAgeLabels = sortedDataChart.map(item => item.age);
  const sortedCountValues = sortedDataChart.map(item => item.count);

  const patientsByAge = {
    labels: sortedAgeLabels,
    datasets: [
      {
        label: 'Idades',
        data: sortedCountValues,
        backgroundColor: [
          'rgba(255, 159, 64, 0.6)'
        ],
        hoverOffset: 6
      }
    ]
  };

  return (
    <Chart
      title='Idades dos pacientes'
      subtitle='Idades mais comuns entre pacientes diagnosticados com COVID-19'
    >
      <Bar
        options={options}
        width="100%"
        fallbackContent='Loading...'
        height="100%"
        className='h-full w-full'
        data={patientsByAge}
      />
    </Chart>
  );
};

export { PatientsByAge };
