import type { QueryProps } from '@/domains/dashboard/types';
import { Dashboard } from '@/domains/dashboard';
import { client } from '@/services/graphql/apollo';
import { clinicalDataQuery } from '@/services/graphql/query';
import { type GetStaticPropsResult, type GetStaticProps } from 'next';

type PageProps = QueryProps;

export default function Page(props: PageProps) {
  return <Dashboard clinicalData={props} />;
}

export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsResult<QueryProps>> => {
  const { data, error } = await client.query({
    query: clinicalDataQuery,
    variables: {
      startDate: '2022-10-03T10:15:30Z',
      endDate: '2022-12-03T10:15:30Z'
    }
  });

  console.log('data', data);
  console.log('error', error);

  if (error != null) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      countPatientsSymptoms: data.countPatientsSymptoms,
      countPatients: data.countPatients,
      countPatientsByAge: data.countPatientsByAge
    }
  };
};
