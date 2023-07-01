import React from 'react';
import { Cards } from './Cards';

describe('<Cards />', () => {
  it('Cards should render countPatients 258', () => {
    cy.mount(<Cards countPatients={258} countDeadPatients={264} />);

    cy.get('div:nth-child(3) > h2').should('have.text', '258');
  });
});
