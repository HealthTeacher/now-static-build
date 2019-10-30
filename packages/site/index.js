const auth = require("static-auth");

module.exports = auth(
  "/",
  (user, password) => user === "foo" && password === "bar",
  { directory: __dirname + "/public" }
);
