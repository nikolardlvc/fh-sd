const request = require("supertest");
const app = require("../app");
const chai = require("chai");
const expect = chai.expect;

describe("GET /", () => {
  it("should return status 200 and Hello, World! message", (done) => {
    request(app)
      .get("/")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.equal("Hello, World!");
        done();
      });
  });
});
