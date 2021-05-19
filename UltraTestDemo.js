///<reference types="cypress"/>

function returnHome() {
    //click home button and return to main loading page
    cy.get('.fusion-mobile-logo').click();
    cy.url().should('eq', 'https://ultranauts.co/');
};

describe('Test nav bar on mobile',() => {

    beforeEach(() => {
        
        cy.eyesOpen({
            appName: 'Ultranauts.co',
            testName: 'Ultra Test Mobile View',
        });
    });

    it('first test', () => {        
        //set the viewport to a mobile device preset
        cy.viewport('iphone-5');

        //visit the site to test
        cy.visit('https://ultranauts.co/');

        //open nav bar
        cy.get('#bars').click();

        //open services tab
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3259"] > [href="#"][tabindex="0"]').click();

        //check for data quality services link
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3259"] > .sub-menu > :nth-child(1) > .fusion-bar-highlight').should('have.text', 'Data Quality Services');
        //check for software quality services link
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3259"] > .sub-menu > :nth-child(2) > .fusion-bar-highlight').should('have.text', 'Software Quality Services');
        //check for industry solutions link
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3259"] > .sub-menu > :nth-child(3) > .fusion-bar-highlight').should('have.text', 'Industry Solutions');
        
        //open work tab
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3262"] > [href="#"][tabindex="0"]').click();

        //check for fortune 100 insurer link
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3262"] > .sub-menu > :nth-child(1) > .fusion-bar-highlight').should('have.text', 'Fortune 100 Insurer');
        //check for fortune 500 media brand link
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3262"] > .sub-menu > :nth-child(2) > .fusion-bar-highlight').should('have.text', 'Fortune 500 Media Brand');
        //check for top-tier consultancy link
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3262"] > .sub-menu > :nth-child(3) > .fusion-bar-highlight').should('have.text', 'Top-tier Consultancy');
        
        //open resources tab
        cy.get("#mobile-menu-ultranauts-main-menu-1 > li:nth-child(3) > button").click();
        //check for case studies link
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="6285"] > .sub-menu > :nth-child(1) > .fusion-bar-highlight').should('have.text', 'Case Studies');
        //check for press link
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="6285"] > .sub-menu > :nth-child(2) > .fusion-bar-highlight').should('have.text', 'Press');

        //open about tab
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="4066"] > [href="#"][tabindex="0"]').click();
        //check for company link
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="4066"] > .sub-menu > :nth-child(1) > .fusion-bar-highlight').should('have.text', 'Company');
        //check for team link  
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="4066"] > .sub-menu > :nth-child(2) > .fusion-bar-highlight').should('have.text', 'Team');
        //check for jobs link
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="4066"] > .sub-menu > :nth-child(3) > .fusion-bar-highlight').should('have.text', 'Jobs'); 

        //close nav bar
        cy.get('#bars').click();

        //open Data Quality Services page from navbar 
        cy.get('#bars').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3259"] > [href="#"][tabindex="0"]').click(); 
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3259"] > .sub-menu > :nth-child(1) > .fusion-bar-highlight').click();
        //check that we are directed to correct page
        cy.url().should('include', 'data-quality-services');
  
        returnHome();

        //open Software Quality Services page from navbar 
        cy.get('#bars').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3259"] > [href="#"][tabindex="0"]').click(); 
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3259"] > .sub-menu > :nth-child(2) > .fusion-bar-highlight').click();
        cy.url().should('include', 'software-quality-services');

        returnHome();
        
        //open Industry Solutions page from navbar 
        cy.get('#bars').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3259"] > [href="#"][tabindex="0"]').click(); 
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3259"] > .sub-menu > :nth-child(3) > .fusion-bar-highlight').click();
        //check that we are directed to correct page
        cy.url().should('include', 'industry-solutions');

        returnHome();

        //open Fortune 100 Insurer page from navbar
        cy.get('#bars').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3262"] > [href="#"][tabindex="0"]').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3262"] > .sub-menu > :nth-child(1) > .fusion-bar-highlight').click();
        //check that we are directed to correct page
        cy.url().should('include', 'insurance-firm');

        returnHome();

        //open Fortune 500 Media Brand page from navbar
        cy.get('#bars').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3262"] > [href="#"][tabindex="0"]').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3262"] > .sub-menu > :nth-child(2) > .fusion-bar-highlight').click();
        //check that we are directed to correct page
        cy.url().should('include', 'media-brand');

        returnHome();

        //open Top-tier Consultancy page from navbar
        cy.get('#bars').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3262"] > [href="#"][tabindex="0"]').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="3262"] > .sub-menu > :nth-child(3) > .fusion-bar-highlight').click();
        //check that we are directed to correct page
        cy.url().should('include', 'digital-agency');

        returnHome();

        //open Case Studies page from navbar
        cy.get('#bars').click();
        cy.get("#mobile-menu-ultranauts-main-menu-1 > li:nth-child(3) > button").click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="6285"] > .sub-menu > :nth-child(1) > .fusion-bar-highlight').click();
        //check that we are directed to correct page
        cy.url().should('include', 'case-study');

        returnHome();

        //open Press page from navbar
        cy.get('#bars').click();
        cy.get("#mobile-menu-ultranauts-main-menu-1 > li:nth-child(3) > button").click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="6285"] > .sub-menu > :nth-child(2) > .fusion-bar-highlight').click();
        //check that we are directed to correct page
        cy.url().should('include', 'press-release');

        returnHome();
        
        //open Blog page from navbar
        cy.get('#bars').click();
        cy.get('#mobile-menu-ultranauts-main-menu-1 > [data-item-id="6289"] > .fusion-bar-highlight > .menu-text').click();
        //check that we are directed to correct page
        cy.url().should('include', 'blog');

        //the nav bar is different on the Blog page so we can not use our returnHome() function to return from this page
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

        cy.eyesCheckWindow();

    });

    afterEach(() => {
        cy.eyesClose();
    });
});