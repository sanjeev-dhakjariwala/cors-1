const helloController = (req, res) => {
  res.send({
    success: true,
    message: "Hello World from Controller!!!",
  });
};

module.exports = { helloController };
