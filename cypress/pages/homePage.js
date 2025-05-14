class HomePage{
    selectorsList() {
        const selectors = {
            likeButtonHero: "[data-cy='hero-card'] button[data-cy='like']",
            hireButtonHero: "[data-cy='hero-card'] button[data-cy='money']",
            notLoggedMessage: ".modal-container > .open"
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

    loginMessage(){
        cy.get(this.selectorsList().notLoggedMessage)
    }
}

export default HomePage