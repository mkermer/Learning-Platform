const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const videoSchema = new Schema({
    courseName: { type: String },
    category: { type: String },
    instructor: { type: String },
    url: { type: String },
    description: { type: String },
    videoName: { type: String },
    timestamp: { type: Number },
    avgRat: { type: Number }
});

const Video = mongoose.model('video', videoSchema);

module.exports = Video;