const router = require('express').Router();
let Review = require('../models/review_model');

router.route('/').get(async (req, res) => {
    try {
        const review = await Review.find();
        res.json(review);
    } catch (err) {
        res.json('Error:' + err);
    }
})



router.route('/add').post(async (req, res) => {
    const instructor = req.body.instructor;
    const student = req.body.student;
    const courseName = req.body.studentName;
    const text = req.body.text;
    const rating = Number(req.body.rating);
    const image = req.body.image;
    const timestamp = Number(req.body.timestamp)

    const newReview = new Review({
        instructor,
        student,
        courseName,
        text,
        rating,
        image,
        timestamp
    });

    try {
        const savedReview = await newReview.save();
        res.json(savedReview);
    } catch (err) {
        res.json('Error: ' + err);
    }
})


module.exports = router;