describe('Luồng Đăng nhập và Đăng ký khóa học', () => {
  const username = 'thu';
  const password = '123456';

  it('Đăng nhập thành công và điều hướng đến Dashboard', () => {
    cy.visit('/');

    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.login-btn').click();

    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('exist');
  });

  it('Điều hướng sang Khóa học và đăng ký khóa học chưa đăng ký', () => {
    // Login lại
    cy.visit('/');

    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.login-btn').click();

    cy.url().should('include', '/dashboard');

    // Điều hướng đến Courses
    cy.visit('/courses');
    cy.url().should('include', '/courses');

    cy.get('.section-title').contains('🌟 Khóa học có sẵn').should('be.visible');

    cy.get('.course-card.not-enrolled').first().within(() => {
      cy.contains('🔓 Chưa đăng ký').should('be.visible');
      cy.get('.btn.btn-success').contains('Đăng ký ngay').click();
    });

    // Xác minh alert
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Đăng ký thành công');
    });

    // Sau khi redirect sang learn-online => quay lại /courses để verify
    cy.visit('/courses');
    cy.url().should('include', '/courses');

    cy.get('.section-title').contains('📚 Khóa học của tôi').should('be.visible');
    cy.get('.course-card.enrolled').should('exist');
  });
});
