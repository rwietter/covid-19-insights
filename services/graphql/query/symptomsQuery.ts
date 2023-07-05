import { gql } from '@apollo/client';

export const symptomsQuery = gql`
  query Symptoms($startDate: DateTime, $endDate: DateTime) {
    countPatientsSymptoms(
      filters: { startDate: $startDate, endDate: $endDate, cityCode: $cityCode }
    ) {
      febre
      garganta
      tosse
      dispneia
      outros
    }
  }
`;
