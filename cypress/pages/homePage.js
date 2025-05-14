class HomePage{
    selectorsList() {
        const selectors = {
            likeButtonHero: "[data-cy='hero-card'] button[data-cy='like']",
            hireButtonHero: "[data-cy='hero-card'] button[data-cy='money']",
            confirmHireHero: '.gap-2 > .text-white',
            notLoggedMessage: ".modal-container > .open",
            loginButton: "li > .undefined",
            emailFied: '[data-cy="email"]',
            passwordField: "[data-cy='password']",
            signInButton: "button.w-full",
            createNewHero: 'a > .undefined',
            logoutButton: 'li > .undefined',
            wrongCredentialMessage: '.text-red-500'
        }

        return selectors
    }

    accessHomePage() {
        cy.visit('localhost:3000/heroes')
    }

    likeFirstHero(){
       cy.get(this.selectorsList().likeButtonHero).eq(0).click()
    }
    hireFirstHero(){
        cy.get(this.selectorsList().hireButtonHero).eq(0).click()
    }

    hireHeroConfirmation(){
        cy.get(this.selectorsList().confirmHireHero).click()
    }

    loginMessage(){
        cy.get(this.selectorsList().notLoggedMessage)
    }
    loginUserSuccess(email, password){
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().emailFied).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
        cy.get(this.selectorsList().logoutButton)
    }
    loginUserFail(email, password){
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().emailFied).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
        cy.get(this.selectorsList().wrongCredentialMessage)
    }
}

export default HomePage