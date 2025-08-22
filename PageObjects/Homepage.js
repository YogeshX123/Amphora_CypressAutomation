require('cypress-xpath')

class Home {
    NavigatetoMen = '#ui-id-5 > .ui-menu-icon';
    NavigatetoTop = '#ui-id-5 > :nth-child(2)';
    NavigatetoJacket = 'a[id="ui-id-19"] span';
    sizebtn = ':nth-child(2) > .filter-options-title';
    selectLsizebtn = '[href="https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html?size=169"] > .swatch-option';
    selectFirstItem = "img[alt='Proteus Fitness Jackshirt-L-Black']";
    selectRequiredSize = '#option-label-size-143-item-169';
    selectRequiredColour = '#option-label-color-93-item-49';
    linkSignIn = "div[class='panel header'] li[data-label='or'] a";
    addToCartbtn = "button[id='product-addtocart-button'] span";
    lblmsg2 = '.message-success > div';
    ViewCartbtn = '.counter-number';
    RemoveItembtn = "a[title='Remove item']"
    OktoRemoveItembtn = "button[class='action-primary action-accept'] span";
    lblmsg3 = '.subtitle.empty';

    clickSignInLink() {
        cy.get(this.linkSignIn).click();
    }

    clickNavigatetoMen() {
        cy.get(this.NavigatetoMen).realHover();
        cy.wait(500);
    }

    clickNavigatetoTop() {
        cy.get(this.NavigatetoTop).realHover();
        cy.wait(500);
    }

    clickNavigatetoJacket() {
        cy.get(this.NavigatetoJacket).click({ force: true });
    }

    clickOnSize() {
        cy.get(this.sizebtn).click({ force: true });
    }

    clickOnselectLsizebtn() {
        cy.get(this.selectLsizebtn).click({ force: true });
    }


    clickOnfirstItem() {
        cy.get(this.selectFirstItem).click({ force: true });
    }

    clickOnselectRequiredSize() {
        cy.get(this.selectRequiredSize).click({ force: true });
    }


    clickOnselectRequiredColour() {
        cy.get(this.selectRequiredColour).click({ force: true });
    }

    clickOnAddToCartbtn() {
        cy.get(this.addToCartbtn).click();

    }

    verifyItemAddedToCart() {
        cy.get(this.lblmsg2).first().should('have.text', '\nYou added Proteus Fitness Jackshirt to your shopping cart.');
    }

    clickOnViewCartbtn() {
        cy.get(this.ViewCartbtn).click();

    }

    clickOnRemoveItembtn() {
        cy.get(this.RemoveItembtn).click();

    }

    clickOnOktoRemoveItembtn() {
        cy.get(this.OktoRemoveItembtn).click();
    }

    verifyItemRemovedFromCart() {
        cy.get(this.lblmsg3).first().should('have.text', 'You have no items in your shopping cart.');
    }


}
export default Home;