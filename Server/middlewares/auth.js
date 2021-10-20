const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

exports.authentication = async (req, res, next) => {
    try {
        const {token} = req.headers;
        jwt.verify(token, process.env.JWT_KEY, (err, result) => {
            if (err) {
                res.status(401).json({
                    message: 'Unauthorized'
                })
            } else {
                req.user = result
                next()
            }
        })
    } catch(err) {
        console.log(error)
    }
}

exports.authorization = (roles) => {
    return async (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: 'Forbidden'
            })
        } else {
            next()
        }
    }
}