const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../index');

it('Should return API information on root URL', async () => {
  const response = await supertest(app).get('/');
  expect(response.body.about).to.equal("Titanic API");
});
