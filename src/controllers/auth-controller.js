const router = require('express').Router();
const userService = require('../services/user-service');
const { COOKIE_NAME } = require('../config/config')[process.env.NODE_ENV];

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        await userService.register({ username, email, password });

        let { user, token } = await userService.login({ username, password });

        res.cookie(COOKIE_NAME, token);

        res.json({
            objectId: user._id,
            sessionToken: token,
            username: user.username
        });
    } catch (err) {
        res.json({
            type: 'error',
            message: 'Register error: ' + err
        });
    }
});

router.post('/login', async (req, res) => {
    let { username, password } = req.body;

    try {
        let { user, token } = await userService.login({ username, password });

        res.json({
            email: user.email,
            objectId: user._id,
            sessionToken: token,
            username: user.username
        });
    } catch (error) {
        res.json({
            type: 'error',
            message: 'Login error: ' + err
        });
    }

});

router.post('/logout', (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.json({ ok: true });
    req.head
});

module.exports = router;