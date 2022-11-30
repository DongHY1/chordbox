import Main from '../../components/Main';
describe('Main.cy.ts', () => {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport('ipad-mini');
  });
  it('playground', () => {
    cy.mount(<Main />);
  });
});
