
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CommentsSchema = new Schema({

    subCourse: {
        type: Schema.Types.ObjectId, ref: 'SubCourse'
    },
    user: {
        type: Schema.Types.ObjectId, ref: 'Users'
    },
    comment: {
        type: Text,
        required: true
    },
    status: {
        type: Boolean,
        default: true //1:show
    },
    dateCreate: {
        type: Date,
        default: Date.now()
    }
})

const Comments = mongoose.model('Comments', CommentsSchema)
module.exports = Comments