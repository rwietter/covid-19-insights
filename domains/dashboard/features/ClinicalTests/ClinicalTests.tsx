import { type FC } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { options, colors } from './options';
import { Chart } from '@/domains/dashboard/components';
import { type PatientsByDiagnosisCriteria } from '@/domains/dashboard/types';
import { calculatePercentages } from '@/domains/dashboard/lib';

interface ComponentProps {
  countPatientsByDiagnosisCriteria: PatientsByDiagnosisCriteria[];
}

const ClinicalTests: FC<ComponentProps> = ({ countPatientsByDiagnosisCriteria }) => {
  if (countPatientsByDiagnosisCriteria.length <= 0) return null;

  const data = countPatientsByDiagnosisCriteria.map((item) => ({
    criteria: item.criteria,
    count: item.count,
  }));

  const percentages = calculatePercentages(data.map(({ count }) => count));

  const dataset = {
    labels: data.map(({ criteria }) => criteria[0].toUpperCase() + criteria.slice(1).toLowerCase()),
    datasets: [
      {
        label: 'Tipos de Testes',
        data: data.map(({ count }) => count),
        backgroundColor: colors,
        hoverOffset: 6,
        borderWidth: 2,
      },
    ],
  };

  return (
    <Chart
      title='Diagnósticos por testes'
      subtitle='Testes mais utilizados para diagnóstico de Covid-19'
    >
      <Doughnut
        options={{
          ...options,
          plugins: {
            legend: {
              fullSize: true,
              position: 'top' as const,
              labels: {
                padding: 15,
                font: {
                  family: 'Quicksand, sans-serif',
                  size: 14,
                  weight: 'bold',
                },
                color: '#222222',
              },
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  const dataset = context.dataset;
                  const index = context.dataIndex;
                  const value = dataset.data[index];
                  const percentage = percentages[index];
                  return `Número de Testes: ${value} (${percentage}%)`;
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
        className='h-full w-full p-2'
        data={dataset}
      />
    </Chart>
  );
};

export { ClinicalTests };
