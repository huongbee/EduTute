
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ChapterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subCourse: {
        type: Schema.Types.ObjectId, ref: 'SubCourse'
    },
    chapter: {
        type: Number,
        default: 0
    },
    videos: [{
        type: Schema.Types.ObjectId, ref: 'Videos'
    }],
    status: {
        type: Boolean,
        default: true
    },
    dateCreate: {
        type: Date,
        default: Date.now()
    }
})

const Chapter = mongoose.model('Chapter', ChapterSchema)
module.exports = Chapter