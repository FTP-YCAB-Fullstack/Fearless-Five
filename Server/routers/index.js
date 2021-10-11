const router = require('express').Router()

const authentication = require('./authentication');
const users = require('./userRoutes');
const perusahaan = require('./companyRoutes');
const vacancy = require('./vacancyRoutes')

router.use(authentication)
router.use(users)
router.use(perusahaan)
router.use(vacancy)

module.exports = router;