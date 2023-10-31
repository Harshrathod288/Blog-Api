var express = require('express');
var router = express.Router();
const usercontroller = require('../controller/user')

/* GET users listing. */
router.post('/signup', usercontroller.signup);

router.post('/login', usercontroller.login);

router.get('/alldata', usercontroller.protect, usercontroller.alldata);

module.exports = router;
