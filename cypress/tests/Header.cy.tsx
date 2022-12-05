import Header from '../../components/Header';
import { mount } from 'cypress/react18';
describe('Header.spec.ts', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Header />);
  });
  it('renders ChordBox correctly', () => {
    mount(<Header />);
    cy.get('[data-cy=header-name]').should('have.text', 'ChordBox');
  });
  it('renders FaGithub and FaTwitter icons correctly', () => {
    cy.get('[data-cy="fa-github"]').should('be.visible');
    cy.get('[data-cy="fa-twitter"]').should('be.visible');
  });
});
