import React, { ChangeEvent } from "react";
import styles from "./Input.module.scss";
interface IInput {
  placeholder: string;
  value: string;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
function Input({ placeholder, value, required, onChange }: IInput) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
      className={styles.input}
      required={required}
    />
  );
}

export default Input;
