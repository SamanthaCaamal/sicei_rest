const supertest = require("supertest")
const app = require("../src/index")
const api = supertest(app)

test('GET students are returned as json', () =>{
    api
    .get('/api/students')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})