import { useEffect, useState } from 'react';
import { useSelectDate } from '@/domains/dashboard/hooks';
import { type ApolloError, useLazyQuery } from '@apollo/client';
import { clinicalDataQuery } from '@/services/graphql/query';
import { type QueryProps } from '@/domains/dashboard/types/QueryProps';
import { useSelectCityStore } from '@/domains/dashboard/store';

interface UseFetchDatasetReturn {
  data: QueryProps | undefined;
  loading: boolean;
  error: ApolloError | undefined;
}

const useFetchDataset = (): UseFetchDatasetReturn => {
  const [isMounted, setIsMounted] = useState(false);
  const { selectedDate } = useSelectDate();
  const { cityCode } = useSelectCityStore();

  // !TODO: Invalidate cache if city is changed
  const [fetch, { data, loading, error }] = useLazyQuery<QueryProps>(clinicalDataQuery, {
    variables: {
      startDate: selectedDate.startDate,
      endDate: selectedDate.endDate,
    },
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  });

  // fetch data when the component is mounted && when the date is changed
  useEffect(() => {
    if (isMounted && Boolean(selectedDate.startDate) && Boolean(selectedDate.endDate)) {
      void (async function () {
        await fetch({
          variables: {
            cityCode,
          },
        });
      })();
    }
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, [selectedDate.startDate, selectedDate.endDate]);

  return { data, loading, error };
};

export { useFetchDataset };
