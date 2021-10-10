const router = require('express').Router()

const authentication = require('./authentication');
const users = require('./userRoutes');
const perusahaan = require('./perusahaanRoutes')

router.use(authentication)
router.use(users)
router.use(perusahaan)

module.exports = router;