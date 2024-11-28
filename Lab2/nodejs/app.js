const { app } = require("@azure/functions");

const sayHelloWorld = async (request, context) => {
  return { body: "Hello, World!" };
};

app.http("hello", {
  methods: ["POST", "GET"],
  handler: sayHelloWorld,
});

module.exports = sayHelloWorld;
