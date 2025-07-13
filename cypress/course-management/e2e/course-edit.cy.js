describe('Luồng Sửa khóa học (dynamic)', () => {
  const updatedTitle = 'Khóa học C++';
  const updatedDescription = 'Mô tả khoá học C++ đã cập nhật';
  const updatedPrice = '750000';
  const updatedStatusValue = 'draft';
  const updatedImage = 'C.png';
  before(() => {
    cy.visit('/login');
    cy.get('#username').type('admin001');
    cy.get('#password').type('123456');
    cy.get('.login-btn').click();
    cy.url().should('include', '/dashboard');
    cy.visit('/course-management');
  });
  it('Cập nhật khóa học đầu tiên trong danh sách', () => {
    cy.get('.course-card').first().within(() => {
      cy.get('.card-title')
        .invoke('text')
        .then((originalTitle) => {
          cy.wrap(originalTitle).as('originalTitle');
        });
      cy.get('.details-btn').click();
    });
    cy.get('.modal-title', { timeout: 10000 }).should('contain', 'Chi tiết khóa học');
    cy.get('input[placeholder="Nhập tên khóa học"]').clear().type(updatedTitle);
    cy.get('textarea[placeholder="Nhập mô tả khóa học"]').clear().type(updatedDescription);
    cy.get('input[placeholder="0"]').clear().type(updatedPrice);
    cy.get('label')
      .contains('Trạng thái')
      .parent()
      .find('select')
      .should('exist')
      .select(updatedStatusValue);
    cy.get('#file-upload-edit').attachFile(updatedImage);
    cy.get('button.btn-primary').contains('Cập nhật').should('be.visible').click();
    cy.contains(updatedTitle, { timeout: 10000 }).should('exist');
    cy.get('@originalTitle').then((oldTitle) => {
      if (oldTitle !== updatedTitle) {
        cy.contains(oldTitle).should('not.exist');
      }
    });
  });
});
