import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import AddCourses from './components/AddCourses';
import { useState } from 'react';
function App() {
  const [cart, setCart] = useState([]);
  const [courses, setcourses] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/courses')
    .then((response)=>response.json())
    .then((json)=>setcourses(json))
  }, []);
 debugger
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                courses={courses}
                setcourses={setcourses}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route
            path="/addcourses"
            element={
              <AddCourses
                courses={courses}
                setcourses={setcourses}
                cart={cart}
                setCart={setCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
