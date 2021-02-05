const router = require('express').Router();
let Video = require('../models/videos_model');

router.route('/').get(async (req, res) => {
    try {
        const video = await Video.find();
        res.json(video);
    } catch (err) {
        res.json('Error:' + err);
    }
})



router.route('/add').post(async (req, res) => {
    const courseName = req.body.courseName;
    const category = req.body.category;
    const instructor = req.body.instructor;
    const url = req.body.url;




    const newVideo = new Video({
        courseName,
        category,
        instructor,
        url,
    });

    try {
        const savedVideo = await newVideo.save();
        res.json(savedVideo);
    } catch (err) {
        res.json('Error: ' + err);
    }
})

module.exports = router;
