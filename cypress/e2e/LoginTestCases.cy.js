import { LoginPage } from "./Pages/LoginPage"
import { RegistrationPage } from "./Pages/RegistrationPage"

beforeEach(function()
{
  cy.fixture('Registrationtestdata').then(function(regdata)
  {
    
    this.regdata=regdata
   
  })

}
)


  it('ValidLoginTestCase', function(){
 
const lgp=new LoginPage()
const rgp=new RegistrationPage()
cy.visit('https://parabank.parasoft.com/')
lgp.InsertUserName(this.regdata.username)
lgp.InsertPassword(this.regdata.password)
lgp.ClickOnLoginBtn()
lgp.ValidateOnWelcomeText('Welcome')
    
  })
