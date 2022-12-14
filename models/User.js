const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                
            }
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: thoughtSchema,
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'friend',
        }],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;