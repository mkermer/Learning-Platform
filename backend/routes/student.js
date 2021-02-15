const router = require('express').Router();
let Student = require('../models/student_model');

router.route('/').get(async (req, res) => {
    try {
        const student = await Student.find();
        res.json(student);
    } catch (err) {
        res.json('Error:' + err);
    }
})



router.route('/add').post(async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const studentName = req.body.studentName;
    const password = req.body.password;
    const description = req.body.description;
    const subHeader = req.body.subHeader;
    const contact = req.body.contact;
    const image = req.body.image;
    const interests = req.body.interests;
    const type = req.body.type;

    const newStudent = new Student({
        firstName,
        lastName,
        studentName,
        password,
        description,
        subHeader,
        contact,
        image,
        interests,
        type
    });

    try {
        const savedStudent = await newStudent.save();
        res.json(savedStudent);
    } catch (err) {
        res.json('Error: ' + err);
    }
})

router.route('/update/:id').post((req, res) => {
    Student.findById(req.params.id)
        .then(student => {
            student.firstName = req.body.firstName;
            student.lastName = req.body.lastName;
            student.studentName = req.body.studentName;
            student.password = req.body.password;
            student.description = req.body.description;
            student.subHeader = req.body.subHeader;
            student.contact = req.body.contact;
            student.image = req.body.image;
            student.interests = req.body.interests;
            student.type = req.body.type;

            student.save()
                .then(() => res.json(student))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;