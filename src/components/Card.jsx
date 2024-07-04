import React from "react";
import styles from "./Card.module.css";
function Card(props) {
  return (
    <div
      className={styles.card}
      style={{
        height: props.custom.row === 2 ? "400px" : "200px",
        width: props.custom.column === 2 ? "400px" : "200px",
        backgroundColor: props.custom.style.backgroundColor,
        border: props.custom.style.backgroundColor === "white" ? "1px solid rgb(182, 182, 182)" : "",
      }}
    >
      <div className={styles.card_content}>
        <div>{props.custom.tag}</div>
        <h2>{props.custom.heading}</h2>
        <ul>
          {props.custom.list.map((item, index) => (
            <li key={index} className={styles.list_item}>
              {item}
            </li>
          ))}
        </ul>
        <a href={props.custom.forwardLink.href}>
          {props.custom.forwardLink.label}
        </a>
      </div>
      <div className={styles.image}>
        <img
          // src={import(`./assets/${props.custom.image.imgSrc}`)}
          src={props.custom.image.imgSrc}
          alt={props.custom.image.alt}
          width={props.custom.row === 2 ? 300 : 200}
          height={props.custom.column === 2 ? 300 : 200}
        />
      </div>
    </div>
  );
}

export default Card;
