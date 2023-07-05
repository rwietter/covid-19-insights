import { type FC } from 'react';
import { Bar } from 'react-chartjs-2';
import type { QueryProps } from '@/domains/dashboard/types';
import { options } from './options';
import { Chart } from '@/domains/dashboard/components';
import { calculatePercentages } from '@/domains/dashboard/lib';

interface IDeadGroupedByCity {
  readonly countDeadGroupedByCity: QueryProps['countDeadPatientsGroupedByCity'];
}

const DeadGroupedByCity: FC<IDeadGroupedByCity> = ({ countDeadGroupedByCity }) => {
  // eslint-disable-next-line no-extra-boolean-cast
  if (countDeadGroupedByCity.length <= 0) return null;

  const sortedDataChart = [...countDeadGroupedByCity].sort((a, b) => b.count - a.count);
  const slicedDataChart = sortedDataChart.slice(0, 30).reverse();

  const labels = slicedDataChart.map((item) => item.name);
  const values = slicedDataChart.map((item) => item.count);

  const percentages = calculatePercentages(values);

  const DeadGroupedByCity = {
    labels,
    datasets: [
      {
        label: 'Cidades com mais mortes',
        data: values,
        backgroundColor: ['rgba(255, 159, 64, 0.6)'],
        hoverOffset: 6,
      },
    ],
  };

  return (
    <Chart
      title='Cidades com mais mortes'
      subtitle='Cidades com mais mortes decorrentes do COVID-19'
      description='O gráfico mostra o número de óbitos que ocorreram por cidade no período filtrado. Você pode passar o mouse sobre os dados para ver o número de óbitos.'
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
                  return `número de mortes em ${context.label}: ${value} (${percentage}%)`;
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
        data={DeadGroupedByCity}
      />
    </Chart>
  );
};

export { DeadGroupedByCity };
