import { gql } from '@apollo/client';

export const clinicalDataQuery = gql`
  query Symptoms($startDate: DateTime, $endDate: DateTime) {
    countPatients(filters: {startDate: $startDate, endDate: $endDate})

    countPatientsSymptoms(filters: {startDate: $startDate, endDate: $endDate}) {
      febre
      garganta
      tosse
      dispneia
      outros
    }

    countPatientsByAge(filters: { startDate: $startDate, endDate: $endDate}) {
      age
      count
    }

    countPatientsByRecoveryStatus(filters: {startDate: $startDate, endDate: $endDate}) {
      status
      count
    }

    countPatientsByDiagnosisCriteria(filters: {startDate: $startDate, endDate: $endDate}) {
      criteria
      count
    }
  }
`;
