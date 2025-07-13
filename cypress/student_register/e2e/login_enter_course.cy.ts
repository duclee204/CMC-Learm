describe('Luồng Đăng nhập và Vào học khóa học đã đăng ký', () => {
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

  it('Điều hướng sang Courses và Vào học 1 khóa học đã đăng ký', () => {
    cy.visit('/');
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.login-btn').click();

    cy.url().should('include', '/dashboard');

    cy.visit('/courses');
    cy.url().should('include', '/courses');

    cy.get('.section-title').contains('📚 Khóa học của tôi').should('be.visible');
    cy.get('.course-card.enrolled').should('exist');

    cy.get('.course-card.enrolled').first().within(() => {
      cy.get('.btn.btn-primary').contains('Vào học').click();
    });

    // Xác minh đã vào trang học
    cy.url().should('include', '/learn-online');
    cy.url().should('include', 'courseId=');

    // ✅ Sửa: Check chắc chắn các phần tử có thật
    cy.get('h2', { timeout: 10000 }).should('not.be.empty');
    cy.get('video', { timeout: 10000 }).should('exist');
    cy.get('nav.recorded-videos', { timeout: 10000 }).should('exist');
  });
});
