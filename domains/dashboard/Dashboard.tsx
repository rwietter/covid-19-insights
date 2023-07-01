import { ApolloError } from '@apollo/client';

import { Banner, DashboardSkeleton } from '@/domains/dashboard/components';
import { Cards, Header, PatientsByAge, Sidebar, Symptoms } from '@/domains/dashboard/features';

import type { QueryProps } from '@/domains/dashboard/types';
import { ClinicalTests } from '@/domains/dashboard/features/ClinicalTests';
import { useFetchDataset } from '@/domains/dashboard/hooks/useFetchDataset';
import { type ReactNode } from 'react';

interface ComponentProps {
  clinicalData: QueryProps | undefined;
}

const Dashboard = ({ clinicalData }: ComponentProps): ReactNode => {
  const { loading, data, error } = useFetchDataset();

  if (typeof clinicalData === 'undefined' || error instanceof ApolloError) {
    return <h1>Erro ao carregar dados</h1>;
  }

  if (loading) return <DashboardSkeleton />;

  const dataset = typeof data !== 'undefined' ? data : clinicalData;

  return (
    <div className='bg-primary overflow-hidden w-screen min-h-screen text-foreground font-sans'>
      <Header />
      <Sidebar />
      <main className='px-2 md:px-12 m-auto md:ml-16 min-h-[calc(100vh-4rem)] mt-16 bg-background rounded-tl-3xl'>
        <Banner />
        <Cards
          countPatients={dataset?.countPatients}
          countDeadPatients={dataset?.countDeadPatients.count}
        />

        <section className='w-full h-full grid xl:grid-cols-2 grid-flow-row py-8 gap-x-4 gap-y-24 max-w-full md:px-5 place-items-center pb-24'>
          <Symptoms countPatientsSymptoms={dataset?.countPatientsSymptoms} />
          <PatientsByAge countPatientsByAge={dataset?.countPatientsByAge} />
          <ClinicalTests
            countPatientsByDiagnosisCriteria={dataset?.countPatientsByDiagnosisCriteria}
          />
        </section>
      </main>
    </div>
  );
};

export { Dashboard };
