const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 2000;

app.use(cors());
app.use(express.json());


mongoose.connect(
    "mongodb+srv://user:user@cluster0.bhid2.mongodb.net/user?retryWrites=true&w=majority", { useNewUrlParser: true },
    () => console.log('connected to DB')
);

const studentRouter = require('./backend/routes/student');
const instructorRouter = require('./backend/routes/instructor');
const verificationRouter = require('./backend/routes/verification').router;
const videoRouter = require('./backend/routes/video');
const reviewRouter = require('./backend/routes/review');
const courseRouter = require('./backend/routes/course');


app.use('/course', courseRouter)
app.use('/review', reviewRouter)
app.use('/video', videoRouter)
app.use('/instructor', instructorRouter)
app.use('/student', studentRouter);
app.use('/verification', verificationRouter)


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});