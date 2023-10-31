const USER = require("../model/user");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.protect = async function (req, res, next) {
    try {
        console.log(req.headers.token);
        let token = req.headers.token

        if (!token) {
            throw new Error("Token not define")
        }

        var decoded = jwt.verify(token, 'shhhhh');

        console.log(decoded);
        const checkUser = await USER.findById(decoded.id)

        if (!checkUser) {
            throw new Error("user not found")
        }

        next()
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.signup = async function (req, res, next) {
    try {
        if (!req.body.Name || !req.body.Email || !req.body.Age || !req.body.Password) {
            throw new Error("Invalid Field")
        }
        req.body.Password = await bcrypt.hash(req.body.Password, 10)
        const data = await USER.create(req.body)
        res.status(201).json({
            status: "Succesful",
            Message: "User created",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            staus: "Unsuccesful",
            message: error.message
        })
    }
}

exports.login = async function (req, res, next) {
    try {
        const checkuser = await USER.findOne({ Email: req.body.Email })
        if (!checkuser) {
            throw new Error("Please enter valid field")
        }

        const checkpass = await bcrypt.compare(req.body.Password, checkuser.Password)
        if (!checkpass) {
            throw new Error("Please Enter valid password")
        }

        var token = jwt.sign({ id: checkuser._id }, 'shhhhh');

        res.status(200).json({
            staus: "Succesful",
            Message: "Login Succesful",
            token
        })
    } catch (error) {
        res.status(404).json({
            staus: "Uncessful",
            message: error.message
        })
    }
}

exports.alldata = async function (req, res, next) {
    try {
        const data = await USER.find()

        res.status(200).json({
            staus: "Succesful",
            Message: "All data found",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Uncessful",
            message: error.message
        })
    }
}

