


// describe("Get Specific Data From MongoDB", () => {
//   it("Should Get Data", () => {
//     cy.request("GET", "/65db3731e6d1fea0c29fe718").then(res => {
//       if (Array.isArray(res.body.data)) {
//         res.body.data.forEach((obj, index) => {
//           const data = JSON.stringify(obj, null, 2);
//           cy.log(`Object ${index + 1}:`, data);
//         });
//       } else {
//         const data = JSON.stringify(res.body.data, null, 2);
//         cy.log("Data:", data);
//       }
//       expect(res.status).to.equal(200);
//     });
//   });
// });



describe("Update The Existing Data",()=>{
    it("should update the existing data",()=>{
        const data={
            name:"sneha chaudhary",
            email:"sneha@gmail.com",
            age:22
        }

        cy.request({
          method: "PUT",
          url: "/update/65db40c8e6d1fea0c29fe74d",
          body: data,
        }).then(res => {
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