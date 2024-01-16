import React from "react";
import Certificate from "../../components/Certificate/Certificate";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Button from "../../UI/Button/Button";
import styles from "./CongratsLevel.module.scss";
import { nextLevel } from "../../store/appSlice/appSlice";
import { useNavigate } from "react-router-dom";
function Congrats() {
  const userData = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function goNext() {
    dispatch(nextLevel());
    navigate("/keyboard");
  }
  return (
    <div className={styles.modalWrap}>
      <div className={styles.modal}>
        <h2>Congratulations!</h2>
        <h3>Level {userData.level} Complited</h3>
        <h3>
          {isNaN(
            Math.round(
              ((userData.allCorrect -
                (userData.allNonCorrect - userData.allCorrect)) /
                userData.allCorrect) *
                100
            )
          )
            ? 0
            : Math.round(
                ((userData.allCorrect -
                  (userData.allNonCorrect - userData.allCorrect)) /
                  userData.allCorrect) *
                  100
              )}
          %
        </h3>
        <PDFDownloadLink
          document={
            <Certificate
              auth={userData.auth}
              level={userData.level}
              procent={
                isNaN(
                  Math.round(
                    ((userData.correct -
                      (userData.nonCorrect - userData.correct)) /
                      userData.correct) *
                      100
                  )
                )
                  ? 0
                  : Math.round(
                      ((userData.correct -
                        (userData.nonCorrect - userData.correct)) /
                        userData.correct) *
                        100
                    )
              }
            />
          }
          fileName="certificate.pdf"
        >
          <Button>Download Certificate</Button>
        </PDFDownloadLink>
        {userData.level === userData.typingText.length ? (
          <h2>You complited all levels!</h2>
        ) : (
          <Button outline onClick={goNext}>
            Next Level {userData.level + 1}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Congrats;
