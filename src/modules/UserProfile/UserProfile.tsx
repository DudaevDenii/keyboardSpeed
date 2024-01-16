import React from "react";
import styles from "./UserProfile.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
function UserProfile() {
  const userInfo = useSelector((state: RootState) => state.app);
  return (
    <div className={styles.modalWrap}>
      <div className={styles.modal}>
        <h2>
          {userInfo.auth.name} {userInfo.auth.surname}
        </h2>
        <div className={styles.rate}>
          <div className={styles.rateItems}>
            <h4>Correct</h4>
            <div className={styles.quantity}>{userInfo.allCorrect}</div>
          </div>
          <div className={styles.rateItems}>
            <h4>Not Correct</h4>
            <div className={styles.quantity}>{userInfo.allNonCorrect}</div>
          </div>
        </div>
        <div className={styles.range}>
          <input
            className={styles.rangeInput}
            type="range"
            readOnly
            value={
              isNaN(
                Math.round(
                  ((userInfo.correct -
                    (userInfo.nonCorrect - userInfo.correct)) /
                    userInfo.correct) *
                    100
                )
              )
                ? 0
                : Math.round(
                    ((userInfo.correct -
                      (userInfo.nonCorrect - userInfo.correct)) /
                      userInfo.correct) *
                      100
                  )
            }
          />
          {isNaN(
            Math.round(
              ((userInfo.correct - (userInfo.nonCorrect - userInfo.correct)) /
                userInfo.correct) *
                100
            )
          )
            ? 0
            : Math.round(
                ((userInfo.correct - (userInfo.nonCorrect - userInfo.correct)) /
                  userInfo.correct) *
                  100
              )}
          %
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
