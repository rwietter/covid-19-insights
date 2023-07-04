import { type FC, type ReactElement } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from '@/domains/dashboard/components';
import { calculatePercentages } from '@/domains/dashboard/lib';
import { options } from './options';

const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

interface Props {
  deadGroupedByMonth: Array<{
    month: number;
    count: number;
    year: number;
  }>;
}

const DeadGroupedByMonth: FC<Props> = ({ deadGroupedByMonth }): ReactElement | null => {
  // eslint-disable-next-line no-extra-boolean-cast
  if (!Boolean(deadGroupedByMonth) || deadGroupedByMonth.length === 0) return null;

  const data = {
    labels: deadGroupedByMonth.map((item) => labels[item.month - 1]),
    datasets: [
      {
        fill: true,
        label: 'Óbitos por mês',
        data: deadGroupedByMonth.map((item) => item.count),
        borderColor: 'rgba(235, 111, 146, 0.8)',
        backgroundColor: 'rgba(235, 111, 146, 0.2)',
      },
    ],
  };

  const percentages = calculatePercentages(deadGroupedByMonth.map((item) => item.count));

  return (
    <Chart
      title='Óbitos por mês'
      subtitle='Óbitos que ocorreram por mês'
      description='O gráfico mostra o número de óbitos que ocorreram por mês. Você pode passar o mouse sobre os dados para ver o número de óbitos. Entre eles: Janeiro, Fevereiro, Março, Abril, Maio, Junho, Julho, Agosto, Setembro, Outubro, Novembro e Dezembro.'
    >
      <Line
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
                  return `Mortes em ${context.label}: ${value} (${percentage}%)`;
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
        data={data}
        width='100%'
        fallbackContent='Loading...'
        height='100%'
        className='h-full w-full'
      />
    </Chart>
  );
};

export { DeadGroupedByMonth };
