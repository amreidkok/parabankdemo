

export class LoginPage 

{

      // Element locators 

      usernamelctr = 'input[name=username]'
      passwordlctr='input[name=password]'
      submitbtnlctr='input[value="Log In"]'
      RegisterLink='a[href *="register"]'
      WelcomeTxt='p[class="smallText"] b'
      LoginInvalidMessage='(//p[@class="error"])[1]'



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

ValidateOnWelcomeText(text)
{
    cy.get(this.WelcomeTxt).should('contain',text)
}

ClickOnRegisterLink()
{
    cy.get(this.RegisterLink).click()
    //return new RegistrationPage()
}
ValidateOnInvalidLoginMessage(text)
{
    cy.xpath(this.LoginInvalidMessage).should('contain',text)
}


}