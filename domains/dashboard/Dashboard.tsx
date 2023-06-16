import { useEffect, useState } from 'react';

import { useSelectDate } from './hooks/useSelectDate';
import { ApolloError, useLazyQuery } from '@apollo/client';

import { Banner, DashboardSkeleton } from '@/domains/dashboard/components';
import { Cards, Header, PatientsByAge, Symptoms } from '@/domains/dashboard/features';

import { clinicalDataQuery } from '@/services/graphql/query';
import { Inter } from 'next/font/google';

import type { QueryProps } from '@/domains/dashboard/types';

const inter = Inter({ subsets: ['latin'] });

interface ComponentProps {
  clinicalData: QueryProps
}

const Dashboard = ({ clinicalData }: ComponentProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { selectedDate } = useSelectDate();

  const [fetch, { data, loading, error }] = useLazyQuery(clinicalDataQuery, {
    variables: {
      startDate: selectedDate?.startDate,
      endDate: selectedDate?.endDate
    }
  });

  // fetch data when the component is mounted && when the date is changed
  useEffect(() => {
    if (isMounted) {
      (async () => {
        await fetch();
      })();
    }
    setIsMounted(true);
    return () => { setIsMounted(false); };
  }, [selectedDate]);

  if (loading) return <DashboardSkeleton />;

  // !TODO: handle error
  if (error instanceof ApolloError) {
    console.error(error.message);
    return <div>Error</div>;
  }

  const dataset = Boolean(data) ? data : clinicalData;

  return (
    <div
      className={`bg-background overflow-hidden w-screen min-h-screen text-foreground font-sans ${inter.className}`}
    >
      <Header />
      <main className='px-2 md:px-12 m-auto pt-16'>
        <Banner />
        <Cards countPatients={dataset?.countPatients} />

        <section
          className='w-full h-full grid xl:grid-cols-2 grid-flow-row py-8 gap-4 lg:gap-7 max-w-full px-5 place-items-center'
        >
          <Symptoms countPatientsSymptoms={dataset?.countPatientsSymptoms} />
          <PatientsByAge countPatientsByAge={dataset?.countPatientsByAge} />
        </section>
      </main>
    </div>
  );
};

export { Dashboard };
