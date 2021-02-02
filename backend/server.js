const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 2000;

app.use(cors());
app.use(express.json());


mongoose.connect(
    'mongodb+srv://user:user@cluster0.bhid2.mongodb.net/user?retryWrites=true&w=majority', { useNewUrlParser: true },
    () => console.log('connected to DB')
);

const studentRouter = require('./routes/student');
const instructorRouter = require('./routes/instructor')

app.use('/instructor', instructorRouter)
app.use('/student', studentRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});