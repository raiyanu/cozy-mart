import ProductCardContainer from "./ProductCardContainer";
import SuggestSlider from "./SuggestSlider";
import ProductFilter from "./ProductFilter";
import styles from "./ProductContainer.module.css";

function ProductContainer() {
  return (
    <>
      <span>
        <center>Product Container</center>
      </span>

      <div className={styles.ProductContainer}>
        <SuggestSlider />
        <ProductFilter />
        <ProductCardContainer />
      </div>
    </>
  );
}

export default ProductContainer;
