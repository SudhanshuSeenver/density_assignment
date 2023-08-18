import React from "react";
import styles from "./Button.module.css";

function Button({ primary, classBtn, children, ...props }) {
  let styleButton = styles.btn + `${classBtn ? " " + classBtn : ""}`;
  console.log(styleButton);

  if (primary) {
    styleButton = styleButton + " " + styles.primary;
  }
  console.log(styleButton);
  return (
    <button className={styleButton} {...props}>
      {children}
    </button>
  );
}

export default Button;
