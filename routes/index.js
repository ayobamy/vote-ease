const Router = require('express');
const AppController = require('../controllers/AppController');
const UserController = require('../controllers/UserController');

const router = Router();

// home route
router.get('/', AppController.getHome);

// user route
router.post('/users', UserController.createUser);

module.exports = router;
