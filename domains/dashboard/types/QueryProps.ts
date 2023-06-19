import type { PatientByAge } from './PatientByAge';
import { type PatientsByDiagnosisCriteria } from './PatientsByDiagnosisCriteria';
import type { PatientsSymptoms } from './PatientsSymptoms';

export interface QueryProps {
  countPatientsSymptoms: PatientsSymptoms
  countPatients: number
  countPatientsByAge: PatientByAge[]
  countPatientsByDiagnosisCriteria: PatientsByDiagnosisCriteria[]
}
