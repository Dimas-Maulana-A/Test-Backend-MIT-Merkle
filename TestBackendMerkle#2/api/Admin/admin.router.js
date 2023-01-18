const express = require('express')
const router = express.Router()

const {
    controllerGetAdmin,
    controllerGetAdminById,
    controllerAddAdmin,
    controllerLogin
} = require('./admin.controller')

const Authorize = require('./../../middleware/Auth')

router.get('/admin', Authorize, controllerGetAdmin)
router.get('/admin/:id', Authorize, controllerGetAdminById)
router.post('/admin', controllerAddAdmin)
router.post('/login', controllerLogin)

module.exports = router