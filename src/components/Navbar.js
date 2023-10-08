import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { useProducts } from "../components/ProductsContext";


function Navbar() {
  const { totalCartItems } = useProducts();

  return (
    <>
      <nav className="bg-gray-800 p-4 flex items-center justify-between sticky top-0">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white font-semibold text-lg">
            Home
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-white font-semibold text-lg mx-auto">
            Uttara Shop
          </div>
        </div>
        <div className="flex items-center space-x-4 relative"> 
          <Link
            to="/contact"
            className="text-white font-semibold text-lg">
            Contact
          </Link>
          <Link to="/cart" className="relative">
            <div>
              <FiShoppingCart className="text-white  text-lg font-bold" />
            </div>
            {totalCartItems > 0 && (
          <div className="absolute w-4 h-4 bg-red-500 rounded-full flex justify-center items-center -top-2 -right-2 text-white">
          {totalCartItems}
          </div>
          )}
          </Link>
          <Link to="/login">
          <FiUser className=" text-white text-lg font-bold"/>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
