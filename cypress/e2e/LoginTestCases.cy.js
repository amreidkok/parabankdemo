import { LoginPage } from "./Pages/LoginPage"
import { RegistrationPage } from "./Pages/RegistrationPage"


const lgp=new LoginPage()
const rgp=new RegistrationPage()

beforeEach(function()
{
  cy.fixture('Registrationtestdata').then(function(regdata)
  {
    
    this.regdata=regdata
   
  })
  cy.visit(Cypress.env('url'))
}
)


  it('ValidLoginTestCase', function(){
 


lgp.InsertUserName(this.regdata.username)
lgp.InsertPassword(this.regdata.password)
lgp.ClickOnLoginBtn()
lgp.ValidateOnWelcomeText('Welcome')
    
  })
