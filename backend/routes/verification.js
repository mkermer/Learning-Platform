const router = require('express').Router();
const axios = require('axios');
const { response } = require('express');
const express = require('express');
const app = express();
let Verification = require('../models/verification_model');
let Student = require('../models/student_model');
let Instructor = require('../models/instructor_model');





const getLatestUserData = (arr) => {
    let latestUserDataInput = arr.reduce(function (prev, current) {
        if (+current.id > +prev.id) {
            return current;
        } else {
            return prev;
        }
    });

    return latestUserDataInput;
}


const correctStudent = (latestInput, student) => {


    var foundStudent = student.find(s => s.studentName === latestInput.username
        && s.password === latestInput.password)


    return foundStudent

}

const correctInstructor = (latestInput, instructor) => {
    var foundInstructor = instructor.find(i => i.instructorName === latestInput.username
        && i.password === latestInput.password)


    return foundInstructor

}


const incorrectStudent = (latestInput, student) => {
    var response = "";
    let didNotFoundStudent = student.find(s => s.studentName !== latestInput.username
        && s.password !== latestInput.password)

    if (didNotFoundStudent === undefined) {
        response = "Wrong login information"
    }
    return response;

}

const incorrectInstructor = (latestInput, instructor) => {
    var response = "";
    let didNotFoundInstructor = instructor.find(i => i.instructorName !== latestInput.username
        && i.password !== latestInput.password)

    if (didNotFoundInstructor === undefined) {
        response = "Wrong login information"
    }
    return response;

}



async function verify(req, res) {
    try {


        const verification = await Verification.find();
        var latestUserDataInput = getLatestUserData(verification)


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
}

router.route('/').get(verify)



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






module.exports = {
    correctStudent,
    getLatestUserData,
    correctInstructor,
    incorrectStudent,
    incorrectInstructor,
    router
}


