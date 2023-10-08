import React, { useState, useEffect } from "react";
import { useProducts } from "./ProductsContext";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";


function Cart() {
    const { cart, updateProductQuantity,updateCart} = useProducts();
    const [total, setTotal] = useState(0);
  
    // Incrementing Products Quantity by 1
    const increment = (productId) => {
        const product = cart.find(product => product.id === productId);
        const updatedQuantity = product.quantity + 1;
        updateProductQuantity(productId, updatedQuantity);
        console.log(cart.length+1);
    };
    
     // Decrementing Products Quantity by 1
    const decrement = (productId) => {
        const product = cart.find(product => product.id === productId);
        const updatedQuantity = product.quantity - 1;
    
        if (updatedQuantity >= 1) {
            updateProductQuantity(productId, updatedQuantity);
           
        } else if(updatedQuantity == 0) {
            // If quantity is less than zero, remove the item from the cart
            const updatedCart = cart.filter(product => product.id !== productId);
            updateCart(updatedCart);
        }
    };
    
    
    // Calculate total price whenever cart changes
    useEffect(() => {
        setTotal(cart.reduce((acc, product) => acc + product.price*product.quantity, 0));
    }, [cart]);

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-semibold mb-6">Your cart items</h1>
            <ul className="bg-white p-4 shadow-lg rounded-lg m-2">
                {cart.map((product) => (
                <li key={product.id} className="flex items-center justify-between border-b py-2">
                    <div className="flex items-center">
                        <img src={product.image} alt={product.title} className="w-12 h-12 object-cover mr-4" />
                        <div>
                            <div className="text-lg font-semibold">{product.title}</div>
                            <div className="text-gray-600">${product.price.toFixed(2)}</div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="bg-gray-800 text-white px-3 py-2 rounded-md" onClick={() => decrement(product.id)}>
                        <FiMinus />
                        </button>
                        <span className="text-xl">{product.quantity}</span>
                        <button className="bg-gray-800 text-white px-3 py-2 rounded-md" onClick={() => increment(product.id)}>
                        <FiPlus />
                        </button>
                    </div>
                </li>
                ))}
            </ul>

            <h2 className=" text-right m-4  text-lg font-semibold text-green-400">Total Amount: ${total.toFixed(2)}</h2>
                <div className=" flex justify-center fixed bottom-0 left-0 right-0">
                    <Link to="/">
                    <button className="bg-gray-800 text-white font-medium p-4 m-2 rounded-md">
                    Continue Shopping
                    </button>
                    </Link>
                    <Link to="/checkout">
                    <button className="bg-gray-800 text-white font-medium pt-4 pb-4 pl-8 pr-8 m-2 rounded-md">
                    Checkout
                    </button>
                    </Link> 
                </div>
           
        </div>
    );
}

export default Cart;
