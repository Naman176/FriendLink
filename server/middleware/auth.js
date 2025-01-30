const jwt = require('jsonwebtoken');
const { response_500, response_401, response_404 } = require('../utils/responseCodes');
const User = require('../models/userModel')

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.token  // becoz we have saved token in a cookie in key named token 
        if (!token) {
            return response_404(res, "No token in cookies")
        }

        let userId
        try {
            const { payload } = jwt.verify(token, process.env.JWT_SECRET)
            userId = payload.userId
        } catch (error) {
            return response_401(res, "Unauthorized : Invalid or Expired token")
        }
        
        const user = await User.findById(userId)
        .populate({path: "followers", select: "-password"})
        .populate("threads")
        .populate("replies")
        .populate("reposts")
        if(!user){
            return response_401(res, "Unauthorized: User not found")
        }
        req.user = user
        // console.log(req.user);

        next()
    } catch (error) {
        return response_500(res, "Unauthorized access", error.message)
    }
}

module.exports = auth