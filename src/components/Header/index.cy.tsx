import Header from '.'
import FontStyles from '../../assets/fonts/fonts'

describe('<Header />', () => {
  it('should render correct title', () => {
    const title = 'Avaliação1'
    cy.mount(
      <>
        <FontStyles />
        <Header title={title} />
      </>
    )
    cy.get('[data-cy=header-title]').should('have.text', title)
  })
})
