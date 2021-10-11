const router = require("express").Router();
const controller = require('./../controllers/Vacancy')
const auth = require('./../middlewares/auth');

router.get('/vacancies', auth.authentication, auth.authorization(["user", "hrd"]),controller.getAll);
router.get('/vacancies/:id', auth.authentication, auth.authorization(["user", "hrd"]), controller.getId);
router.post('/vacancies', auth.authentication, auth.authorization(["hrd"]), controller.post);
router.delete('/vacancies/:id', auth.authentication, auth.authorization(["hrd"]), controller.deleteId)

module.exports = router;