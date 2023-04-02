const Router = require('express');
const AppController = require('../controllers/AppController');

const router = Router();

// home route
router.get("/", AppController.getHome);

module.exports = router;
