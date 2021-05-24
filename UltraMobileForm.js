///<reference types="cypress"/>

// Check out my walk through of writing and using this file 
// https://ultra.guide/bin/view/Automation/IntroductionToCypressAndApplitools

describe('Test contact us form on a mobile device',() => {

    beforeEach(() => {
        
        cy.eyesOpen({
            appName: 'Ultranauts.co',
            testName: 'Ultra Test Contact Form Mobile View',
        });
    });

        it('Form Test - Missing Email', () => {        
            //set the viewport to a mobile device preset
            cy.viewport('iphone-5');
    
            //visit the site to test
            cy.visit('https://ultranauts.co/lets-talk/');  
            //input first name
            cy.get('#firstname-3d562b96-43d4-4ab1-bb1d-0482194836eb').type('Cash');
            //input last name
            cy.get('#lastname-3d562b96-43d4-4ab1-bb1d-0482194836eb').type('Barnes');
            //select Other from dropdown menu
            cy.get('#what_are_you_interested_in_-3d562b96-43d4-4ab1-bb1d-0482194836eb').select('Other');
            //click the submit button
            cy.get('.hs-button').click();
            //check for error message near empty field
            cy.get('.hs-error-msg').should('be.visible');
            //check for error next to submit button
            cy.get('.hs-main-font-element').should('be.visible');

        });

        it('Form Test - Invalid Email', () => {        
            //set the viewport to a mobile device preset
            cy.viewport('iphone-5');
    
            //visit the site to test
            cy.visit('https://ultranauts.co/lets-talk/');  
            //input first name
            cy.get('#firstname-3d562b96-43d4-4ab1-bb1d-0482194836eb').type('Cash');
            //input last name
            cy.get('#lastname-3d562b96-43d4-4ab1-bb1d-0482194836eb').type('Barnes');
            //input invalid email
            cy.get('#email-3d562b96-43d4-4ab1-bb1d-0482194836eb').type('fake@email');
            //select Other from dropdown menu
            cy.get('#what_are_you_interested_in_-3d562b96-43d4-4ab1-bb1d-0482194836eb').select('Other');
            //click the submit button
            cy.get('.hs-button').click();
            //check for error message near invalid email
            cy.get('.hs-error-msg').should('be.visible');
            //check for error mesage next to submit button
            cy.get('.hs-main-font-element').should('be.visible');

        });

        it('Form Test - Missing First Name', () => {        
            //set the viewport to a mobile device preset
            cy.viewport('iphone-5');
    
            //visit the site to test
            cy.visit('https://ultranauts.co/lets-talk/');  
            //input last name
            cy.get('#lastname-3d562b96-43d4-4ab1-bb1d-0482194836eb').type('Barnes');
            //input valid email
            cy.get('#email-3d562b96-43d4-4ab1-bb1d-0482194836eb').type('cbarnes@ultranauts.co');
            //select Other from dropdown menu
            cy.get('#what_are_you_interested_in_-3d562b96-43d4-4ab1-bb1d-0482194836eb').select('Other');
            //click submit button
            cy.get('.hs-button').click();
            //check for error message next to empty field
            cy.get('.hs-error-msg').should('be.visible');
            //check for error message next to submit button
            cy.get('.hs-main-font-element').should('be.visible');

        });
        
        it('Form Test - Missing Last Name', () => {        
            //set the viewport to a mobile device preset
            cy.viewport('iphone-5');
    
            //visit the site to test
            cy.visit('https://ultranauts.co/lets-talk/');  
            //input first name
            cy.get('#firstname-3d562b96-43d4-4ab1-bb1d-0482194836eb').type('Cash');
            //input valid email
            cy.get('#email-3d562b96-43d4-4ab1-bb1d-0482194836eb').type('cbarnes@ultranauts.co');
            //select Other from dropdown menu
            cy.get('#what_are_you_interested_in_-3d562b96-43d4-4ab1-bb1d-0482194836eb').select('Other');
            //click submit button
            cy.get('.hs-button').click();
            //check for error message next to empty field
            cy.get('.hs-error-msg').should('be.visible');
            //check for error message next to submit button
            cy.get('.hs-main-font-element').should('be.visible');

        });
                
        it('Form Test - Missing Dropdown Choice', () => {        
            //set the viewport to a mobile device preset
            cy.viewport('iphone-5');
    
            //visit the site to test
            cy.visit('https://ultranauts.co/lets-talk/');  
            //input first name
            cy.get('#firstname-3d562b96-43d4-4ab1-bb1d-0482194836eb').type('Cash');
            //input last name
            cy.get('#lastname-3d562b96-43d4-4ab1-bb1d-0482194836eb').type('Barnes');
            //input valid email
            cy.get('#email-3d562b96-43d4-4ab1-bb1d-0482194836eb').type('cbarnes@ultranauts.co');
            //click submit button
            cy.get('.hs-button').click();
            //check for error message next to dropdown menu
            cy.get('.hs-error-msg').should('be.visible');
            //check for error message next the submit button
            cy.get('.hs-main-font-element').should('be.visible');

        }); 
});