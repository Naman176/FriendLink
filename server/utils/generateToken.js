const jwt = require('jsonwebtoken');

exports.generateToken = (object, expiresIn = '30d') => {
    secret = process.env.JWT_SECRET
    const token = jwt.sign({payload : object}, secret, {expiresIn})
    return token
}