const jwt = require('../utils/jwtUtils');
const { JWT_SECRET } = require('../config/config')[process.env.NODE_ENV];

exports.auth = async function (req, res, next) {
    let token = req.headers['x-parse-session-token'];

    if (token) {
        try {
            const decoded = await jwt.verify(token, JWT_SECRET);
            req.user = decoded;
            return next();
        } catch (error) {
            res.status(401).json({ message: 'You are not authorized!' });
        }
    }

    next();
}

exports.isAuth = async function (req, res, next) {
    if (req.user) {
        return next();
    }
    res.status(401).json({ message: 'You are not authorized!' });
}

exports.isGuest = function (req, res, next) {
    if(req.user) {
        return next();
    }
    res.json({ok: true});
}