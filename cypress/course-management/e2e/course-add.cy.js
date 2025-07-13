describe('Luồng Đăng nhập và Tạo khóa học mới', () => {
  const username = 'admin001';
  const password = '123456';
  const courseTitle = 'Khóa học Cypress';
  const courseDescription = 'Khóa học E2E test với Cypress';
  const coursePrice = '500000';
  const courseCategory = '1'; 
  const courseInstructor = '2'; 
  const courseStatus = 'published';
  const courseImageFile = 'C.png';
  before(() => {
    cy.visit('/login');
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.login-btn').click();
    cy.url().should('include', '/dashboard');
    cy.visit('/course-management');
  });
  it('Tạo khóa học thành công', () => {
    cy.contains('Create').click();
    cy.get('.modal-title', { timeout: 10000 }).should('contain', 'Tạo khóa học mới');
    cy.get('#title', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .should('not.be.disabled');
    cy.get('#title').click().type(courseTitle);
    cy.get('#description').should('be.visible').type(courseDescription);
    cy.get('#price').should('be.visible').type(coursePrice);
    cy.get('#category').should('be.visible').select(courseCategory);
    cy.get('#instructor').should('be.visible').select(courseInstructor);
    cy.get('#status').should('be.visible').select(courseStatus);
    cy.get('#file-upload').attachFile(courseImageFile);
    cy.get('button.btn-primary')
      .contains('Tạo khóa học')
      .should('be.visible')
      .click();
    cy.contains(courseTitle).should('exist');
  });
});
