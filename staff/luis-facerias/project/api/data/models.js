import { Schema, model, Types } from 'mongoose'

const { ObjectId } = Types

const user = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 1
    },
    email: {
        type: String,
        required: true,
        minLength: 6,
        unique: true
    },
    username:{
        type: String,
        required: true,
        minLength: 5,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    }
})

const User = model('User', user)

export {
    User
}