import React, { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

export const useProducts = () => {
    return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Adding Products to Cart
    const addToCart = (product) => {
        setCart([...cart, { ...product, quantity: 1 }]);
        console.log(product); 
    };

    // When decrementing to zero 
    const updateCart = (newCart) => {
        setCart(newCart);
      };

    // Updating the Product Quantity 
    const updateProductQuantity = (productId, newQuantity) => {
        const updatedCart = cart.map(product => 
            product.id === productId ? { ...product, quantity: newQuantity } : product
            );
        setCart(updatedCart);
    };

    // Total Cart Items to show it in Navbar
    const totalCartItems = cart.reduce((total, product) => total + product.quantity, 0);

    const contextValue = {
        cart,
        addToCart,
        updateProductQuantity,
        updateCart,
        totalCartItems
    };

    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    );
};
