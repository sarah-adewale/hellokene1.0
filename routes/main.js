const express = require("express")
const router = express.Router()
const homeController = require('../controllers/home')
const portfolioCaseStudyController = require('../controllers/portfolio-case-study')


router.get('/', homeController.getIndex)
router.get('/portfolio-case-study', portfolioCaseStudyController.getPortfolioCaseStudy)

module.exports = router