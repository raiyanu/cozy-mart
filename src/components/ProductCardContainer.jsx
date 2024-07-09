import styles from "./ProductCardContainer.module.css";
import { useContext, useEffect, useRef } from "react";
import { ProductContext } from "../hooks/ProductProvider";
import ProductCard from "./ProductCard";

export default function ProductCardContainer() {
  const count = useRef(0);

  function add() {
    count.current += 1;
  }

  const { products } = useContext(ProductContext);

  useEffect(() => {
    console.log("Products:", products);
    console.log("Type of products:", typeof products);
  }, [products]);

  return (
    <div className={styles.ProductCardContainer}>
      <h1 style={{ textDecoration: "underline", fontFamily: "sans-serif" }}>
        Products
      </h1>
      {Object.keys(products).length > 0 ? (
        <ProductCardWrapper>
          {Object.keys(products).map((category) =>
            Object.keys(products[category]).map((subCategory) =>
              Object.keys(products[category][subCategory]).map((key) => {
                add();
                return (
                  <ProductCard
                    key={
                      products[category][subCategory][key] +
                      Math.random() * 1000
                    }
                    product={products[category][subCategory][key]}
                  />
                );
              })
            )
          )}
        </ProductCardWrapper>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export const ProductCardWrapper = ({ children }) => {
  return <div className={styles.ProductCardWrapper}>{children}</div>;
};
