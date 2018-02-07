const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CourseSchema = new Schema({

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
    subCourses: [{
        type: Schema.Types.ObjectId, ref: 'SubCourse'
    }], //array => hasMany
    groupCourses: [{
        type: Schema.Types.ObjectId, ref: 'GroupCourse'
    }],
    image: {
        type: String
    },
    backgroundImage: {
        type: String
    },
    link: {
        type: String
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

const CourseSchema = mongoose.model('CourseSchema', CourseSchema)
module.exports = CourseSchema