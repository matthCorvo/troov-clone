const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    category: String,
    adresse: String,
    content: String,
    created: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Post", postSchema);