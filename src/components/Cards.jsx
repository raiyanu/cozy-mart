import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
function Cards() {
  return (
    <div
    className={styles.cardContainer}
      style={{
        // display: "grid",
        // gridTemplateAreas: `
        //   'card1 card1 card2'
        //   'card1 card1 card3'
        // `,

      }}
    >
      <Card
        gridArea="card1"
        custom={{
          row: 2,
          column: 2,
          style: {
            backgroundColor: "#ce091d",
            color: "white",
            gridArea: "card1",
          },
          tag: "Latest Collection",
          heading: "Nike Crimson Shoes",
          list: [
            "Quality product",
            "Material Design",
            "Comfortable",
            "Durable",
          ],
          forwardLink: {
            href: "/chairs",
            label: "View all chairs",
          },
          image: {
            imgSrc: "shoe.jpg",
            alt: "shoe",
          },
        }}
      />
       <Card
        gridArea="card1"
        custom={{
          row: 2,
          column: 2,
          style: {
            backgroundColor: "white",
            color: "white",
          },
          tag: "Latest Collection",
          heading: "Rolex Watch",
          list: [
            "Quality product",
            "Material Design",
            "Comfortable",
            "Durable",
          ],
          forwardLink: {
            href: "/chairs",
            label: "View all chairs",
          },
          image: {
            imgSrc: "watch.jpg",
            alt: "shoe",
          },
        }}
      />
       <Card
        gridArea="card1"
        custom={{
          row: 2,
          column: 2,
          style: {
            backgroundColor: "white",
            color: "white",
          },
          tag: "Latest Collection",
          heading: "Rolex Watch",
          list: [
            "Quality product",
            "Material Design",
            "Comfortable",
            "Durable",
          ],
          forwardLink: {
            href: "/chairs",
            label: "View all chairs",
          },
          image: {
            imgSrc: "watch.jpg",
            alt: "shoe",
          },
        }}
      />
      <Card
        gridArea="card1"
        custom={{
          row: 2,
          column: 2,
          style: {
            backgroundColor: "#ce091d",
            color: "white",
            gridArea: "card1",
          },
          tag: "Latest Collection",
          heading: "Nike Crimson Shoes",
          list: [
            "Quality product",
            "Material Design",
            "Comfortable",
            "Durable",
          ],
          forwardLink: {
            href: "/chairs",
            label: "View all chairs",
          },
          image: {
            imgSrc: "shoe.jpg",
            alt: "shoe",
          },
        }}
      />
      
     
   
    </div>
  );
}

export default Cards;
