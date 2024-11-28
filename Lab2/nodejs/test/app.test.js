const sayHelloWorld = require("../app");
const chai = require("chai");
const expect = chai.expect;

describe("GET /hello", () => {
  it("should return Hello, World! message", async () => {
    const res = await sayHelloWorld();
    expect(res.body).to.equal("Hello, World!");
  });
});
