import { type FC } from 'react';
import { Bar } from 'react-chartjs-2';
import type { PatientByAge } from '@/domains/dashboard/types';
import { options } from './options';
import { Chart } from '@/domains/dashboard/components';
import { calculatePercentages } from '@/domains/dashboard/lib';

interface IPatientsByAge {
  readonly countPatientsByAge: PatientByAge[];
}

const orderByAge = ({ countPatientsByAge }: IPatientsByAge): PatientByAge[] => {
  return [...countPatientsByAge].sort((a, b) => {
    const ageA = parseInt(a.age.split(' ')[0]);
    const ageB = parseInt(b.age.split(' ')[0]);

    return ageA - ageB;
  });
};

const PatientsByAge: FC<IPatientsByAge> = ({ countPatientsByAge }) => {
  // eslint-disable-next-line no-extra-boolean-cast
  if (countPatientsByAge.length <= 0) return null;

  const sortedDataChart = orderByAge({ countPatientsByAge });

  const sortedAgeLabels = sortedDataChart.map((item) => item.age);
  const sortedCountValues = sortedDataChart.map((item) => item.count);

  const percentages = calculatePercentages(sortedCountValues);

  const patientsByAge = {
    labels: sortedAgeLabels,
    datasets: [
      {
        label: 'Idades',
        data: sortedCountValues,
        backgroundColor: ['rgba(255, 159, 64, 0.6)'],
        hoverOffset: 6,
      },
    ],
  };

  return (
    <Chart
      title='Idades dos pacientes'
      subtitle='Idades mais comuns entre pacientes diagnosticados com COVID-19'
    >
      <Bar
        options={{
          ...options,
          plugins: {
            legend: {
              fullSize: true,
              position: 'top' as const,
              labels: {
                padding: 15,
                color: '#222222',
                font: {
                  size: 15,
                  weight: '600',
                  family: 'Quicksand, sans-serif',
                },
              },
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  const dataset = context.dataset;
                  const index = context.dataIndex;
                  const value = dataset.data[index] as number;
                  const percentage = percentages[index];
                  return `Idades entre ${context.label} anos: ${value} (${percentage}%)`;
                },
              },
              titleFont: {
                family: 'Quicksand, sans-serif',
                size: 14,
              },
              bodyFont: {
                family: 'Quicksand, sans-serif',
                size: 14,
                weight: '500',
              },
            },
          },
        }}
        width='100%'
        fallbackContent='Loading...'
        height='100%'
        className='h-full w-full'
        data={patientsByAge}
      />
    </Chart>
  );
};

export { PatientsByAge };
