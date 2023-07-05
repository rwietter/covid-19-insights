import { memo, type FC, type ReactNode } from 'react';
import { ApolloError } from '@apollo/client';
import { useFetchDataset } from '@/domains/dashboard/hooks';

import { Banner, DashboardSkeleton } from '@/domains/dashboard/components';
import {
  Cards,
  PatientsByAge,
  Symptoms,
  DeadGroupedByMonth,
  ClinicalTests,
  PatientsGroupedByMonth,
  DeadGroupedByCity,
  PatientsAgeGroupedByMonth,
} from '@/domains/dashboard/features';

import type { QueryProps } from '@/domains/dashboard/types';
import { Header, Sidebar } from '@/shared/components';
import { useScreenshot } from '@/shared/hooks';

interface Props {
  clinicalData: QueryProps | undefined;
}

const Dashboard: FC<Props> = ({ clinicalData }): ReactNode => {
  const { loading, data, error } = useFetchDataset();
  const { getImage, screenshotRef } = useScreenshot();

  if (typeof clinicalData === 'undefined' || error instanceof ApolloError) {
    return <h1>Erro ao carregar dados</h1>;
  }

  if (loading) return <DashboardSkeleton />;

  const dataset = typeof data !== 'undefined' ? data : clinicalData;

  return (
    <div className='bg-primary overflow-hidden w-screen min-h-screen text-foreground font-sans'>
      <Header.Root>
        <Header.Icon />
        <div className='flex max-w-lg'>
          <Header.City />
          <Header.DatePicker />
          <Header.Reset />
        </div>
      </Header.Root>
      <Sidebar />
      <main
        ref={screenshotRef}
        className='px-2 md:px-12 m-auto md:ml-16 min-h-[calc(100vh-4rem)] mt-16 bg-background rounded-tl-3xl'
      >
        <Banner.Root>
          <Banner.Action action={getImage} />
        </Banner.Root>

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
          <PatientsGroupedByMonth patientsGroupedByMonth={dataset?.countPatientsGroupedByMonth} />
          <DeadGroupedByCity countDeadGroupedByCity={dataset?.countDeadPatientsGroupedByCity} />
          <PatientsAgeGroupedByMonth
            patientsAgeGroupedByMonth={dataset?.averageInfectedPatientAge.groupedByMonth}
          />
        </section>
      </main>
    </div>
  );
};

export default memo(Dashboard);
