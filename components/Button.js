import React from "react";
import styles from "./Button.module.css"; // Assuming you use CSS Modules

function Button(props) {
  let theme = "";
  let ButtonStyle = {
    height: "30px",
    width: "80px",
    textAlign: "center",
  };
  if (props.theme === "flare") {
    theme = styles.flare;
  } else if (props.theme === "minimal") {
    theme = styles.minimal;
  } else {
    theme = styles.default;
  }

  return (
    <button className={theme} style={ButtonStyle}>
      {props.text}
    </button>
  );
}

export default Button;
