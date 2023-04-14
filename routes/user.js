const express = require("express");

const { forgotPassword } = require("../controllers/auth/forgotPassword");
const { login } = require("../controllers/auth/Login");
const { passwordResetPage } = require("../controllers/auth/password-reset-page");
const  { register } = require("../controllers/auth/register");

const { authentication } = require("../middlewares/authentication1");
const router = express.Router();



// Authentication Route 
router.post("/register",register);
router.post("/login",login);
router.post("/forgot-password",forgotPassword);
router.post("/password-reset-page",authentication,passwordResetPage);





module.exports = router;
