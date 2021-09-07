const express = require("express");
const router = express.Router();

const argoController = require("../controllers/argoController");

router.post("/addargo", argoController.create);
router.get("/", argoController.getAll);
router.get("*", argoController.error404);

module.exports = router;