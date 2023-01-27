const Quiz = require('../models/Quiz');

// CRUD 
exports.create = (quizData) => Quiz.create(quizData);

exports.getAll = () => Quiz.find({}).lean();

exports.getMostRecent = () => Quiz.find({}).sort({createdAt: -1}).limit(1).lean();

exports.getQuiz = (objectId) => Quiz.findOne({ objectId }).populate('owner', 'username');

exports.updateQuiz = (objectId, newData) => Quiz.findOneAndUpdate({ objectId }, newData);

exports.deleteQuiz = (objectId) => Quiz.findOneAndDelete({ objectId });