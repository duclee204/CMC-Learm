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

  cy.contains('Quản lý').click();
  cy.get('input[type=file]').attachFile('Quay màn hình 2025-03-03 233817.mp4');
  cy.contains('Mô tả').type('Trình là gì? mà trình ai chấm?');
  cy.contains('Tên chương').type('Chương 1: Trình là gì?');
  cy.get('button').contains('Tải lên').click();
});
});
