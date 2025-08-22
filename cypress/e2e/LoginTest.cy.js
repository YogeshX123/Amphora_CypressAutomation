import Login from "../../PageObjects/loginpage";
import Home from "../../PageObjects/homepage";

describe('login functionality', () => {

    it('login using valid credentials', () => {

        cy.visit("https://magento.softwaretestingboard.com/")

        const homepage = new Home();
        homepage.clickSignInLink();


        cy.fixture('validLogin').then((data) => {

            const loginpage = new Login();
            loginpage.setUserName(data.username);
            loginpage.setPassword(data.password);
            loginpage.clickSignInBtn();
            loginpage.verifyLogin();


        })

    })



     it('login using invalid credentials', () => {

        cy.visit("https://magento.softwaretestingboard.com/")

        const homepage = new Home();
        homepage.clickSignInLink();


        cy.fixture('InValidLogin').then((data) => {

            const loginpage = new Login();
            loginpage.setUserName(data.username);
            loginpage.setPassword(data.password);
            loginpage.clickSignInBtn();
            loginpage.verifyLoginFailure();


        })

    })


})



