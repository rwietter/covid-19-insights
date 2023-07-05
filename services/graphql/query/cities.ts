import { gql } from '@apollo/client';

export const cities = gql`
  query cities {
    cities {
      name
      code
    }
  }
`;
