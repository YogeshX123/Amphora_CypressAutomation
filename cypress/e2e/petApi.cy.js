describe("Petstore API CRUD Tests", () => {
  
  before(() => {
    // Create unique numeric ID and store in Cypress.env
    cy.setPetId(Date.now());
  });

  it("Create a new pet (POST)", () => {
    cy.request("POST", "/pet", {
      id: Cypress.env("petId"),
      name: "doggie",
      status: "available"
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(Cypress.env("petId"));
    });
  });

  it("Fetch the newly created pet (GET)", () => {
    cy.request("GET", `/pet/${Cypress.env("petId")}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq("doggie");
    });
  });

  it("Update the pet (PUT)", () => {
    cy.request("PUT", "/pet", {
      id: Cypress.env("petId"),
      name: "doggie-updated",
      status: "sold"
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq("doggie-updated");
    });
  });

  it("Delete the pet (DELETE)", () => {
    cy.request("DELETE", `/pet/${Cypress.env("petId")}`).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Verify pet is deleted (GET)", () => {
    cy.request({
      method: "GET",
      url: `/pet/${Cypress.env("petId")}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

});
