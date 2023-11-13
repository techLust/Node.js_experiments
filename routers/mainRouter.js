const router = require('express').Router()
const { registerUser,
     getUser,
     deleteUser,
     updateUser,
     getUserById,
     } = require('../controllars/userControllar')

router.post('/register', registerUser);
router.get('/get', getUser);
router.get('/get/:id', getUserById);
router.delete('/delete/:id', deleteUser);
router.put('/update/:id', updateUser);

module.exports = router