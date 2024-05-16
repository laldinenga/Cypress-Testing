describe('Login test', () => {
    it('Login Successful', function () {
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login/');
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();
        cy.url().should('not.include', '/profile.php#login').should('include', '/#appointment');
    })
    it('Appointment form Successfully Submitted', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login/');
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();
        cy.url().should('not.include', '/profile.php#login');
        cy.get('#combo_facility').select('Tokyo CURA Healthcare Center');
        cy.get('#chk_hospotal_readmission').check();
        cy.get('#radio_program_medicaid').check();
        cy.get('#txt_visit_date').type('2024-05-20'); 
        cy.get('#txt_comment').scrollIntoView().type('This is a test comment.', { force: true });
        cy.get('#btn-book-appointment').click();
        cy.url().should('include', '/appointment.php#summary');

    })

    it('Home Button Function Successfully', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login/');
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();
        cy.url().should('not.include', '/profile.php#login');
        cy.get('#combo_facility').select('Tokyo CURA Healthcare Center');
        cy.get('#chk_hospotal_readmission').check();
        cy.get('#radio_program_medicaid').check();
        cy.get('#txt_visit_date').type('2024-05-20');
        cy.get('#txt_comment').scrollIntoView().type('This is a test comment.', { force: true });
        cy.get('#btn-book-appointment').click();
        cy.url().should('include', '/appointment.php#summary');
        cy.get('a.btn.btn-default[href="https://katalon-demo-cura.herokuapp.com/"]').click();
        cy.url().should('not.include', '/appointment.php#summary').should('eq', 'https://katalon-demo-cura.herokuapp.com/');
    })
    it('History Recorded Successfully', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login/');
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();
        cy.url().should('not.include', '/profile.php#login');
        cy.get('#combo_facility').select('Tokyo CURA Healthcare Center');
        cy.get('#chk_hospotal_readmission').check();
        cy.get('#radio_program_medicare').check();
        cy.get('#txt_visit_date').type('2024-05-20');
        cy.get('#txt_comment').scrollIntoView().type('Comment made by Laldinenga.', { force: true });
        cy.get('#btn-book-appointment').click();
        cy.url().should('include', '/appointment.php#summary');
        cy.get('#sidebar-wrapper').scrollIntoView();
        cy.get('#sidebar-wrapper .sidebar-nav a[href="history.php#history"]').click({force: true});
        cy.url().should('include', '/history.php#history')
        cy.get('#history .container #facility').should('contain', 'Tokyo CURA Healthcare Center');
        cy.get('#history .container #comment').should('contain', 'Comment made by Laldinenga');


    })
    
})
