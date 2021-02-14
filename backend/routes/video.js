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
    const description = req.body.description;
    const timestamp = Number(req.body.timestamp);
    const videoName = req.body.videoName;
    const avgRat = Number(req.body.avgRat);

    const newVideo = new Video({
        courseName,
        category,
        instructor,
        url,
        timestamp,
        description,
        videoName,
        avgRat
    });

    try {
        const savedVideo = await newVideo.save();
        res.json(savedVideo);
    } catch (err) {
        res.json('Error: ' + err);
    }
})


router.route('/update/:id').post((req, res) => {
    Video.findById(req.params.id)
        .then(video => {
            video.courseName = req.body.courseName;
            video.category = req.body.category;
            video.videoName = req.body.videoName;
            video.instructor = req.body.instructor;
            video.url = req.body.url;
            video.timestamp = req.body.timestamp;
            video.description = req.body.description;
            video.avgRat = req.body.avgRat;

            video.save()
                .then(() => res.json(video))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/:id').delete((req, res) => {
    Video.findByIdAndDelete(req.params.id)
        .then(() => res.json('Video deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
