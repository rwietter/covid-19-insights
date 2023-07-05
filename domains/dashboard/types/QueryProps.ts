import type { PatientByAge } from './PatientByAge';
import { type PatientsByDiagnosisCriteria } from './PatientsByDiagnosisCriteria';
import type { PatientsSymptoms } from './PatientsSymptoms';

export interface QueryProps {
  countPatientsSymptoms: PatientsSymptoms;
  countPatients: number;
  countPatientsByAge: PatientByAge[];
  countPatientsByDiagnosisCriteria: PatientsByDiagnosisCriteria[];
  countDeadPatients: {
    count: number;
  };
  countDeadPatientsGroupedByMonth: Array<{
    month: number;
    count: number;
    year: number;
  }>;
  averageDeadPatientAge: {
    avg: number;
  };
  countPatientsGroupedByMonth: Array<{
    month: number;
    count: number;
    year: number;
  }>;
  countDeadPatientsGroupedByCity: Array<{
    count: number;
    name: string;
  }>;
  averageInfectedPatientAge: {
    groupedByMonth: Array<{
      avg: number;
      month: number;
      year: number;
    }>;
  };
}
