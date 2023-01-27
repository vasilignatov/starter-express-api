module.exports = {
    development: {
        PORT: process.env.PORT || 3030,
        DB_CONNECTION_STRING: 'mongodb://localhost:27017/quiz',
        JWT_SECRET: '$2y$10$xzlJAyCJAfoaBZIez.I0EO3KZAuXr66Voh/YmIQrGnjKUN3/WOJSq',
        TOKEN_COOKIE_NAME: 'quiz_token'
    },
    production: {
        PORT: process.env.PORT || 3000,
        DB_CONNECTION_STRING: 'mongodb+srv://js-quiz-app:Bz4w7hEwUHg0MgB0@cluster0.fq8kles.mongodb.net/?retryWrites=true&w=majority',
        JWT_SECRET: '$2y$10$xzlJAyCJAfoaBZIez.I0EO3KZAuXr66Voh/YmIQrGnjKUN3/WOJSq',
        TOKEN_COOKIE_NAME: 'quiz_token'
    }
}