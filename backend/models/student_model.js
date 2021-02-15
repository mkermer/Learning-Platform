const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const studentSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    studentName: { type: String, required: true },
    password: { type: String, required: true },
    description: { type: String },
    subHeader: { type: String },
    contact: { type: String },
    image: { type: String },
    interests: [],
    type: { type: String }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;