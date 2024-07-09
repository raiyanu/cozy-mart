import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const { id, image, name, description, price, stock, ratings, sales, tags } =
    product;

  const formattedPrice = (parseFloat(price.toFixed(2)) + 200).toLocaleString(
    "en-IN"
  );

  return (
    <div className={styles.card} key={id + Math.random() * 1000}>
      <img className={styles.image} src={image} alt={`/${name}`} />
      <div className={styles.content}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.priceStock}>
          <span className={styles.price}>₹{formattedPrice}</span>
          <span className={styles.stock}>{stock} in stock</span>
        </div>
        <div className={styles.ratings}>
          <span className={styles.starIcon}>&#9733;</span>
          <span className={styles.ratingText}>
            {ratings.average.toFixed(1)} ({ratings.count} reviews)
          </span>
        </div>
        <div className={styles.salesAction}>
          <span className={styles.salesText}>{sales.totalSold} sold</span>
          <button className={styles.addToCartButton}>
            <span className={styles.cartIcon}>&#128722;</span>
            Add to Cart
          </button>
        </div>
      </div>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
