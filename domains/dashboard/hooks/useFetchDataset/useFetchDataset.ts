import { useEffect, useState } from 'react';
import { useSelectDate } from '../useSelectDate';
import { type ApolloError, useLazyQuery } from '@apollo/client';
import { clinicalDataQuery } from '@/services/graphql/query';
import { type QueryProps } from '@/domains/dashboard/types/QueryProps';

interface UseFetchDatasetReturn {
  data: QueryProps | undefined;
  loading: boolean;
  error: ApolloError | undefined;
}

const useFetchDataset = (): UseFetchDatasetReturn => {
  const [isMounted, setIsMounted] = useState(false);
  const { selectedDate } = useSelectDate();

  const [fetch, { data, loading, error }] = useLazyQuery<QueryProps>(clinicalDataQuery, {
    variables: {
      startDate: selectedDate?.startDate,
      endDate: selectedDate?.endDate,
    },
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  });

  // fetch data when the component is mounted && when the date is changed
  useEffect(() => {
    if (isMounted) {
      void (async function () {
        await fetch();
      })();
    }
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, [selectedDate]);

  return { data, loading, error };
};

export { useFetchDataset };
