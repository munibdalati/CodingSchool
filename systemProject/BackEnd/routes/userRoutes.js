const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// ----------------- get all users route -----------------
router.get('/users', userController.getAllUsers);
// ----------------- login route -----------------
router.post('/login', userController.loginUser);

// ----------------- forgot password route -----------------
router.post('/forgot-password', userController.forgotPassword);

// ----------------- reset password route -----------------
router.put('/reset-password/:resetToken', userController.resetPassword);


module.exports = router;


