import React, { useEffect } from "react";
import styles from "./KeyboardAnimation.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { keyDown } from "../../store/appSlice/appSlice";
import { RootState } from "../../store/index";
function KeyboardAnimation() {
  const dispatch = useDispatch();
  const currentSymbol = useSelector(
    (state: RootState) => state.app.currentSymbol
  );
  useEffect(() => {
    window.addEventListener("keydown", (e: KeyboardEvent) =>
      dispatch(keyDown(e.key))
    );
    return () => {
      window.removeEventListener("keydown", (e: KeyboardEvent) =>
        dispatch(keyDown(e.key))
      );
    };
  }, []);
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  return (
    <div>
      {" "}
      <div className={styles.keyboard}>
        {rows.map((row, index) => (
          <div key={index} className={styles.row}>
            {row.map((key) => (
              <button
                key={key}
                className={
                  key.toUpperCase() === currentSymbol?.toUpperCase()
                    ? `${styles.key}, ${styles.active}`
                    : `${styles.key}`
                }
              >
                {key}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeyboardAnimation;
