///<reference types="cypress"/>

//remember to set APPLITOOLS_API_KEY variable in environment
//open cypress with npx cypress open then run test from there

function returnHome() {
    //click home button and return to main loading page
    cy.get('.fusion-mobile-logo').click();
    cy.url().should('eq', 'https://ultranauts.co/');
}

describe('filtering todo items',() => {

    beforeEach(() => {
        
        cy.eyesOpen({
            appName: 'Ultranauts.co',
            testName: 'Ultra Test Mobile View',
            //set browser to a size that will force the mobile view of the navbar/"hamburger menu"
            //using cy.viewport and setting in it() will help test run faster
            //browser: { width: 400, height: 800 } 
            
        });
    });
    
    it('Check Navigation Bar', () => {
        //set the viewport to a mobile device preset
        cy.viewport('iphone-5');

        //visit the site to test
        cy.visit('https://ultranauts.co/');
        
        //click on nav bar
        cy.get('#bars').click();
        
        //check services tab
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3259"] > [href="#"][tabindex="0"]').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3259"] > .sub-menu > :nth-child(1) > .fusion-bar-highlight').should('have.text', 'Data Quality Services');
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3259"] > .sub-menu > :nth-child(2) > .fusion-bar-highlight').should('have.text', 'Software Quality Services');
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3259"] > .sub-menu > :nth-child(3) > .fusion-bar-highlight').should('have.text', 'Industry Solutions');
        
        //check work tab
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3262"] > [href="#"][tabindex="0"]').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3262"] > .sub-menu > :nth-child(1) > .fusion-bar-highlight').should('have.text', 'Fortune 100 Insurer');
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3262"] > .sub-menu > :nth-child(2) > .fusion-bar-highlight').should('have.text', 'Fortune 500 Media Brand');
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3262"] > .sub-menu > :nth-child(3) > .fusion-bar-highlight').should('have.text', 'Top-tier Consultancy');
        
        //check resources tabe
        cy.get("#mobile-menu-ultranauts-main-menu-1 > li:nth-child(3) > button").click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="6285"] > .sub-menu > :nth-child(1) > .fusion-bar-highlight').should('have.text', 'Case Studies');
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="6285"] > .sub-menu > :nth-child(2) > .fusion-bar-highlight').should('have.text', 'Press');

        //check about tab
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="4066"] > [href="#"][tabindex="0"]').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="4066"] > .sub-menu > :nth-child(1) > .fusion-bar-highlight').should('have.text', 'Company');
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="4066"] > .sub-menu > :nth-child(2) > .fusion-bar-highlight').should('have.text', 'Team');
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="4066"] > .sub-menu > :nth-child(3) > .fusion-bar-highlight').should('have.text', 'Jobs');

        //close nave bar
        cy.get('#bars').click();

        //open Data Quality Services page from navbar and check that correct page loads
        cy.get('#bars').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3259"] > [href="#"][tabindex="0"]').click(); 
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3259"] > .sub-menu > :nth-child(1) > .fusion-bar-highlight').click();
        cy.url().should('include', 'data-quality-services');

        returnHome();

        //open Software Quality Services page from navbar and check that correct page loads
        cy.get('#bars').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3259"] > [href="#"][tabindex="0"]').click(); 
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3259"] > .sub-menu > :nth-child(2) > .fusion-bar-highlight').click();
        cy.url().should('include', 'software-quality-services');

        returnHome();
        
        //open Industry Solutions page from navbar and check that correct page loads
        cy.get('#bars').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3259"] > [href="#"][tabindex="0"]').click(); 
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3259"] > .sub-menu > :nth-child(3) > .fusion-bar-highlight').click();
        cy.url().should('include', 'industry-solutions');

        returnHome();

        //open Fortune 100 Insurer page from navbar and check that correct page loads
        cy.get('#bars').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3262"] > [href="#"][tabindex="0"]').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3262"] > .sub-menu > :nth-child(1) > .fusion-bar-highlight').click();
        cy.url().should('include', 'insurance-firm');

        returnHome();

        //open Fortune 500 Media Brand page from navbar and check that correct page loads
        cy.get('#bars').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3262"] > [href="#"][tabindex="0"]').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3262"] > .sub-menu > :nth-child(2) > .fusion-bar-highlight').click();
        cy.url().should('include', 'media-brand');

        returnHome();

        //open Top-tier Consultancy page from navbar and check that correct page loads
        cy.get('#bars').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3262"] > [href="#"][tabindex="0"]').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3262"] > .sub-menu > :nth-child(3) > .fusion-bar-highlight').click();
        cy.url().should('include', 'digital-agency');

        returnHome();

        //open Case Studies page from navbar and check that correct page and section loads
        cy.get('#bars').click();
        cy.get("#mobile-menu-ultranauts-main-menu-1 > li:nth-child(3) > button").click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="6285"] > .sub-menu > :nth-child(1) > .fusion-bar-highlight').click();
        cy.url().should('include', 'case-study');

        returnHome();

        //open Press page from navbar and check that correct page and section loads
        cy.get('#bars').click();
        cy.get("#mobile-menu-ultranauts-main-menu-1 > li:nth-child(3) > button").click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="6285"] > .sub-menu > :nth-child(2) > .fusion-bar-highlight').click();
        cy.url().should('include', 'press-release');

        returnHome();
        
        //open Blog page from navbar and check that correct page loads
        cy.get('#bars').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="6289"] > .fusion-bar-highlight > .menu-text').click();
        cy.url().should('include', 'blog');

        //the nave bar is different on the Blog page so we can not use our returnHome function to return from this page
        //return home from Blog page
        cy.get('.hs-image-widget').click();

        //open Company page from navbar and check that correct page loads
        cy.get('#bars').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="4066"] > [href="#"][tabindex="0"]').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="4066"] > .sub-menu > :nth-child(1) > .fusion-bar-highlight').click();
        cy.url().should('include', 'company');
        
        returnHome();

        //open Team page from navbar and check that correct page loads
        cy.get('#bars').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="4066"] > [href="#"][tabindex="0"]').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="4066"] > .sub-menu > :nth-child(2) > .fusion-bar-highlight').click();
        cy.url().should('include', 'meet-the-team');

        returnHome();

        //open Contact Us page from navbar and check that correct page loads
        cy.get('#bars').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="6305"] > .fusion-bar-highlight > .menu-text').click();
        cy.url().should('include', 'lets-talk');

        returnHome();

    });

    afterEach(() => {
        cy.eyesClose();
    });
});
