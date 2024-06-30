export class NewAccountPage


{
    //Element locators

   NewAccountLink='a[href *="openaccount"]'
   OpenNewAccountBtn='input[value="Open New Account"]'
   AccountDropDownMenu='select[id="fromAccountId"]'
   NewAccountCreationMssg='div[id="openAccountResult"]'
    //Actions

    ClickOnOpenandCreateNewAccount(index)
    {
        cy.get(this.NewAccountLink).click()
        //cy.get(this.AccountDropDownMenu).click()
        cy.get(this.AccountDropDownMenu).select(index)
        cy.get(this.OpenNewAccountBtn).click()
        
    }

    ValidateOnAccountCreation(CreationMssg)
    {
        cy.get(this.NewAccountCreationMssg).should('be.visible').and('not.be.disabled');
        cy.get(this.NewAccountCreationMssg).should('contain',CreationMssg)

    }
    }

   


