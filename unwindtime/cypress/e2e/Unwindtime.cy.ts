

describe("UnwindTime", () => {
  it("Should check app basic functionality", async () => {
    cy.visit("http://localhost:3000/");
    cy.pause();
    cy.get('[name="email"]').type("123@123.com");
    cy.pause();
    cy.get('[name="password"]').type("123123");
    cy.pause();
    cy.get('[name="login"]').click();
    cy.pause();
    cy.get('[name="fortest"]').clear();
    cy.pause();
    cy.get('[name="fortest"]').type("blablabla");
    cy.pause();
    cy.get('[class="relaxButton"]').first().click();
    cy.pause();
    cy.get('[name="letsUnwindBtn"]').click();
    cy.pause();
    cy.get('[data-test="relaxButton"]').first().click();
    cy.pause();
    cy.get('[name="createUnwind"]').click();
    cy.pause();
    cy.get('[class="unwind-event-container"]').first().click();
    cy.pause();
    cy.get('[name="chatInput"]').type("TEST IS BORING");
    cy.pause();
    cy.get('[class="chat-submit-button"]').click();
    cy.pause();
    cy.get('[name="chatInput"]').type("OPPPSSSS...IT IS EX-CIT-ING!");
    cy.pause();
    cy.get('[class="chat-submit-button"]').click();
    cy.pause();
    cy.get('[name="toUnwindsBtn"]').click();
    cy.pause();
    cy.get('[data-test="deleteBtn"]').first().click();
    cy.pause();
    cy.get('[name="toDashboardBtn"]').click();
    cy.pause();
    cy.get('[class="relaxButton"]').first().click();
    cy.pause();
    cy.get('[name="logoutBtn"]').click();
  });
});


