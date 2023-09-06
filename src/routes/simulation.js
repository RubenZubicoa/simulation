const express = require("express")
const router = express.Router()

const { simulation } = require("../controllers/simulation")

router.get("/", simulation)

module.exports = router;

