const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema (
    {
        postName:{
            type: String,
            required: true
        },
       postDescription:{
           type: String,
           required: true
       },
       
       link: {
           type: String,
           required: true
       },
       comments: {
           type: Array,
           required: false
       }
    }
)

const post = mongoose.model("Post", postSchema);

module.exports = post