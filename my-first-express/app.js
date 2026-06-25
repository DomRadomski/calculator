const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));
app.get("/dom", (req, res) => res.send("Hello, Dom!"));

const PORT = 3000;
app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
