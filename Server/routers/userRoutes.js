const router = require('express').Router();
const controller = require('./../controllers/User');
const auth = require('./../middlewares/auth')

router.get('/users', auth.authentication, auth.authorization(['user']), controller.getProfile)

module.exports = router;