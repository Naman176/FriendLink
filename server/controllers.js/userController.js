const { response_500, response_200 } = require("../utils/responseCodes")
const User = require("../models/userModel")

exports.registerUser = (req, res) => {
    try {
        const {userName, email, password} = req.body;
        return response_200(res, "User registered Successfully", req.body)
    } catch (err) {
        return response_500(err,"Unable to register user",err.message)
    }
}