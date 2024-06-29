export class RegistrationPage



{
//Element locators
   RegisterBtn='input[value="Register"]'
   firstnametxtbox='input[id="customer.firstName"]'
   lastnametxtbox='input[id="customer.lastName"]'
   addresstxtbox='input[id="customer.address.street"]'
   citytxtbox='input[id="customer.address.city"]'
   statetxtbox='input[id="customer.address.state"]'
   zipcodetxtbox='input[id="customer.address.zipCode"]'
   phonetxtbox='input[id="customer.phoneNumber"]'
   ssntxtbox='input[id="customer.ssn"]'
   firstNamevalidation='span[id="customer.firstName.errors"]'
   LastNameValidation='span[id="customer.lastName.errors"]'
   AddressValidation='span[id="customer.address.street.errors"]'
   cityValidation='span[id="customer.address.city.errors"]'
   stateValidation='span[id="customer.address.state.errors"]'
   zipcodeValidation='span[id="customer.address.zipCode.errors"]'
   SSNValidation='span[id="customer.ssn.errors"]'
   usernametxt='input[id="customer.username"]'
   passwordtxt='input[id="customer.password"]'
   confirmpasswordtxt='input[id="repeatedPassword"]'
   registersuccessfullytxt='div[id="rightPanel"] p'
   LogoutLink='a[href *="logout"]'

//Actions
ClickOnRegisterBtn()
{
    cy.get(this.RegisterBtn).click()
}

validateOnFirstnameValidation(Firstnameval)
{
    cy.get(this.firstNamevalidation).should('contain',Firstnameval)
}
validateOnLastnameValidation(Lastnameval)
{
    cy.get(this.LastNameValidation).should('contain',Lastnameval)
}

validateOnAddressValidation(address)
{
    cy.get(this.AddressValidation).should('contain',address)
}
validateOncityValidation(city)
{
    cy.get(this.cityValidation).should('contain',city)
}

validateOnstateValidation(state)
{
    cy.get(this.stateValidation).should('contain',state)
}

validateOnzipcodeValidation(zipcode)
{
    cy.get(this.zipcodeValidation).should('contain',zipcode)
}

validateOnssnValidation(ssn)
{
    cy.get(this.SSNValidation).should('contain',ssn)
}
InsertFirstName(firsttxt)
{
    cy.get(this.firstnametxtbox).type(firsttxt)
}
InsertLastName(lasttxt)
{
    cy.get(this.lastnametxtbox).type(lasttxt)
}

InsertAddress(addrtxt)
{
    cy.get(this.addresstxtbox).type(addrtxt)
}

Insertcity(citytxt)
{
    cy.get(this.citytxtbox).type(citytxt)
}
Insertstate(statetxt)
{
    cy.get(this.statetxtbox).type(statetxt)
}
Insertzipcode(ziptxt)
{
    cy.get(this.zipcodetxtbox).type(ziptxt)
}
Insertphone(phonetxt)
{
    cy.get(this.phonetxtbox).type(phonetxt)
}

Insertssn(ssntxt)
{
    cy.get(this.ssntxtbox).type(ssntxt)
}
Insertusername(usertxt)
{
    cy.get(this.usernametxt).type(usertxt)

}
Insertpassword(passtxt)
{
    cy.get(this.passwordtxt).type(passtxt)

}
ConfirmPassword(confirmtxt)
{
    cy.get(this.confirmpasswordtxt).type(confirmtxt)
}
ValidateOnregistersuccsText(text)
{
    cy.get(this.registersuccessfullytxt).should('contain',text)
}

ClickOnLogOutLink()
{
    cy.get(this.LogoutLink).click()
}
}