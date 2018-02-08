
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ReCommentsSchema = new Schema({

    subCourse: {
        type: Schema.Types.ObjectId, ref: 'Comments',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId, ref: 'Users',
        required: true
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

const ReComments = mongoose.model('ReComments', ReCommentsSchema)
module.exports = ReComments