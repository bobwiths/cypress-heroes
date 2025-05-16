import userData from '../fixtures/user/userData.json'
import HomePage from "../pages/homePage";
import CreateHeroPage from '../pages/createHeroPage';

const homePage = new HomePage()
const createHeroPage = new CreateHeroPage()

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
  it('Login Admin - Success', () => {
    homePage.accessHomePage()
    homePage.loginUserSuccess(userData.userAdminSuccess.email, userData.userAdminSuccess.password)
  })
  it('Login - Success', () => {
    homePage.accessHomePage()
    homePage.loginUserSuccess(userData.userSuccess.email, userData.userSuccess.password)
  })
  it('Login Admin - Fail', () => {
    homePage.accessHomePage()
    homePage.loginUserFail(userData.userAdminFail.email, userData.userAdminFail.password)
  })
  it('Login - Fail', () => {
    homePage.accessHomePage()
    homePage.loginUserFail(userData.userFail.email, userData.userFail.password)
  })
  it('Login Empty - Fail', () => {
    homePage.accessHomePage()
    homePage.loginUserEmpty()
  })
   it('Like Admin Logged - Success', () => {
    homePage.accessHomePage()
    homePage.loginUserSuccess(userData.userAdminSuccess.email, userData.userAdminSuccess.password)
    homePage.likeFirstHero()
  })
  it('Hire Admin Logged - Success', () => {
    homePage.accessHomePage()
    homePage.loginUserSuccess(userData.userAdminSuccess.email, userData.userAdminSuccess.password)
    homePage.hireFirstHero()
    homePage.hireHeroConfirmation()
  })
  it('Like User Logged - Success', () => {
    homePage.accessHomePage()
    homePage.loginUserSuccess(userData.userSuccess.email, userData.userSuccess.password)
    homePage.likeFirstHero()
  })
  it('Hire User Logged - Success', () => {
    homePage.accessHomePage()
    homePage.loginUserSuccess(userData.userSuccess.email, userData.userSuccess.password)
    homePage.hireFirstHero()
    homePage.hireHeroConfirmation()
  })
  it('Create New Hero - Success', () => {
    homePage.accessHomePage()
    homePage.loginUserSuccess(userData.userAdminSuccess.email, userData.userAdminSuccess.password)
    createHeroPage.accessNewHeroPage()
    createHeroPage.createNewHero(userData.newHero.nameHero, userData.newHero.priceHero, userData.newHero.fansHero, userData.newHero.savesHero)
  })
  it.only('Create New Hero and Logout before Submit', () => {
    homePage.accessHomePage()
    homePage.loginUserSuccess(userData.userAdminSuccess.email, userData.userAdminSuccess.password)
    createHeroPage.accessNewHeroPage()
    createHeroPage.createNewHeroError(userData.newHero.nameHero, userData.newHero.priceHero, userData.newHero.fansHero, userData.newHero.savesHero)
  })
})