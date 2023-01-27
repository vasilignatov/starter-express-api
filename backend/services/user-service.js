const User = require('../models/User');
const jwt = require('../utils/jwtUtils');
const { JWT_SECRET } = require('../constants');

exports.register = ({ username, email, password }) => User.create({ username, email, password });

exports.login = async ({ username, password }) => {
    let user = await User.findByUsername(username);

    if (!user) {
        throw { message: 'Wrong Email or Passwors!' }
    }

    try {
        let isValid = await user.validatePassword(password);

        if (isValid) {

            let payload = {
                _id: user._id,
                email: user.email,
                username: user.username
            }

            let token = await jwt.sign(payload, JWT_SECRET);
            
            return { user, token };
        } else {
            throw {
                type: 'error',
                message: 'Wrong username or password!'
            };
        }

    } catch (err) {
        throw {
            type: 'error',
            message: err.message
        }
    }
}