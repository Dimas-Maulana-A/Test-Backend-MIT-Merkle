const express = require("express")
const router = express.Router()
const {
    controllerGetTamuFromTamu,
    controllerGetTamuFromAdmin,
    controllerAddTamu,
    controllerDeleteTamu
} = require('./tamu.controller')

const Authorize = require('./../../middleware/Auth')

router.get("/tamu", controllerGetTamuFromTamu)
router.post("/tamu", controllerAddTamu)

router.get("/admin/tamu", Authorize, controllerGetTamuFromAdmin)
router.delete("/admin/tamu/:id", Authorize, controllerDeleteTamu)

module.exports = router