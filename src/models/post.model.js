import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    title :{
        type : String,
        unique: true,
        required:true,
    },
    content:{
        type : String,
        unique : true,
        required: true,
    },
    author:{
        type : String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})


export const Post = mongoose.model("Post",PostSchema);