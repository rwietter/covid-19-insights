import { type FC, type ReactElement } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart } from '@/domains/dashboard/components';
import { options } from './options';

const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

interface Props {
  patientsAgeGroupedByMonth: Array<{
    month: number;
    avg: number;
    year: number;
  }>;
}

const PatientsAgeGroupedByMonth: FC<Props> = ({
  patientsAgeGroupedByMonth,
}): ReactElement | null => {
  // eslint-disable-next-line no-extra-boolean-cast
  if (!Boolean(patientsAgeGroupedByMonth) || patientsAgeGroupedByMonth.length === 0) return null;

  const data = {
    labels: patientsAgeGroupedByMonth.map((item) => `${labels[item.month - 1]}/${item.year}`),
    datasets: [
      {
        fill: true,
        label: 'Idade média dos infectados',
        data: patientsAgeGroupedByMonth.map((item) => item.avg),
        borderColor: 'rgba(235, 111, 146, 0.8)',
        backgroundColor: 'rgba(235, 111, 146, 0.2)',
      },
    ],
  };

  return (
    <Chart
      title='Idade média dos pacientes infectados por mês'
      subtitle='Idade média dos pacientes que forma infectados por mês'
      description='O gráfico mostra a média das idades dos pacientes que foram infectados por mês. Você pode passar o mouse sobre os dados para ver o número de médio da idade.'
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
                  return `Média de idade em ${context.label}: ${value}`;
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

export { PatientsAgeGroupedByMonth };
