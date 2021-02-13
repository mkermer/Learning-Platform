const getLatestUserData = require('../routes/verification');
const sum = require('../routes/verification')

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
    expect(getLatestUserData(array)).toBe({
        username: "DOes",
        password: "DOes",
        id: 3
    })
})
