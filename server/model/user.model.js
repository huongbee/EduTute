const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UsersSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    subCourses: [
        { type: Schema.Types.ObjectId, ref: 'SubCourse', default: null, required: false }
    ],
    comments: [{
        type: Schema.Types.ObjectId, ref: 'Comments'
    }], //hasMany
    reComments: [{
        type: Schema.Types.ObjectId, ref: 'ReComments'
    }], //hasMany
    birthdate: {
        type: Date
    },
    gender: {
        type: String
    },
    avatar: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    isTeacher: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
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

const Users = mongoose.model('Users', UsersSchema)
module.exports = Users