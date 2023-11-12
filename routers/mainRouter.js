const router = require('express').Router()
const { registerUser, getUser } = require('../controllars/userControllar')

router.post('/register', registerUser);
router.get('/get', getUser);

module.exports = router