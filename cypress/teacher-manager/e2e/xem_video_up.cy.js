describe('Giảng viên upload video', () => {
  it('Đăng nhập thành công', () => {
    cy.visit('http://localhost:4200/login');
    cy.get('input[placeholder="Username"]').type('teacher001');
    cy.get('input[placeholder="Password"]').type('123456');
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/dashboard');
  });

 it('Chọn khóa học và upload video', () => {
  cy.visit('http://localhost:4200/login');

  // Giả sử input có placeholder là 'Username' và 'Password'
  cy.get('input[placeholder="Username"]').type('teacher001');
    cy.get('input[placeholder="Password"]').type('123456');
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/dashboard');
  // Sau khi login thành công, chuyển tới trang courses
  cy.visit('http://localhost:4200/courses');

  cy.contains('Xem video').click();
  cy.contains('Bài 5').click();
  
});
});


