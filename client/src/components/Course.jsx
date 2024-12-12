import React from 'react'

const Course = ({course,cart,setCart}) => {
    const addcart = () => {
          setCart([...cart, course]);
              };
    
      const removecart=()=>{
        setCart(cart.filter((c)=>c.id!==course.id));
      };
  return (
    <div>
           <div className="bg-white h-80 w-80 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
           <div className="p-4">
      <h3 className="text-2xl font-bold mb-2 text-gray-900 truncate">{course.title}</h3>
      <h4 text-gray-600 mb-2 truncate>{course.author}</h4>
      <h5 text-gray-800 font-semibold mb-2 truncate>Price: {course.price}/-</h5>
      {cart.includes(course)?
      <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600" onClick={removecart}>Remove from Cart</button>:
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500" onClick={addcart}>Add to Cart</button>

      }
    </div></div></div>
  )
}

export default Course;
