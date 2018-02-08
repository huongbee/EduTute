import { toUnicode } from "punycode";

const mongoose = require("mongoose")
const Schema = mongoose.Schema

//nhóm môn học: chuyên đề | cơ bản | nâng cao
const GroupCourseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    course: {
        type: Schema.Types.ObjectId, ref: 'Course',
        required: true
    }, //belongsTo
    subCourses: [{
        type: Schema.Types.ObjectId, ref: 'SubCourse'
    }], //hasMany
    position: {
        type: Number,
        default: 0
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

const GroupCourse = mongoose.model('GroupCourse', GroupCourseSchema)
module.exports = GroupCourse