const mongoose = require('mongoose')

const Schema = mongoose.Schema

const VideoSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    alias: {
        type: String,
        require: true
    },
    youtubeId: {
        type: String,
        require: true
    },
    chapter: {
        type: Schema.Types.ObjectId, ref: 'Chapter',
        required: true
    },
    position: {
        type: Number,
        default: 0
    },
    totalView: {
        type: Number,
        default: 0
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

const videos = mongoose.model('Videos', VideoSchema)
module.exports = videos