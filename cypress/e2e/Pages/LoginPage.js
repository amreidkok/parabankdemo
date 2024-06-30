

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
ValidateOnInvalidLoginMessage(text1,text2)
{
    cy.xpath(this.LoginInvalidMessage).should('be.visible')
    cy.xpath(this.LoginInvalidMessage)
  .should(($status) => {
    const text = $status.text();
    expect(text === text1 || text === text2).to.be.true;
  });


}
}