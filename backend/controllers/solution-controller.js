const router = require('express').Router();
const { isGuest } = require('../middlewares/authMiddleware');
const solutionService = require('../services/solution-service');


// Get solutions: by userId, by quizID or 
router.get('/Solution', async (req, res) => {
    try {
        const owner = JSON.parse(req.query.where).owner || undefined;
        if (owner && owner.className == '_User') {
            const result = await solutionService.getSolutionsByUserId(owner.objectId);
            res.json(result);
        } else if (owner && owner.className == 'Quiz') {
            const result = await solutionService.getSolutionsByQuizId(owner.objectId);
            res.json(result);
        } else {
            const query = JSON.parse(req.query.where).$or;
            const result = await solutionService.getSolutionCount(query);
            console.log(result);
            res.json(result);
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});

// Submit solution
router.post('/Solution',
    isGuest,
    async (req, res) => {
        try {
            let { total, correct, owner, quiz } = req.body;
            quiz = quiz.objectId;

            await solutionService.create({ total, correct, owner, quiz });

            res.json({ ok: true });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
    });

module.exports = router;