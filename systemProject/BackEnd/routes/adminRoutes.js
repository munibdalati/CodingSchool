const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

// ----------------- get all users route -----------------
router.get('/login', adminController.getAllUsers);
// ----------------- login route -----------------
router.post('/login', adminController.loginUser);

// ----------------- signup route -----------------
router.post('/register', adminController.signupUser);

// ----------------- forgot password route -----------------
router.post('/forgot-password', adminController.forgotPassword);

// ----------------- reset password route -----------------
router.put('/reset-password/:resetToken', adminController.resetPassword);


module.exports = router;
