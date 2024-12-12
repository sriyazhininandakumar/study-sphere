import React, { useEffect, useState } from "react";

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);

  
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0));
  }, [cart]);

  const remove = (id) => {
    console.log(id);
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div >
    
      <h1 className="text-4xl font-bold mb-6 text-center">Your Cart</h1>

     <div className="container mx-auto p-6">
      <div className="space-y-4">
        {cart.map((course) => (
          <div
            key={course.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-lg"
          >
            <div>
              <h3 className="text-lg font-bold">{course.title}</h3>
              <p className="text-gray-600">Author: {course.author}</p>
              <p className="text-gray-700 mt-2">Price: {course.price}/-</p>
            </div>

           
            <button
              onClick={() => remove(course.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div></div>

      
      <div className="container mx-auto p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Total</span>
          <span className="font-bold">{total}/-</span>
        </div>

       
        
      </div>
    </div>
  );
};

export default Cart;
