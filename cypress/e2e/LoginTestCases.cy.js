import { LoginPage } from "./Pages/LoginPage"
import { RegistrationPage } from "./Pages/RegistrationPage"


  it('ValidLoginTestCase', function(){
 
const lgp=new LoginPage()
const rgp=new RegistrationPage()
cy.visit('https://parabank.parasoft.com/')
lgp.InsertUserName('adminamr')
lgp.InsertPassword('amr')
lgp.ClickOnLoginBtn()
lgp.ValidateOnWelcomeText('Welcome')
    
  })
