const router = require('express').Router();
let Course = require('../models/course_model');

router.route('/').get(async (req, res) => {
    try {
        const course = await Course.find();
        res.json(course);
    } catch (err) {
        res.json('Error:' + err);
    }
})



router.route('/add').post(async (req, res) => {


    const student = req.body.student;
    const instructor = req.body.instructor;
    const course = req.body.course;
    const category = req.body.category;
    const timestamp = req.body.timestamp;


    const newCourse = new Course({
        student,
        instructor,
        course,
        category,
        timestamp
    });

    try {
        const savedCourse = await newCourse.save();
        res.json(savedCourse);
    } catch (err) {
        res.json('Error: ' + err);
    }
})

router.route('/update/:id').post((req, res) => {
    Course.findById(req.params.id)
        .then(course => {
            course.student = req.body.student;
            course.instructor = req.body.instructor;
            course.course = req.body.course;
            course.category = req.body.category;
            course.timestamp = req.body.timestamp;


            course.save()
                .then(() => res.json(course))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;