import React, { useState, useRef } from 'react';
import Course from './Course';

const Home = ({ cart, setCart, courses, setcourses }) => {
  return (
    <div>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Available Courses
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Course
              key={course.id}
              course={course}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
