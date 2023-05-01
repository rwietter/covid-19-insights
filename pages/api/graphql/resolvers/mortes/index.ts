const pacientes = [
  {
    _id: 1,
    name: 'Maria',
    idade: 80,
    sexo: 'F',
    infeccao: 1,
    morteConfirmada: 1
  },
  {
    _id: 2,
    name: 'João',
    idade: 70,
    sexo: 'M',
    infeccao: 1,
    morteConfirmada: 0
  }
];

export const mortes = {
  Query: {
    mortes: async () => {
      return { _id: '1', pacientes };
    }
  }
};
