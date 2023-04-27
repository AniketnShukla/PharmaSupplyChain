const express = require('express')
const path = require('path')
const router = express.Router()
const rawMaterialController = require('../controllers/rawMaterialController')
router.route('/')
// .get(rawMaterialController.getMeds)
.post(rawMaterialController.addNewRawMaterial)
// .patch(usersController.updateUser)
// .delete(usersController.deleteUser)

module.exports = router