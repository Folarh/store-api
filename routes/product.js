const express = require("express");
const router = express.Router();
const { getAllProducts } = require("../controllers/products");

router.route("/").get(getAllProducts).post();
router.route("/:id").get().patch().delete();

module.exports = router;
