const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const reviewSchema = new Schema({
    instructor: { type: String },
    student: { type: String },
    courseName: { type: String },
    text: { type: String },
    rating: { type: Number },
    image: { type: String },
    timestamp: { type: Number },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;