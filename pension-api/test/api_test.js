const app = require('../app');
const request = require('supertest');
const should = require('should');

//TODO Tests pass but hang afterward
// could be because of using end().
// promises mean that we probably cant be using end();

// test bad request
describe("GET /", () => {
  it("should respond 400 and error message in JSON", (done) => {
    request(app)
      .get("/")
      .set('Accept', 'application/json')
      .expect(400, { message: 'Bad request.' }, done);
  });
});


describe("GET /api", () => {
  //EMPLOYEE
  describe("/employee", () => {
    describe("/ssn", () => {
      it("should respond with 200 and an employee in JSON", (done) => {
        request(app)
          .get("/api/employee/123-45-6789")
          .set('Accept', 'application/json')
          .expect(200)
          .expect('Content-type', /json/)
          .end(function(err, res) {
            res.status.should.equal(200);
            res.body.data.ssn.should.equal("123-45-6789");
            res.body.data.firstname.should.equal("Tom")
            res.body.error.should.equal(false);
            done();
          });
        });
      });

      it("should respond with 404 to request with bad ssn", (done) => {
        request(app)
          .get("/api/employee/123")
          .set('Accept', 'application/json')
          .expect(404)
          .expect("Content-type", /json/)
          .end(function(err, res) {
            res.status.should.equal(404);
            res.body.error.should.equal(true);
            done();
          });

    });
  });

  //EMPLOYMENT
  describe("/employment", () => {
    describe("/ssn", () => {
      it("should return 200 and a list of all employments with the ssn in JSON", (done) => {
        request(app)
          .get("/api/employment/123-45-6789")
          .set("Accept", 'application/json')
          .expect(200)
          .expect("Content-type", /json/)
          .end(function(err, res) {
            res.status.should.equal(200);
            res.body.data.length.should.equal(2);
            res.body.data[0].ssn.should.equal("123-45-6789");
            res.body.error.should.equal(false);
            done();
          });
      });

      it("should return 404 to request with bad ssn", (done) => {
        request(app)
          .get("/api/employment/123")
          .set("Accept", "application/json")
          .expect(404)
          .expect("Content-type", /json/)
          .end(function(err, res) {
            res.status.should.equal(404);
            res.body.error.should.equal(true);
            done();
          });
      });
    });
  });
});
