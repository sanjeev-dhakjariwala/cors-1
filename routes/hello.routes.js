const router = require("express").Router();
const { helloController } = require("../controllers/hello.controller");

router.route("/").get(helloController);

module.exports = router;
