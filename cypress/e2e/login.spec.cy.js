import HomePage from "../pages/homePage";

const homePage = new HomePage()

describe('Login Tests', () => {
  it('Like w/o Sign In - Success', () => {
    homePage.accessHomePage()
    homePage.likeFirstHero()
    homePage.loginMessage()
  })
  it('Hire w/o Sign In - Success', () => {
    homePage.accessHomePage()
    homePage.hireFirstHero()
    homePage.loginMessage()
  })
})