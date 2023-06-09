import { type FC } from 'react';
import { Pie } from 'react-chartjs-2';
import { type PatientsSymptoms } from '@/domains/dashboard/types';
import { options } from './options';
import { Chart } from '@/domains/dashboard/components';
import { calculatePercentages } from '../../lib';

interface ComponentProps {
  countPatientsSymptoms: PatientsSymptoms;
}

const Symptoms: FC<ComponentProps> = ({ countPatientsSymptoms }) => {
  const [, ...labels] = Object.keys(countPatientsSymptoms);
  const [, ...values] = Object.values(countPatientsSymptoms);

  if (values.every((count) => count <= 0)) return null;

  const percentages = calculatePercentages(values);

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
          'rgba(196, 167, 231, 0.6)',
        ],
        hoverOffset: 6,
      },
    ],
  };

  return (
    <Chart
      title='Sintomas de Covid-19'
      subtitle='Sintomas mais comuns entre os pacientes'
      description='Os gráfico mostra os sintomas mais comuns entre os pacientes. Você pode passar o mouse sobre os dados para ver o número de pacientes que apresentaram cada sintoma. Entre eles: Febre, Tosse, Dor de Garganta, Dispneia e outros sintomas.'
    >
      <Pie
        options={{
          ...options,
          plugins: {
            legend: {
              fullSize: true,
              position: 'top' as const,
              labels: {
                color: '#222222',
                padding: 15,
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
                  const value = dataset.data[index];
                  const percentage = percentages[index];
                  return context.label === 'Outros'
                    ? `${context.label}: ${value} (${percentage}%)`
                    : `Sintomas de ${context.label}: ${value} (${percentage}%)`;
                },
              },
              titleFont: {
                family: 'Quicksand, sans-serif',
                size: 14,
              },
              bodyFont: {
                family: 'Quicksand, sans-serif',
                size: 14,
                weight: '600',
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

export { Symptoms };
