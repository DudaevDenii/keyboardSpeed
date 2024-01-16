import React from "react";
import styles from "./Welcome.module.scss";
import Button from "../../UI/Button/Button";
import { useNavigate } from "react-router-dom";
function Welcome() {
  const navigate = useNavigate();
  return (
    <div className={styles.modalWelcome}>
      <h1>Welcome!</h1>
      <h3>How good do you type? Let`s try!</h3>
      <Button onClick={() => navigate("/keyboard")}>Start</Button>
    </div>
  );
}

export default Welcome;
