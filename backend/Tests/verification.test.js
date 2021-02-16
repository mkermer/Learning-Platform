const getLatestUserData = require('../routes/verification').getLatestUserData;
const correctStudent = require('../routes/verification').correctStudent;
// const correctInstructor = require('../routes/verification');
// const incorrectStudent = require('../routes/verification');
// const incorrectInstructor = require('../routes/verification');

const array = [
    {
        username: "DO",
        password: "DO",
        id: 0
    },
    {
        username: "DOe",
        password: "DOe",
        id: 1
    },
    {
        username: "DOs",
        password: "DOs",
        id: 2
    },
    {
        username: "DOes",
        password: "DOes",
        id: 3
    },
]


test(('returns the object with the highest id'), () => {
    console.log(getLatestUserData(array));

    expect(getLatestUserData(array)).toEqual({
        username: "DOes",
        password: "DOes",
        id: 3
    })
})


const student = [
    {
        studentName: "DW",
        password: "password"
    },
    {
        password: "password",
        studentName: "Yuliya",

    }
]


const latestInput = {
    username: "Yuliya",
    password: "password"
}


test(('finds matching userdata of student'), () => {
    expect(correctStudent(latestInput, student)).toEqual({
        studentName: "Yuliya",
        password: "password",

    })
})



// const instructor = [
//     {
//         studentName: "DW",
//         password: "password"
//     },
//     {
//         studentName: "Yuliya",
//         password: "password"
//     }
// ]

// test(('finds matching userdata of instructor'), () => {
//     expect(correctInstructor(latestInput, instructor)).toBe({
//         instructorName: "Yuliya",
//         password: "password",

//     })
// })

// test(('finds mismatching userdata of instructor'), () => {
//     expect(incorrectStudent(latestInput, student)).toBe(
//         'Wrong login information'

//     )
// })


// test(('finds mismatching userdata of instructor'), () => {
//     expect(correctStudent(latestInput, instructor)).toBe(
//         'Wrong login information'

//     )
// })






