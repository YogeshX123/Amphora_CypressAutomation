class Login {
    txtUserName = "#email";
    txtpassword = "#pass";
    btnSignIn = "#send2";
    lblmsg = ".logged-in";
    lblmsg4 = "div[data-bind='html: $parent.prepareMessageForHtml(message.text)']";

    setUserName(username) {
        cy.get(this.txtUserName).type(username);
    }


    setPassword(password) {
        cy.get(this.txtpassword).type(password);
    }

    clickSignInBtn() {
        cy.get(this.btnSignIn).click();
    }

    verifyLogin() {
        cy.get(this.lblmsg).first().should('have.text', "Welcome, Yogesh Bhagat!");
    }

    verifyLoginFailure() {
        cy.get(this.lblmsg4).first().should('have.text', "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.");
    }

}

export default Login;