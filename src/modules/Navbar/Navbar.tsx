import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <NavLink className={styles.logo} to="/">
        KeyboardSpeed
      </NavLink>
      <div className={`${styles.navbar} ${isOpen ? styles.show : ""}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/keyboard">Play</NavLink>
      </div>
      <div
        className={styles.modalButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        ☰
      </div>
    </header>
  );
}

export default Navbar;
