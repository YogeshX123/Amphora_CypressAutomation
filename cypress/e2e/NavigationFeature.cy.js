import Login from "../../PageObjects/loginpage";
import Home from "../../PageObjects/homepage";

describe('Navigation Feature', () => {
    const homepage = new Home();
    const loginpage = new Login();

    beforeEach(() => {
        cy.visit("https://magento.softwaretestingboard.com/");

        homepage.clickSignInLink();
        loginpage.setUserName("yogeshstrikes518@gmail.com");
        loginpage.setPassword("Yogesh@321");
        loginpage.clickSignInBtn();


    });





    it('Navigation Test', () => {

        homepage.clickNavigatetoMen();
        homepage.clickNavigatetoTop();
        homepage.clickNavigatetoJacket();
        homepage.clickOnSize();
        homepage.clickOnselectLsizebtn();
        homepage.clickOnfirstItem();
        homepage.clickOnselectRequiredSize();
        homepage.clickOnselectRequiredColour();
        homepage.clickOnAddToCartbtn();
        homepage.verifyItemAddedToCart();
        homepage.clickOnViewCartbtn();
        homepage.clickOnRemoveItembtn();
        homepage.clickOnOktoRemoveItembtn();
        homepage.verifyItemRemovedFromCart();
      



    })


})



