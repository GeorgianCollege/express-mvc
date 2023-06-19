const express = require('express');
const router = express.Router();

// controller instance
const authController = require('../Controllers/auth');

/*********************************** AUTHENTICATION ROUTES ***************************/

/* Process the login request */
router.post('/login', authController.ProcessLogin);

/* Process the register request */
router.post('/register', authController.ProcessRegister);

/* Process the logout request */
router.get('/logout', authController.ProcessLogout);

module.exports = router;