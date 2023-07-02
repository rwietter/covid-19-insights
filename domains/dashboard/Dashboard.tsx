import { type FC, type ReactNode } from 'react';
import { ApolloError } from '@apollo/client';
import { useFetchDataset } from '@/domains/dashboard/hooks';

import { Banner, DashboardSkeleton } from '@/domains/dashboard/components';
import {
  Cards,
  Header,
  PatientsByAge,
  Sidebar,
  Symptoms,
  DeadGroupedByMonth,
  ClinicalTests,
} from '@/domains/dashboard/features';

import type { QueryProps } from '@/domains/dashboard/types';

interface Props {
  clinicalData: QueryProps | undefined;
}

const Dashboard: FC<Props> = ({ clinicalData }): ReactNode => {
  const { loading, data, error } = useFetchDataset();

  if (typeof clinicalData === 'undefined' || error instanceof ApolloError) {
    return <h1>Erro ao carregar dados</h1>;
  }

  if (loading) return <DashboardSkeleton />;

  const dataset = typeof data !== 'undefined' ? data : clinicalData;

  return (
    <div className='bg-primary overflow-hidden w-screen min-h-screen text-foreground font-sans'>
      <Header.Root>
        <Header.Icon />
        <Header.DatePicker />
      </Header.Root>
      <Sidebar />
      <main className='px-2 md:px-12 m-auto md:ml-16 min-h-[calc(100vh-4rem)] mt-16 bg-background rounded-tl-3xl'>
        <Banner />
        <Cards
          countPatients={dataset?.countPatients}
          countDeadPatients={dataset?.countDeadPatients?.count}
          averageDeadPatientAge={dataset?.averageDeadPatientAge?.avg}
        />

        <section className='w-full h-full grid xl:grid-cols-2 grid-flow-row py-8 gap-x-4 gap-y-24 max-w-full md:px-5 place-items-center pb-24'>
          <Symptoms countPatientsSymptoms={dataset?.countPatientsSymptoms} />
          <PatientsByAge countPatientsByAge={dataset?.countPatientsByAge} />
          <ClinicalTests
            countPatientsByDiagnosisCriteria={dataset?.countPatientsByDiagnosisCriteria}
          />
          <DeadGroupedByMonth deadGroupedByMonth={dataset?.countDeadPatientsGroupedByMonth} />
        </section>
      </main>
    </div>
  );
};

export { Dashboard };
