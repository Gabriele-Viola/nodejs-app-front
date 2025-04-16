const express= require('express')
const GamesController = require('../controllers/GamesControllers')
const router = express.Router()


router.get('/', GamesController.index)
router.get('/:slug', GamesController.show)


module.exports = router