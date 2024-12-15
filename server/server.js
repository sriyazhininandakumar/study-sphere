const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Import Mongoose
const app = express();
app.use(express.json());
app.use(cors());


const dbURI = 'mongodb://localhost:27017/coursesDB'; // Replace with your MongoDB URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Failed to connect to MongoDB", err));

const courseSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: String
});


const Course = mongoose.model('Course', courseSchema);


app.get("/courses", async (req, res) => {
    try {
        const courses = await Course.find(); 
        res.send(courses);
    } catch (error) {
        res.status(500).send("Error retrieving courses.");
    }
});

app.post("/courses", async (req, res) => {
    try {
        const newCourse = new Course(req.body);
        await newCourse.save(); 
        res.status(201).send(newCourse);
    } catch (error) {
        res.status(400).send("Error saving the course.");
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server Listening on PORT: ${PORT}`);
});
