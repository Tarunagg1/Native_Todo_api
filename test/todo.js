const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');

const server = require('../index');

chai.should();
chai.use(chaiHttp);

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM0NTFiMzMxMjYzMDUyNDBjZjNhYTUiLCJuYW1lIjoidGFydXIiLCJlbWFpbCI6InRhcnVuQGdtYWlsLmNvbSIsImlhdCI6MTYyMzc2ODkzNCwiZXhwIjoxNjI0MzczNzM0fQ.eTJgycfGqW8dJnUmL9-8ACx3ZZLlQIs8fCmdfviy6v4"

describe('todo api',()=>{
    /**
     * Test the get route
     */

    describe('GET /api/todo', () => {
        it('it should GET all todo',(done)=>{
            chai.request(server)
            .get('/api/todo')
            .headers({'Authorization':token})
            .end((err,response) => {
                console.log(err);
                response.should.have.status(200);
                response.body.should.be.a('array');
                done();
            })
        })
    })
    
    /**
     * get todo route by id
     */
    
    /**
     * Test the post route
     */

    /**
     * Test the put route
     */

    /**
     * test the delete route
     */

    /**
     * test the 
     */
})



