describe("Digital College", () => {
    it("Acessando Site", () => {
        cy.visit("https://example.cypress.io");
        cy.wait(500);
        cy.contains("Utilities").click();
        cy.wait(2000);
        cy.contains("Commands").click();
        cy.wait(500);
        cy.contains("Traversal").click();
    })
})