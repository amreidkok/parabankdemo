

export class LoginPage 

{

      // Element locators 

      usernamelctr = 'input[name=username]'
      passwordlctr='input[name=password]'
      submitbtnlctr='input[value="Log In"]'
      RegisterLink='a[href *="register"]'


      //Actions
InsertUserName(username)
{
    cy.get(this.usernamelctr).type(username)
}
InsertPassword(password)
{
    cy.get(this.passwordlctr).type(password)
}

ClickOnLoginBtn()
{
    cy.get(this.submitbtnlctr).click()
}

ValidateOnWelcomeText(elementLocator,text)
{
    cy.get(elementLocator).should('contain',text)
}

ClickOnRegisterLink()
{
    cy.get(this.RegisterLink).click()
    //return new RegistrationPage()
}


}