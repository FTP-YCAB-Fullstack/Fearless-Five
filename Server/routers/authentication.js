const router = require('express').Router();
const controller = require('./../controllers/User')

router.post('/login', controller.Login)

module.exports = router