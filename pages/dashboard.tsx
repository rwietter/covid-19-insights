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
  try {
    const { data } = await client.query({
      query: clinicalDataQuery,
      variables: {
        startDate: '2022-01-01T10:00:00Z',
        endDate: '2022-03-30T10:00:00Z'
      }
    });

    // const data: QueryProps = {
    //   countPatientsSymptoms: {
    //     '__typename': 'countPatientsSymptoms',
    //     febre: 274229,
    //     garganta: 387960,
    //     tosse: 373760,
    //     dispneia: 42657,
    //     outros: 222679
    //   },
    //   countPatients: 5353,
    //   countPatientsByAge: [
    //     {
    //       age: '0-10',
    //       count: 2303,
    //     },
    //     {
    //       age: '11-20',
    //       count: 896,
    //     },
    //     {
    //       age: '21-30',
    //       count: 500,
    //     },
    //     {
    //       age: '31-40',
    //       count: 5004,
    //     },
    //     {
    //       age: '41-50',
    //       count: 1635,
    //     }
    //   ]
    // }

    return {
      props: {
        countPatientsSymptoms: data.countPatientsSymptoms,
        countPatients: data.countPatients,
        countPatientsByAge: data.countPatientsByAge,
        countPatientsByDiagnosisCriteria: data.countPatientsByDiagnosisCriteria
      },
      revalidate: 3600 // 1 hour
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};
