const express = require("express");
const helloRouter = require("../routes/hello.routes");

const app = express();

const PORT = 4000;

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use("/hello", helloRouter);

app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "SERVER STARTED SUCCESSFULLY!!!",
  });
});

module.exports = { app, PORT };
