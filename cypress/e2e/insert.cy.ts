describe("Add Into MongoDb",()=>{
    it("Should Add Data Into Database",()=>{
        const data={
            name:"sagar sutar",
            email:"sagar@gmail.com",
            age:21
        }
        cy.request({
            method:"POST",
            url:"/",
            body:data
        })
        .then((res)=>{
            expect(res.status).to.eq(201);
        })
    })
})