import React, { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState({});

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("/products.json");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        console.log("Fetched data:", data);
        console.log("Data type:", typeof data);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext };
export default ProductProvider;
