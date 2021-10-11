const router = require('express').Router();
const controller = require('./../controllers/User')

router.post('/users/login', controller.Login)
router.post('/users/register',controller.Register)

module.exports = router