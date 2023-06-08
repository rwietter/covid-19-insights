import type { QueryProps } from '@/domains/dashboard/types';
import { Dashboard } from '@/domains/dashboard';
import { client } from '@/services/graphql/apollo';
import { clinicalDataQuery } from '@/services/graphql/query';
import { type GetServerSideProps } from 'next';

type PageProps = QueryProps;

export default function Page(props: PageProps) {
  return <Dashboard clinicalData={props} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: clinicalDataQuery,
    variables: {
      startDate: '2022-10-03T10:15:30Z',
      endDate: '2022-12-03T10:15:30Z'
    }
  });

  return {
    props: {
      countPatientsSymptoms: data.countPatientsSymptoms,
      countPatients: data.countPatients,
      countPatientsByAge: data.countPatientsByAge
    }
  };
};
