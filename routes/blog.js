var express = require('express');
var router = express.Router();

const usercontroller = require("../controller/user")

const blogcontroller = require("../controller/blog")

/* GET home page. */
router.get('/alldata', blogcontroller.alldata);

router.post('/adddata', usercontroller.protect, blogcontroller.adddata);

router.post('/update', usercontroller.protect, blogcontroller.update);

router.post('/delete', usercontroller.protect, blogcontroller.delete);

module.exports = router;
