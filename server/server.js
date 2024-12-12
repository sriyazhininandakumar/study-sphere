const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());  // Enable CORS for all routes

const PORT = process.env.PORT || 3001;

// Sample course data
let courses = [
        { "id": 1, "title": "Fundamentals of Java", "author": "William Hepburn", "price": "499" },
        { "id": 2, "title": "Fundamentals of C", "author": "James King", "price": "599" },
        { "id": 3, "title": "Data structures and algorithm", "author": "Tomas Tophill", "price": "399" },
        { "id": 4, "title": "100 Days of Code", "author": "Dr. Angela Yu", "price": "450" },
        { "id": 5, "title": "Python for Data Science", "author": "Jose Portilla", "price": "499" },
        { "id": 6, "title": "The Complete Data Science", "author": "Peirian Delvis", "price": "699" }
  ];

app.listen(PORT, () => {
    console.log(`Server Listening on PORT: ${PORT}`);
});

// GET - Fetch all courses
app.get("/courses", (request, response) => {
    response.send(courses);
});

// POST - Add a new course
app.post("/courses", (request, response) => {
    const newCourse = request.body;
    newCourse.id = courses.length + 1;  // Automatically assign an ID
    courses.push(newCourse);
    
    response.status(201).send(newCourse);
});
