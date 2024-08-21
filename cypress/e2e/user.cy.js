describe ('test',()=>{

    it('register a new user', () => {

        const user={
            name: "teste",
            email: "manocaio@hotmail.com",
            password: "123456"
        }
        cy.task('deleteUser',user.email)
        cy.postUser(user)
        .then(response=>{
            expect(response.status).to.eq(200)
        })
        
       
    });

    it('duplicate email', () => {

        const user={
            name: "Cristian Dutton",
            email: "cristian_dutton@hotmail.com",
            password: "123456"
        }
        cy.task('deleteUser',user.email)

        cy.postUser(user)

        cy.postUser(user)
        .then(response=>{
            expect(response.status).to.eq(409)
            expect(response.body.message).to.eq('Duplicated email!')
        })
        
       
    });


    context.only ('required fields',()=>{
        
        //reinicar massa de teste
        let user;
        beforeEach(()=>{
             user={
                name: "Samantha Victor",
                email: "samvictor@hotmail.com",
                password: "123456"
            }
        })

    it('name is required', () => {

        //deltar campo name
        delete user.name

        cy.postUser(user)
            .then( response=>{
                const {message} = response.body
                expect(response.status).to.eq(400)
                expect(message).to.eq('ValidationError: \"name\" is required')

            })
        
    });

    it('email is required', () => {

        //deltar campo name
        delete user.email

        cy.postUser(user)
            .then( response=>{
                const {message} = response.body
                expect(response.status).to.eq(400)
                expect(message).to.eq('ValidationError: \"email\" is required')

            })
        


    });

    it('password is required', () => {

        //deltar campo name
        delete user.password

        cy.postUser(user)
            .then( response=>{
                const {message} = response.body
                expect(response.status).to.eq(400)
                expect(message).to.eq('ValidationError: \"password\" is required')

            })
        
    });
})

})



