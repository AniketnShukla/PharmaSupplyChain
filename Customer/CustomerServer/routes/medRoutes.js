const express = require('express')
const path = require('path')
const router = express.Router()
const medsController = require('../controllers/medsController')
router.route('/')
.get(medsController.getMeds)
.post(medsController.addNewMed)
// .patch(usersController.updateUser)
// .delete(usersController.deleteUser)

router.route('/get-med-info')
.post(medsController.getMedInfo)

module.exports = router