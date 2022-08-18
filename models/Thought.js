const { Schema, Types, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [{
            type: Schema.Types.ObjectId,
            ref: 'reaction',
        }],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

thoughtSchema.virtual('creationTime').get(function () {

})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;