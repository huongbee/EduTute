const mongoose = require("mongoose")
const Schema = mongoose.Schema
const { createToken } = require('../helpers/jwt')
const bcrypt = require('bcrypt')

const UsersSchema = new Schema({
    fullname: {
        type: String,
        required: true
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
    subCourses: [{
        type: Schema.Types.ObjectId,
        ref: 'SubCourse',
        default: null,
        required: false
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comments'
    }], //hasMany
    reComments: [{
        type: Schema.Types.ObjectId,
        ref: 'ReComments'
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

const UserModel = mongoose.model('Users', UsersSchema)

class User extends UserModel {
    async checkEmailExist(email) {
        const user = await User.findOne({ 'email': email })
        if (user) throw new Error('Email exits!!!!!!')
    }

    async signUp(fullname, email, birthdate, address, gender, phone, password) {
        await this.checkEmailExist(email)
        const pwHash = await bcrypt.hash(password, 10)
        const user = await new User({ fullname, email, birthdate, address, gender, phone, password: pwHash }).save()
        return this.userInfor(user)
    }

    async userInfor(userObj) {
        //console.log(userObj)
        const userInfo = userObj.toObject()
        await delete userInfo.password;
        const token = await createToken({ _id: userInfo._id });
        userInfo.token = token;
        return userInfo;
    }
    async signIn(email, password) {
        const user = await User.findOne({ email })
        if (!user) throw new Error("Cannot find email")
        const check = bcrypt.compareSync(password, user.password);
        console.log(check);
        if (!check) throw new Error('Password invalid!')
        return this.userInfor(user)
    }
}
module.exports = new User