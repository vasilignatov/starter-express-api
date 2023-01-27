const router = require('express').Router();
const authController = require('./controllers/auth-controller');
const quizController = require('./controllers/quiz-controller');
const questionController = require('./controllers/question-controller');
const solutionController = require('./controllers/solution-controller');

router.use('/users', authController);
router.use('/classes', quizController);
router.use('/classes', questionController);
router.use('/classes', solutionController);

module.exports = router;