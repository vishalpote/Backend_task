describe("Get Data From MongoDB", () => {
  it("should return 200 status code", () => {
    cy.request("GET", "/").then(res => {
      cy.log("Response Body:", res.body);
      res.body.data.forEach((obj:string, index:number) => {
        const jsonString = JSON.stringify(obj, null, 2);
        cy.log(`Object ${index + 1}:`, jsonString);
      });
      expect(res.status).to.eq(200);

    });
  });
});


