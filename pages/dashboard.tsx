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
  const notFound = {
    redirect: {
      destination: '/404',
      permanent: false
    },
    revalidate: 400 // 6 minutes
  };

  try {
    const { data, error } = await client.query({
      query: clinicalDataQuery,
      variables: {
        startDate: '2022-01-01T10:00:00Z',
        endDate: '2022-03-30T10:00:00Z'
      }
    });

    if (error != null) return { ...notFound };

    return {
      props: {
        countPatientsSymptoms: data.countPatientsSymptoms,
        countPatients: data.countPatients,
        countPatientsByAge: data.countPatientsByAge
      },
      revalidate: 3600 // 1 hour
    };
  } catch (error) {
    return { ...notFound };
  }
};
