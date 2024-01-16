import React from "react";
import styles from "./Button.module.scss";
interface IButton {
  children: React.ReactNode;
  outline?: boolean;
  width?: number;
  height?: number;
  onClick?: () => void;
}
function Button({ children, outline, width, height, onClick }: IButton) {
  const buttonStyle = {
    width: width ? `${width}px` : "200px",
    height: height ? `${height}px` : "40px",
  };
  return (
    <button
      className={outline ? styles.outlineButton : styles.nonOutlineButton}
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
