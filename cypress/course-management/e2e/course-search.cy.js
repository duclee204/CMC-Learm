describe('Luồng Tìm kiếm khóa học', () => {
  const username = 'admin001';
  const password = '123456';

  const searchTitle = 'Khóa học Cypress';

  before(() => {
    cy.visit('/login');
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.login-btn').click();
    cy.url().should('include', '/dashboard');
    cy.visit('/course-management');
  });

  it('Tìm kiếm khóa học theo tên', () => {
    cy.get('input[placeholder="Search"]')
      .should('exist')
      .clear()
      .type(searchTitle);
    cy.get('.course-card').should('contain.text', searchTitle);
  });
});
