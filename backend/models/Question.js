const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    text: String,
    answers: [String],
    correctIndex: Number,
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    objectId: {
        type: mongoose.Schema.Types.ObjectId
    }
});

questionSchema.pre('save', function () {
    this.objectId = this._id;
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;