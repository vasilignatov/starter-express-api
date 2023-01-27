const Question = require('../models/Question');
const { ObjectId } = require('mongoose').Types;

// CRUD
exports.createQst = (questionData) => Question.create(questionData);

exports.updateQst = (quiestionId, data) => Question.findByIdAndUpdate(quiestionId, data);

exports.deleteQst = (quiestionId, data) => Question.findByIdAndUpdate(quiestionId, data);

exports.getQuestionsByQuizId = (quizId, ownerId) =>{
    return Question.find({
        quiz: new ObjectId(quizId),
        owner: new ObjectId(ownerId)
    })
    .lean();
}

