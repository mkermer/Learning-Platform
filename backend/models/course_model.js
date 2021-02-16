const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const courseSchema = new Schema({
    instructor: { type: String },
    student: { type: String },
    course: { type: String },
    category: { type: String },
    timestamp: { type: String }
});

const Course = mongoose.model('course', courseSchema);

module.exports = Course;