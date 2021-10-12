const router = require('express').Router();
const controller = require('./../controllers/User');
const auth = require('./../middlewares/auth')

router.get('/users', auth.authentication, auth.authorization(['user', 'hrd']), controller.getProfile)
router.patch('/users', auth.authentication, auth.authorization(['user', 'hrd']), controller.patch)
module.exports = router;