import gql from 'graphql-tag';

export const mortes = gql`
  type Mortes {
    _id: String
    pacientes: [Paciente]
  }

  type Query {
    mortes: Mortes
  }
`;
