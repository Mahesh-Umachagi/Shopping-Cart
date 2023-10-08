import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProducts } from "./ProductsContext";
import {useAuth} from "./AuthContext"
import { useNavigate } from "react-router-dom";

function Home() {
    const { addToCart, cart } = useProducts();
    const [products, setProducts] = useState([]);
    const auth = useAuth()
    const navigate = useNavigate()

    // Fetching products from the API
    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products/")
            .then((response) => {
                const products= response.data.map((product) => ({
                    ...product,
                    // Adding quantity as 1 intially
                    quantity: 1, 
                }));
                console.log(response);
                setProducts(products);
                
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    // Adding Products to Cart [Adding only once]
    const handleAddToCart = (product) => {
        const isProductInCart = cart.find((item) => item.id === product.id);
        if (!isProductInCart) {
            addToCart(product);
        } 
      };

      const handleToLogin = () =>{
        navigate('/login')
      }

    return (
    <div className="container mx-auto mt-10 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-3">
            {products.map((product) => (
                <div key={product.id} className="p-4 flex flex-col items-center">
                    <img src={product.image} alt={product.title} className="mb-2 w-28 h-28" />
                    <div className="font-semibold text-center mb-1">{product.title}</div>
                    <div className="text-center">${product.price}</div>
                    {/* If user not logged in cannot add to the cart */}
                    {auth.user ? (
                    <button className="bg-gray-800 p-3 rounded-md text-white mt-auto" onClick={() => handleAddToCart(product)}>
                     Add To Cart
                    </button>
                    ):(<button className="bg-gray-800 p-3 rounded-md text-white mt-auto" onClick={() => handleToLogin()}>
                    Add To Cart
                   </button>)}
                </div>
            ))}
        </div>
    </div>
 
    );
}

export default Home;
