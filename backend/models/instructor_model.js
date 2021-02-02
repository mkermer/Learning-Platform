const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const instructorSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    instructorName: { type: String, required: true },
    password: { type: String, required: true },
    description: { type: String },
    subHeader: { type: String },
    contact: { type: String },
    image: { type: String },
    score: { type: Number },
    expertise: [],
    courses: [],
    reviews: [],
    schedules: [],
});

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;