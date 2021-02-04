const router = require('express').Router();
const axios = require('axios');
const { response } = require('express');
const express = require('express');
const app = express();
let Verification = require('../models/verification_model');
let Student = require('../models/student_model');
let Instructor = require('../models/instructor_model');



router.route('/').get(async (req, res) => {
    try {


        const verification = await Verification.find();
        var latestUserDataInput = verification.reduce(function (prev, current) {
            if (+current.id > +prev.id) {
                return current;
            } else {
                return prev;
            }
        });

        const student = await Student.find();

        student.map(student => {
            if (student.studentName === latestUserDataInput.username &&
                student.password === latestUserDataInput.password) {
                res.json(student)
            }

        })

        const instructor = await Instructor.find();

        instructor.map(instructor => {
            if (instructor.instructorName === latestUserDataInput.username &&
                instructor.password === latestUserDataInput.password) {
                res.json(instructor)
            }
        })

        student.map(student => {
            if (student.studentName !== latestUserDataInput.username &&
                student.password !== latestUserDataInput.password) {
                res.json('Wrong login information')
            }
        })

        instructor.map(instructor => {
            if (instructor.instructorName !== latestUserDataInput.username &&
                instructor.password !== latestUserDataInput.password) {
                res.json('Wrong login information')
            }
        })



    } catch (err) {
        res.json('Error:' + err);
    }
})



router.route('/add').post(async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;



    const newVerification = new Verification({
        username,
        password,
    });

    try {
        const savedVerification = await newVerification.save();
        res.json(savedVerification);
    } catch (err) {
        res.json('Error: ' + err);
    }
})






module.exports = router;