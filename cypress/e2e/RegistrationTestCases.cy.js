import { LoginPage } from "./Pages/LoginPage"
import { RegistrationPage } from "./Pages/RegistrationPage"

const lgp=new LoginPage()
const rgp=new RegistrationPage()

describe('RegistrationTestCases',function()


{

  beforeEach(function()
  {
    cy.fixture('Registrationtestdata').then(function(regdata){
      this.regdata=regdata
     
    })
  cy.visit('https://parabank.parasoft.com/')
  }
  )
    it('RegisterationValidationMessages', function(){
   
  
  lgp.ClickOnRegisterLink()
  rgp.ClickOnRegisterBtn()
  rgp.validateOnFirstnameValidation("First name is required.")
  rgp.validateOnLastnameValidation("Last name is required.")
  rgp.validateOnAddressValidation("Address is required.")
  rgp.validateOncityValidation("City is required.")
  rgp.validateOnstateValidation("State is required.")
  rgp.validateOnzipcodeValidation("Zip Code is required.")
  rgp.validateOnssnValidation("Social Security Number is required.")
      
    })


    it('ValidRegisteration', function(){
   
  
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
          
        })

}

) 


