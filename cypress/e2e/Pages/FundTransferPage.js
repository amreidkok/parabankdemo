export class FundTransferPage


{
    //Element locators

   TransferFundsLink='a[href *="transfer"]'
   ToAccountDropDownMenu='select[id="toAccountId"]'
   FromAccountDropDownMenu='select[id="fromAccountId"]'
   TransferbetweenaccountsBtn='input[type="submit"]'
   Amount='#amount'
   TransferMessage="div[id='showResult']"


//    OpenNewAccountBtn='input[value="Open New Account"]'
//    AccountDropDownMenu='select[id="fromAccountId"]'
//    NewAccountCreationMssg='div[id="openAccountResult"]'
    //Actions

    ClickOnTranferFundsLink()
    {
        cy.get(this.TransferFundsLink).click()
        
    }
    TransferAmountbetweenAccounts(index1,index2,amt)
    {
        cy.get(this.Amount).type(amt)
        cy.get(this.FromAccountDropDownMenu).select(index1)
        cy.get(this.ToAccountDropDownMenu).select(index2)
        cy.get(this.TransferbetweenaccountsBtn, { timeout: 10000 }).should('be.visible').should('be.enabled').click();
       
        
    }

    ValidateOnAccountTransfer(TranferMssg)
    {
        
        cy.get(this.TransferMessage).should('contain',TranferMssg)

    }
    }

   


