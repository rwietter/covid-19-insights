import { gql } from '@apollo/client';

export const clinicalDataQuery = gql`
  query Symptoms($startDate: DateTime, $endDate: DateTime, $cityCode: String) {
    countPatients(filters: { startDate: $startDate, endDate: $endDate, cityCode: $cityCode })

    countPatientsSymptoms(
      filters: { startDate: $startDate, endDate: $endDate, cityCode: $cityCode }
    ) {
      febre
      garganta
      tosse
      dispneia
      outros
    }

    countPatientsByAge(filters: { startDate: $startDate, endDate: $endDate, cityCode: $cityCode }) {
      age
      count
    }

    countPatientsByRecoveryStatus(
      filters: { startDate: $startDate, endDate: $endDate, cityCode: $cityCode }
    ) {
      status
      count
    }

    countPatientsByDiagnosisCriteria(
      filters: { startDate: $startDate, endDate: $endDate, cityCode: $cityCode }
    ) {
      criteria
      count
    }

    countDeadPatients(filters: { startDate: $startDate, endDate: $endDate, cityCode: $cityCode }) {
      count
    }

    countDeadPatientsGroupedByMonth(
      filters: { startDate: $startDate, endDate: $endDate, cityCode: $cityCode }
    ) {
      month
      year
      count
    }
    averageDeadPatientAge(
      filters: { startDate: $startDate, endDate: $endDate, cityCode: $cityCode }
    ) {
      avg
    }

    averageInfectedPatientAge(filters: { startDate: $startDate, endDate: $endDate }) {
      groupedByMonth {
        month
        year
        avg
      }
    }

    countDeadPatientsGroupedByCity(filters: { startDate: $startDate, endDate: $endDate }) {
      count
      name
    }

    countPatientsGroupedByMonth(
      filters: { startDate: $startDate, endDate: $endDate, cityCode: $cityCode }
    ) {
      count
      month
      year
    }
  }
`;
