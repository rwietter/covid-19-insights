import { type FC } from 'react';
import { Pie } from 'react-chartjs-2';
import { type PatientsSymptoms } from '@/domains/dashboard/types';
import { options } from './options';

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
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)'
        ],
        hoverOffset: 6
      }
    ]
  };

  return (
    <div className="bg-secondary max-h-[500px] p-4 pb-20 shadow-lg rounded-lg w-full">
      <h1 className='text-slate-800 font-sans font-semibold text-lg text-center'>Sintomas de Covid-19</h1>
      <p className='text-slate-700 font-sans font-light text-sm text-center'>Sintomas mais comuns entre os pacientes</p>
      <Pie
        options={options}
        width="100%"
        fallbackContent='Loading...'
        height="100%"
        data={dataset}
      />
    </div>
  );
};

export { Symptoms };
