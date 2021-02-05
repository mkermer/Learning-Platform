const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const videoSchema = new Schema({
    courseName: { type: String },
    category: { type: String },
    instructor: { type: String },
    url: { type: String }
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;