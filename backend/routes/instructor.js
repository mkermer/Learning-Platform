const router = require('express').Router();
let Instructor = require('../models/instructor_model');

router.route('/').get(async (req, res) => {
    try {
        const instructor = await Instructor.find();
        res.json(instructor);
    } catch (err) {
        res.json('Error:' + err);
    }
})



router.route('/add').post(async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const instructorName = req.body.instructorName;
    const password = req.body.password;
    const description = req.body.description;
    const subHeader = req.body.subHeader;
    const contact = req.body.contact;
    const image = req.body.image;
    const interests = req.body.interests;
    const type = req.body.type


    const newInstructor = new Instructor({
        firstName,
        lastName,
        instructorName,
        password,
        description,
        subHeader,
        contact,
        image,
        interests,
        type
    });

    try {
        const savedInstructor = await newInstructor.save();
        res.json(savedInstructor);
    } catch (err) {
        res.json('Error: ' + err);
    }
})

router.route('/update/:id').post((req, res) => {
    Instructor.findById(req.params.id)
        .then(instructor => {
            instructor.firstName = req.body.firstName;
            instructor.lastName = req.body.lastName;
            instructor.instructorName = req.body.instructorName;
            instructor.password = req.body.password;
            instructor.description = req.body.description;
            instructor.subHeader = req.body.subHeader;
            instructor.contact = req.body.contact;
            instructor.image = req.body.image;
            instructor.interests = req.body.interests;
            instructor.type = req.body.type;


            instructor.save()
                .then(() => res.json(instructor))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;