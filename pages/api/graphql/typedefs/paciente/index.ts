import gql from 'graphql-tag';

export const paciente = gql`
  type Paciente {
    _id: String!
    name: String!
    idade: Int!
    sexo: String!
    infeccao: String
  }

  type Query {
    pacientes: [Paciente]!
    paciente(id: String!): Paciente
  }
`;
