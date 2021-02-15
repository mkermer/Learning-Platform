const router = require('express').Router();
const axios = require('axios');
const { response } = require('express');
const express = require('express');
const app = express();
let Verification = require('../models/verification_model');
let Student = require('../models/student_model');
let Instructor = require('../models/instructor_model');





// const getLatestUserData = (arr) => {
//     let latestUserDataInput = arr.reduce(function (prev, current) {
//         if (+current.id > +prev.id) {
//             return current;
//         } else {
//             return prev;
//         }
//     });

//     return latestUserDataInput;
// }


// const correctStudent = (latestInput, student) => {
//     student.map(student => {
//         if (student.studentName === latestInput.username &&
//             student.password === latestInput.password) {
//             return student
//         }

//     })
// }

// const correctInstructor = (latestInput, instructor) => {
//     instructor.map(instructor => {
//         if (instructor.instructorName === latestInput.username &&
//             instructor.password === latestInput.password) {
//             return instructor
//         }
//     })

// }


// const incorrectStudent = (latestInput, student) => {

//     student.map(student => {
//         if (student.studentName !== latestInput.username &&
//             student.password !== latestInput.password) {
//             const res = 'Wrong login information';
//             return res
//         }
//     })
// }

// const incorrectInstructor = (latestInput, instructor) => {
//     instructor.map(instructor => {
//         if (instructor.instructorName !== latestInput.username &&
//             instructor.password !== latestInput.password) {
//             const res = 'Wrong login information';
//             return res

//         }
//     })
// }



async function verify(req, res) {
    try {


        const verification = await Verification.find();
        // getLatestUserData(verification)
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




// module.exports = getLatestUserData;

module.exports = router;

// module.exports = correctStudent;

// module.exports = correctInstructor;

// module.exports = incorrectStudent;

// module.exports = incorrectInstructor; 
