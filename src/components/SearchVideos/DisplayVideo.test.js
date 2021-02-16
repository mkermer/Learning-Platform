import DisplayVideo from './DisplayVideo';

const averageRating = new DisplayVideo().averageRating;

const testarr = [
    {
        test: "",
        rating: 3
    },
    {
        test: "",
        rating: 3
    },
    {
        test: "",
        rating: 3
    },
    {
        test: "",
        rating: 3
    },

]




test(('finds matching userdata of student'), () => {
    expect(averageRating(testarr)).toBe(
        3
    )
})
