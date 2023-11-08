const router = require('express').Router()
const { sendData } = require('../controllars/morganTest')

router.post('/morgan/test', sendData);

module.exports = router