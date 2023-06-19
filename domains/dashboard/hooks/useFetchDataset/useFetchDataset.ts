import { useEffect, useState } from 'react';
import { useSelectDate } from '../useSelectDate';
import { useLazyQuery } from '@apollo/client';
import { clinicalDataQuery } from '@/services/graphql/query';

const useFetchDataset = () => {
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
      void (async function () {
        await fetch();
      }());
    }
    setIsMounted(true);
    return () => { setIsMounted(false); };
  }, [selectedDate]);

  return { data, loading, error };
};

export { useFetchDataset };
