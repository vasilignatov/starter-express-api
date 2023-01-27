const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
    title: String,
    topic: String,
    description: String,
    questionCount: Number,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    objectId: {
        type: mongoose.Schema.Types.ObjectId
    }
}, {
    timestamps: { createdAt: true, updatedAt: false }
});

quizSchema.pre('save', function () {
    this.objectId = this._id;
});


const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;