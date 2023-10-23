module.exports = {
    development: {
        PORT: process.env.PORT || 3030,
        DB_CONNECTION_STRING: 'mongodb://localhost:27017/quiz',
        JWT_SECRET: '$2y$10$xzlJAyCJAfoaBZIez.I0EO3KZAuXr66Voh/YmIQrGnjKUN3/WOJSq',
        COOKIE_NAME: 'quiz_token',
        SALT_ROUNDS: 1
    },
    production: {
        PORT: process.env.PORT,
        DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
        JWT_SECRET: process.env.JWT_SECRET,
        COOKIE_NAME: process.env.COOKIE_NAME,
        SALT_ROUNDS: process.env.SALT_ROUNDS
    }
}