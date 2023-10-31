const BLOG = require("../model/blog");

exports.alldata = async function (req, res, next) {
    try {
        const data = await BLOG.find().populate('category').populate('user')
        res.status(200).json({
            status: "Succesful",
            Message: "All used found",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Umcessful",
            Message: error.Message
        })
    }
}

exports.adddata = async function (req, res, next) {
    try {
        if (!req.body.title || !req.body.discription || !req.body.image) {
            throw new Error("Please enter valid field")
        }
        const data = await BLOG.create(req.body)
        res.status(201).json({
            status: "Succesful",
            Message: "User created",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Unsucessful",
            Message: error.Message
        })
    }
}

exports.update = async function (req, res, next) {
    const data = await BLOG.findByIdAndUpdate(req,params.id, req.body)
    try {
        res.status(200).json({
            status: "Succesful", 
            Message: "User updated",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Unsucessful",
            Message: error.Message
        })
    }
}

exports.delete = async function (req, res, next) {
    
    const data = await BLOG.findByIdAndDelete(req.params.id, req.body)
    try {
        res.status(200).json({
            status: "Succesful", 
            Message: "User Deleted",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Unsuccesful", 
            Message: error.Message
        })
    }
}

