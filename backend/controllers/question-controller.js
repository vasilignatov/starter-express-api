const router = require('express').Router();
const questionService = require('../services/question-service');

// Create Question
router.post('/Question', async (req, res) => {
    try {
        const question = await questionService.createQst(req.body);
        res.json(question);
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
});

// Get Questions By QuizId
router.get('/Question', async (req, res) => {
    const { quiz, owner } = JSON.parse(req.query.where);
    try {
        if (quiz && owner) {
            const questions = await questionService.getQuestionsByQuizId(quiz.objectId, owner.objectId);
            return res.json(questions);
        }
        res.status(500);
    } catch (error) {
        console.log(error);
        res.status(404).json(error);
    }
});



module.exports = router;