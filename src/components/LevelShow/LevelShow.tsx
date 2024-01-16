import React from "react";
import styles from "./LevelShow.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
function LevelShow() {
  const level = useSelector((state: RootState) => state.app.level);
  return (
    <div className={styles.level}>
      <div className={styles.levelBox}>{level}</div>Level
    </div>
  );
}

export default LevelShow;
