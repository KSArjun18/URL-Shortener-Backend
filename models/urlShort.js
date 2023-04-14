const mongoose = require('mongoose');

const UrlSchema = mongoose.Schema({
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        unique : true
    },
    clickCount: {
        type: Number,
        default : 0
    },
    userId : {
        type : String,
        required: true
    }
})

const UrlModel = mongoose.model('urlshort', UrlSchema);

module.exports = { UrlModel };