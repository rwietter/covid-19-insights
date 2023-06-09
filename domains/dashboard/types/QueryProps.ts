import type { PatientByAge } from './PatientByAge';
import type { PatientsSymptoms } from './PatientsSymptoms';

export interface QueryProps {
  countPatientsSymptoms: PatientsSymptoms
  countPatients: number
  countPatientsByAge: PatientByAge[]
}
