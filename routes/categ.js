var express = require('express');
var router = express.Router();

const maincontroller = require("../controller/category")

const usercontroller = require("../controller/user")

/* GET home page. */
router.get('/alldata', maincontroller.alldata);

router.post('/adddata', usercontroller.protect, maincontroller.adddata);

router.patch('/update/:id', usercontroller.protect, maincontroller.update);

router.delete('/delete/:id', usercontroller.protect, maincontroller.delete);

module.exports = router;