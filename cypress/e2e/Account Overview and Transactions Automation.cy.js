import { LoginPage } from "./Pages/LoginPage"
import { NewAccountPage } from "./Pages/NewAccountPage"
import { RegistrationPage } from "./Pages/RegistrationPage"
import { FundTransferPage} from "./Pages/FundTransferPage"
 
const lgp=new LoginPage()
const rgp=new RegistrationPage()
const NAp= new NewAccountPage()
const ftp= new FundTransferPage()

describe('Account Overview and transactions Test Cases',function()


{

  beforeEach(function()
  {
    cy.fixture('Registrationtestdata').then(function(regdata){
      const originalAdminUser = regdata.username;
      // Generate a new incremented user value (you can use any logic here)
      const incrementedAdminUser = `${originalAdminUser}${new Date().getTime()}`; // Example: admin1624605053492
      
      // Update the fixture data with the new user value
      regdata.username = incrementedAdminUser;
      
          this.regdata=regdata
     
    })
  cy.visit(Cypress.env('url'))
  }
  )
    


    it('ValidateOnCreatingNewAccountandViewBalance', function(){
   
      lgp.ClickOnRegisterLink()
      rgp.ClickOnRegisterBtn()
      rgp.InsertFirstName(this.regdata.firstname)
      rgp.InsertLastName(this.regdata.lastname)
      rgp.InsertAddress(this.regdata.Address)
      rgp.Insertcity(this.regdata.city)
      rgp.Insertstate(this.regdata.state)
      rgp.Insertzipcode(this.regdata.zipcode)
      rgp.Insertphone(this.regdata.phone)
      rgp.Insertssn(this.regdata.ssn)
      rgp.Insertusername(this.regdata.username )
      rgp.Insertpassword(this.regdata.password)
      rgp.ConfirmPassword(this.regdata.password)
      rgp.ClickOnRegisterBtn()
      rgp.ValidateOnregistersuccsText('Your account was')
      rgp.ClickOnLogOutLink()
      lgp.InsertUserName(this.regdata.username)
      lgp.InsertPassword(this.regdata.password)
      lgp.ClickOnLoginBtn()
      lgp.ValidateOnWelcomeText('Welcome')
      NAp.ClickOnOpenandCreateNewAccount(0)
      NAp.ValidateOnAccountCreation('Congratulations, your account is now open.')
    
        })

        it('ValidateOnfundtransferBetweenAccounts', function(){
   
          lgp.ClickOnRegisterLink()
          rgp.ClickOnRegisterBtn()
          rgp.InsertFirstName(this.regdata.firstname)
          rgp.InsertLastName(this.regdata.lastname)
          rgp.InsertAddress(this.regdata.Address)
          rgp.Insertcity(this.regdata.city)
          rgp.Insertstate(this.regdata.state)
          rgp.Insertzipcode(this.regdata.zipcode)
          rgp.Insertphone(this.regdata.phone)
          rgp.Insertssn(this.regdata.ssn)
          rgp.Insertusername(this.regdata.username )
          rgp.Insertpassword(this.regdata.password)
          rgp.ConfirmPassword(this.regdata.password)
          rgp.ClickOnRegisterBtn()
          rgp.ValidateOnregistersuccsText('Your account was')
          rgp.ClickOnLogOutLink()
          lgp.InsertUserName(this.regdata.username)
          lgp.InsertPassword(this.regdata.password)
          lgp.ClickOnLoginBtn()
          lgp.ValidateOnWelcomeText('Welcome')
          NAp.ClickOnOpenandCreateNewAccount(0)
          ftp.ClickOnTranferFundsLink()
          ftp.TransferAmountbetweenAccounts(0,1,500)
          ftp.ValidateOnAccountTransfer('Transfer Complete!')
        
            })

}

) 


