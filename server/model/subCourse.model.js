const mongoose = require("mongoose")
const Schema = mongoose.Schema

const SubCourseSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    alias: {
        type: String,
        required: true,
        unique: true
    },
    course: {
        type: Schema.Types.ObjectId, ref: 'Course'
    }, //belongsTo
    teacher: {
        type: Schema.Types.ObjectId, ref: 'Users'
    },//belongsTo
    groupCourse: {
        type: Schema.Types.ObjectId, ref: 'Course'
    },//belongsTo
    chapters: [{
        type: Schema.Types.ObjectId, ref: 'Chapter'
    }], //hasMany
    comments: [{
        type: Schema.Types.ObjectId, ref: 'Comments'
    }], //hasMany
    image: {
        type: String,
        default: null
    },
    thumb: {
        type: String,
        default: null
    },
    videoIntro: {
        type: String,
        required: true
    },
    hot: {
        type: Boolean,
        default: false
    },
    forNewBie: {
        type: Boolean,
        default: false
    },
    totalVideo: {
        type: Number,
        default: 0
    },
    totalView: {
        type: Number,
        default: 0
    },
    summary: {
        type: Text,
        default: null
    },
    description: {
        type: Text,
        default: null
    },
    status: {
        type: Boolean,
        default: true
    },
    dateCreate: {
        type: Date,
        default: Date.now()
    }
})

const SubCourse = mongoose.model('SubCourse', SubCourseSchema)
module.exports = SubCourse