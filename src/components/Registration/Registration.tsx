import React, { useState } from "react";
import styles from "./Registration.module.scss";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { setStorage } from "../../store/appSlice/appSlice";
function Registration() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const dispatch = useDispatch();
  function submitName(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    localStorage.setItem("auth", JSON.stringify({ name, surname }));
    dispatch(setStorage());
  }
  return (
    <div className={styles.registration}>
      <div className={styles.modal}>
        <h2>Enter Your name and surname</h2>
        <form className={styles.inputWrap} onSubmit={(e) => submitName(e)}>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
