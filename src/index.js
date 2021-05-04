const expres = require("express");

const app = expres();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000);
