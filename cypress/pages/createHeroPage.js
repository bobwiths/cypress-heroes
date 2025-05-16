class CreateHeroPage{
    selectorsList() {
        const selectors = {
            nameField: "[data-cy='nameInput']",
            priceField: "[data-cy='priceInput']",
            fansField: "[data-cy='fansInput']",
            savesField: "[data-cy='savesInput']",
            powerSelect: '[data-cy="powersSelect"]',
            avatarFile: "[data-cy='avatarFile']",
            logoutButton: "button.border",
            submitButton: "[novalidate=''] button"
        }
        return selectors
    }

    accessNewHeroPage(){
        cy.visit('http://localhost:3000/heroes/new')
    }
    createNewHero(nameHero, priceHero, fansHero, savesHero){
        cy.get(this.selectorsList().nameField).type(nameHero)
        cy.get(this.selectorsList().priceField).type(priceHero)
        cy.get(this.selectorsList().fansField).type(fansHero)
        cy.get(this.selectorsList().savesField).type(savesHero)
        cy.get(this.selectorsList().powerSelect).select('6')
        cy.get(this.selectorsList().avatarFile).selectFile('./cypress/images/heroBob.png')
        cy.get(this.selectorsList().submitButton).click()
    }
    createNewHeroError(nameHero, priceHero, fansHero, savesHero){
        cy.get(this.selectorsList().nameField).type(nameHero)
        cy.get(this.selectorsList().priceField).type(priceHero)
        cy.get(this.selectorsList().fansField).type(fansHero)
        cy.get(this.selectorsList().savesField).type(savesHero)
        cy.get(this.selectorsList().powerSelect).select('6')
        cy.get(this.selectorsList().avatarFile).selectFile('./cypress/images/heroBob.png')
        cy.get(this.selectorsList().logoutButton).click()
        cy.get(this.selectorsList().submitButton).click({force: true})
    }
}
export default CreateHeroPage