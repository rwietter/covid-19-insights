import { type FC } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { options, colors } from './options';
import { Chart } from '@/domains/dashboard/components';
import { type PatientsByDiagnosisCriteria } from '@/domains/dashboard/types';
import { calculatePercentages } from '@/domains/dashboard/lib';

interface ComponentProps {
  countPatientsByDiagnosisCriteria: PatientsByDiagnosisCriteria[];
}

type DataItem = PatientsByDiagnosisCriteria;

const mergeDuplicatedObjects = (criterias: DataItem[]): DataItem[] => {
  const mergedData = criterias.reduce((acc: Record<string, DataItem>, item) => {
    const criteria = item.criteria.toLowerCase();
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (acc[criteria]) {
      acc[criteria].count += item.count;
    } else {
      acc[criteria] = { criteria: item.criteria, count: item.count };
    }
    return acc;
  }, {});

  return Object.values(mergedData);
};

const ClinicalTests: FC<ComponentProps> = ({ countPatientsByDiagnosisCriteria }) => {
  if (countPatientsByDiagnosisCriteria.length <= 0) return null;

  const patientsByDiagnosisCriteria = countPatientsByDiagnosisCriteria.map((item) => ({
    criteria: item.criteria,
    count: item.count,
  }));

  const data = mergeDuplicatedObjects(patientsByDiagnosisCriteria);

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
      description='Os gráfico mostra os tipos de testes mais utilizados para diagnóstico de Covid-19. Você pode passar o mouse sobre os dados para ver o número de testes realizados. Entre eles: Teste Clínico, Teste Epidemiolígico, Teste Cliníco-Imagem, Teste Rápido e RT-PCR.'
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
