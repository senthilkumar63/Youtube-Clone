const express = require('express')
const router = express.Router()
const cors = require('cors')
const {test, registerUser} = require('../controllers/authController')


router.use(
    cors({
        credentials: true,
        origin: true
    })
)

router.get('/', test)
router.get('/register', registerUser)

module.exports = router