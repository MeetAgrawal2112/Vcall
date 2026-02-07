import { Schema, model } from "mongoose";


const userSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    token: {
        type: String,
    }


})

const User = model("User", userSchema)

export { User }