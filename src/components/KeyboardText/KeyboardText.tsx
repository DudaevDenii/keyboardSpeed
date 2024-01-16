import React, { useEffect } from "react";
import styles from "./KeyboardText.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { correct, nextLevel, nonCorrect } from "../../store/appSlice/appSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
function KeyboardText() {
  const appState = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (appState.typingText[appState.level].length === 0) {
      dispatch(nextLevel());
    }
  }, []);
  useEffect(() => {
    if (appState.typingText[appState.level][0] === appState.currentSymbol) {
      if (appState.typingText[appState.level].length === 1) {
        navigate("/congrats");
      }
      dispatch(correct());
    } else {
      if (!/^[a-zA-Z\s\p{P}]+$/u.test(appState.currentSymbol!)) {
        alert("Сhange your keyboard layout to English");
      } else {
        dispatch(nonCorrect());
      }
    }
  }, [appState.currentSymbol, appState.level, appState.typingText]);
  return (
    <div className={styles.text}>
      {appState.typingText[appState.level].split("").map((el: string) => (
        <React.Fragment key={uuidv4()}>{el}</React.Fragment>
      ))}
    </div>
  );
}

export default KeyboardText;
