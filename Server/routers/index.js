const router = require('express').Router()

const authentication = require('./authentication');
const users = require('./userRoutes');
const perusahaan = require('./companyRoutes');
const vacancy = require('./vacancyRoutes')
const apply = require('./applyRoutes');

router.use(authentication)
router.use(users)
router.use(perusahaan)
router.use(vacancy)
router.use(apply)

module.exports = router;