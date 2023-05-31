import { gql } from '@apollo/client';

export const syntomsQuery = gql`
  query Symptoms($startDate: DateTime, $endDate: DateTime) {
      countPatientsSymptoms(filters: { startDate: $startDate, endDate: $endDate }) {
        febre
        garganta
        tosse
        dispneia
        outros
      }
    }
`;
