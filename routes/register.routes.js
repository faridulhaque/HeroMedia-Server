const express = require('express');
const registerUser = require('../controllers/register.controller');
const router = express.Router();

router.patch("/new", registerUser)


module.exports=router;