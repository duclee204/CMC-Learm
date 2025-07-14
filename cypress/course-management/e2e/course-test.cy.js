const username = 'admin001';
const password = '123456';
const courseTitle = 'Khóa học Python';
const updatedTitle = 'Khóa học C++';
const courseDescription = 'Mô tả khóa học Python';
const updatedDescription = 'Mô tả khóa học C++';
const coursePrice = '500000';
const updatedPrice = '750000';
const courseCategory = '1';
const courseInstructor = '2';
const courseStatus = 'published';
const updatedStatus = 'draft';
const updatedImageFile = 'C.png';
const courseImageFile = 'python.jpg';
function login() {
    cy.visit('/login');
    cy.get('#username').should('be.visible').type(username);
    cy.get('#password').should('be.visible').type(password);
    cy.get('.login-btn').click();
    cy.location('pathname', { timeout: 10000 }).should('include', '/dashboard');
    cy.contains('Dashboard', { timeout: 10000 }).should('be.visible');
}
describe('Luồng tổng hợp: Tạo → Tìm kiếm → Sửa → Xóa khóa học', () => {
    it('1. Tạo khóa học mới', () => {
        login();
        cy.visit('/course-management');

        cy.contains('Create').should('be.visible').click();

        cy.get('#title', { timeout: 10000 })
            .should('be.visible')
            .and('not.be.disabled')
            .then(($el) => {
                cy.wrap($el).clear().type(courseTitle);
            });

        cy.get('#description', { timeout: 10000 })
            .should('be.visible')
            .then(($el) => {
                cy.wrap($el).clear().type(courseDescription);
            });

        cy.get('#price', { timeout: 10000 })
            .should('be.visible')
            .then(($el) => {
                cy.wrap($el).clear().type(coursePrice);
            });

        cy.get('#category').select(courseCategory);
        cy.get('#instructor').select(courseInstructor);
        cy.get('#status').select(courseStatus);
        cy.get('#file-upload').attachFile(courseImageFile);

        cy.get('button.btn-primary').contains('Tạo khóa học').click();

        cy.contains(courseTitle, { timeout: 10000 }).should('exist');
        cy.log('Tạo khóa học thành công');
    });

    it('2. Tìm kiếm khóa học', () => {
        login();
        cy.visit('/course-management');

        cy.get('input[placeholder="Search"]', { timeout: 10000 })
            .should('exist')
            .should('be.visible');

        cy.get('input[placeholder="Search"]').clear();

        cy.wait(1000);

        cy.get('input[placeholder="Search"]', { timeout: 10000 }).should('be.visible').type('Khóa học');
        cy.get('.course-card', { timeout: 10000 }).its('length').should('be.gte', 1);

        cy.log('Tìm kiếm khóa học thành công');
    });

    it('3. Sửa khóa học', () => {
        login();
        cy.visit('/course-management');

        cy.get('.course-card', { timeout: 10000 }).first().within(() => {
            cy.get('.details-btn').click();
        });

        cy.get('input[placeholder="Nhập tên khóa học"]', { timeout: 10000 })
            .should('be.visible')
            .and('not.be.disabled')
            .then(($el) => {
                cy.wrap($el).clear().type(updatedTitle);
            });

        cy.get('textarea[placeholder="Nhập mô tả khóa học"]', { timeout: 10000 })
            .should('be.visible')
            .then(($el) => {
                cy.wrap($el).clear().type(updatedDescription);
            });

        cy.get('input[placeholder="0"]', { timeout: 10000 })
            .should('be.visible')
            .then(($el) => {
                cy.wrap($el).clear().type(updatedPrice);
            });

        cy.get('label').contains('Trạng thái').parent().find('select').select(updatedStatus);
        cy.get('#file-upload-edit').attachFile(updatedImageFile);

        cy.get('button.btn-primary').contains('Cập nhật').click();
        cy.contains(updatedTitle, { timeout: 10000 }).should('exist');
        cy.log('Cập nhật khóa học thành công');
    });

    it('4. Xóa khóa học', () => {
        login();
        cy.visit('/course-management');

        cy.get('.course-card', { timeout: 10000 }).first().within(() => {
            cy.get('.details-btn').click();
        });

        cy.get('button.btn-danger').contains('Xóa khóa học').click();

        cy.visit('/course-management');
        cy.log('Xóa khóa học thành công');
    });
});