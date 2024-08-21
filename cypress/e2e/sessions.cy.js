describe('test', () => {
    it('user session', () => {

        cy.fixture('users').then(function (users) {

            const userData = users.login


            cy.postSession(userData).then(response => {
                const { user } = response.body

                expect(response.status).to.eq(200)
                expect(user.name).to.eq(user.name)
            })
        })



    });



    it('invalid password', () => {
        cy.fixture('users').then(function (users) {

            const userData = users.inv_pass

            cy.postSession(userData).then(response => {
                expect(response.status).to.eq(401)
            })

        });


    })
    it('email not found', () => {

        cy.fixture('users').then(function (users) {

            const userData = users.email_404
            cy.postSession(userData).then(response => {
                expect(response.status).to.eq(401)
            })

        });
    })
})