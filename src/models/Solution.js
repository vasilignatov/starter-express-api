const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    total: {
        type: Number
    },
    correct: {
        type: Number,
    },
    objectId: {
        type: mongoose.Schema.Types.ObjectId
    },
});

solutionSchema.pre('save', function () {
    this.objectId = this._id;
});

const Solution = mongoose.model('Solution', solutionSchema);
module.exports = Solution;