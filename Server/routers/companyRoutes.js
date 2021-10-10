const router = require("express").Router();
const controller = require("../controllers/Company");

router.get("/companies", controller.getall);
router.get("/companies/:_id", controller.getById);
router.post("/companies", controller.post);
router.delete('/companies/:_id', controller.deleteId)
// router.delete("companies/:_id", controller.deleteId);

module.exports = router;
