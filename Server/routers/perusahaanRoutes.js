const router = require("express").Router();
const controller = require("../controllers/Perusahaan");

router.get("/company", controller.getall);
router.get("/company/:_id", controller.getById);
router.delete("company/:_id", controller.deleteId);
router.post("/company", controller.post);

module.exports = router;
