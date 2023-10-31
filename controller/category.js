const CATEGORY = require("../model/category");

exports.alldata = async function (req, res, next) {
  try {
    const data = await CATEGORY.find()
    res.status(200).json({
      status: "Succesful",
      Message: "All used found",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "Umcessful",
      message: error.message
    })
  }
}

exports.adddata = async function (req, res, next) {
  try {
    if (!req.body.Name || !req.body.Image) {
      throw new Error("Please enter valid field")
    }
    const data = await CATEGORY.create(req.body)

    res.status(201).json({
      status: "Succesful",
      Message: "User Created",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "Unccesful",
      message: error.message
    })
  }
}

exports.update = async function (req, res, next) {
  try {
      const data = await CATEGORY.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json({
        status:"Succesful",
        Message: "User updatd",
        data: data
      })
  } catch (error) {
      res.status(404).json({
        status: "Uncessful",
        message: error.message
      })
  }
}

exports.delete = async function (req, res, next) {
  try {
    const data = await CATEGORY.findByIdAndDelete(req.params.id, req.body)
    res.status(200).json({
      status:"Succesful",
      message: "User deleted",
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }  
}
