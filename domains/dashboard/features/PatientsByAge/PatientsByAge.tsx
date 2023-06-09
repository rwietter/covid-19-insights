import { type FC } from 'react';
import { Bar } from 'react-chartjs-2';
import type { PatientByAge } from '@/domains/dashboard/types';
import { options } from './options';

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
        backgroundColor: ['#1DA584'],
        hoverOffset: 6
      }
    ]
  };

  return (
    <div className="w-full bg-secondary max-h-[500px] p-4 pb-20 shadow-lg rounded-lg">
      <h1 className='text-foreground font-sans font-semibold text-lg text-center'>Idades dos pacientes</h1>
      <p className='text-slate-700 font-sans font-light text-sm text-center'>Idades mais comuns entre pacientes diagnosticados com COVID-19</p>
      <Bar
        options={options}
        width="100%"
        fallbackContent='Loading...'
        height="100%"
        className='h-full w-full'
        data={patientsByAge}
      />
    </div>
  );
};

export { PatientsByAge };
