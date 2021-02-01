const express = require('express')

const router = express.Router()

const newsletterController = require('../controllers/newsletter')
router.get('/',newsletterController.readAll);

router.post('/',newsletterController.create);

module.exports = router;