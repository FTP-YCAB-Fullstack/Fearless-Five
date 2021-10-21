const router = require("express").Router();
const controller = require("../controllers/Apply");
const auth = require("../middlewares/auth");

router.get("/applies", auth.authentication, auth.authorization(["user", "hrd"]), controller.getAll);
router.get("/applies/:_id", controller.getById);
router.post("/applies", auth.authentication, auth.authorization(["user"]), controller.post);
router.patch("/applies/:id", auth.authentication, auth.authorization(["hrd"]), controller.patch);
router.delete("/applies/:_id", auth.authentication, auth.authorization(["user", "hrd"]), controller.deleteId);

module.exports = router;