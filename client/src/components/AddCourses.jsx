import React, { useState } from 'react';

const AddCourseForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');

  const AddCourse = async () => {
    const newCourse = {
      id: Date.now(),
      title: title,
      author: author,
      price: price,
    };
    try {
      const response = await fetch('http://localhost:3001/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCourse),
      });

      setTitle('');
      setAuthor('');
      setPrice('');
    } catch (error) {
      console.error('Failed to add course:', error);
      alert('An error occurred while adding the course.');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter course title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter author name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter course price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={AddCourse}>Add Course</button>
    </div>
  );
};

export default AddCourseForm;
