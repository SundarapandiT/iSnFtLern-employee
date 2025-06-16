const express = require('express');
const { createUser, fetchUserById, SaveUserRegisteration,SaveOtpVerify, verifyOtp,UserLoginAuthenticate,UserForgotPassword,UserResetPassword } = require('../controllers/userController'); 

const router = express.Router();

router.post('/create', createUser);

router.get('/getUse/:id', fetchUserById);  
router.post('/UserRegisteration', SaveUserRegisteration); 
router.post('/EmailVerifyOtp', SaveOtpVerify);  
router.post('/verifyOtp', verifyOtp);
router.post('/UserLogin', UserLoginAuthenticate);
router.post('/forgotPassword', UserForgotPassword);
router.post('/resetPassowrd', UserResetPassword);

module.exports = router;
