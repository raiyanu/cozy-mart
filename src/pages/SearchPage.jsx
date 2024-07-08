import React from "react";
import ProductContainer from "../components/ProductContainer";

function SearchPage() {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <h1 style={{ textAlign: "center", paddingBlock: "1rem" }}>
        Search Product
      </h1>
      {/* <div style={{display: "flex",justifyContent: "center",alignItems: "center",height: "150vh",background:"#123" }}>hey there </div> */}
      <ProductContainer />
    </div>
  );
}

export default SearchPage;
