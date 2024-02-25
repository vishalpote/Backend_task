describe("Delete from MongoDB",()=>{
    it("Should Delete ?",()=>{
        cy.request("DELETE", "/delete/65db3677e6d1fea0c29fe710").then(res => {
          expect(res.status).to.equal(200);
        });
    })
})