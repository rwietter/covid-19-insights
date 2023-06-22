export const calculatePercentages = <T extends number>(patient: T[]): string[] => {
  const total = patient.reduce((acc, value) => acc + value, 0);
  return patient.map((value: number) => ((value / total) * 100).toFixed(2));
};
