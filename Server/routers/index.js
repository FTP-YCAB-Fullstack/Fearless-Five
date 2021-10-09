const router = require('express').Router()

const authentication = require('./authentication');
const users = require('./userRoutes');

router.use(authentication)
router.use(users)

module.exports = router;