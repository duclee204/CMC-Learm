describe('Luồng Xóa khóa học (dynamic)', () => {
    before(() => {
        cy.visit('/login');
        cy.get('#username').type('admin001');
        cy.get('#password').type('123456');
        cy.get('.login-btn').click();
        cy.url().should('include', '/dashboard');
        cy.visit('/course-management');
    });

    it('Xóa khóa học đầu tiên trong danh sách', () => {
        cy.get('.course-card').first().within(() => {
            cy.get('.card-title')
                .invoke('text')
                .then((courseTitle) => {
                    cy.wrap(courseTitle.trim()).as('deletedTitle');
                });
            cy.get('.details-btn').click();
        });
        cy.get('.modal-title', { timeout: 10000 }).should('contain', 'Chi tiết khóa học');
        cy.get('button.btn-danger').contains('Xóa khóa học').click();
        cy.get('@deletedTitle').then((title) => {
            cy.contains(title).should('not.exist');
        });
    });
});