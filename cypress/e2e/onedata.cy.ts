describe("Get Specific Data From MongoDB",()=>{
    it("Should Get Data",()=>{
        cy.request("GET", "/65db36eae6d1fea0c29fe714").then(res => {
          if (Array.isArray(res.body.data)) {
            res.body.data.forEach((obj, index) => {
              const data = JSON.stringify(obj, null, 2);
              cy.log(`Object ${index + 1}:`, data);
            });
          } else {
            const data = JSON.stringify(res.body.data, null, 2);
            cy.log("Data:", data);
          }
          expect(res.status).to.equal(200);
        });
    })
})