const router = require('express').Router()
const { registerUser,
     getUser,
     deleteUser,
     updateUser,
     getUserById,
} = require('../controllars/userControllar')
const { createProduct } = require('../controllars/productControllar')

router.post('/register', registerUser);
router.get('/get', getUser);
router.get('/get/:id', getUserById);
router.delete('/delete/:id', deleteUser);
router.put('/update/:id', updateUser);

router.post('/create/product', createProduct)

module.exports = router