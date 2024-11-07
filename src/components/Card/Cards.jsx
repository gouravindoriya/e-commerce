import React, { useEffect, useState } from "react";
import Card from "./Card";
const Cards = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null); // State to handle errors

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json(); // Correctly converting to JSON
      setProducts(data);
    } catch (err) {
      console.error(err);
      setError(err.message); // Setting error message
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="">
        <h1 className="text-3xl text-center p-4 font-bold text-blue-600 mb-4">products</h1>
        


    <section className="grid gap-4 p-8 max-w-5xl w-full mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      
      
      {products.map((product) => (
        <Card key={product.id} product={product}/>

      ))}
    </section>
    // </section>
  );
};

export default Cards;
