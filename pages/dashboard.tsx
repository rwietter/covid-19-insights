import type { QueryProps } from '@/domains/dashboard/types';
import { Dashboard } from '@/domains/dashboard';
import { client } from '@/services/graphql/apollo';
import { clinicalDataQuery } from '@/services/graphql/query';
import { type GetStaticPropsResult, type GetStaticProps } from 'next';
import { type ReactNode } from 'react';
import { ApolloError } from '@apollo/client';

interface PageProps {
  data: QueryProps | null;
}

export default function Page(props: PageProps): ReactNode {
  return <Dashboard clinicalData={props.data} />;
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<PageProps>
> => {
  try {
    const { data, error } = await client.query<QueryProps>({
      query: clinicalDataQuery,
      variables: {
        startDate: '2022-01-01T10:00:00Z',
        endDate: '2022-02-05T10:00:00Z',
      },
    });

    if (error instanceof ApolloError) {
      return {
        props: {
          data: null,
        },
      };
    }

    return {
      props: {
        data: {
          countPatientsSymptoms: data.countPatientsSymptoms,
          countPatients: data.countPatients,
          countPatientsByAge: data.countPatientsByAge,
          countPatientsByDiagnosisCriteria: data.countPatientsByDiagnosisCriteria,
          countDeadPatients: data.countDeadPatients,
          countDeadPatientsGroupedByMonth: data.countDeadPatientsGroupedByMonth,
          averageDeadPatientAge: data.averageDeadPatientAge,
          countPatientsGroupedByMonth: data.countPatientsGroupedByMonth,
          countDeadPatientsGroupedByCity: data.countDeadPatientsGroupedByCity,
          averageInfectedPatientAge: data.averageInfectedPatientAge,
        },
      },
      revalidate: 300, // 5 minutes
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
};
