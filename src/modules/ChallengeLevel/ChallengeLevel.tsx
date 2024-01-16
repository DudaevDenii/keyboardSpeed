import React from "react";
import KeyboardAnimation from "../../components/KeyboardAnimation/KeyboardAnimation";
import KeyboardText from "../../components/KeyboardText/KeyboardText";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Registration from "../../components/Registration/Registration";
import LevelShow from "../../components/LevelShow/LevelShow";

function ChallengeLevel() {
  const auth = useSelector((state: RootState) => state.app.auth);
  return (
    <div>
      {auth.name ? (
        <>
          <LevelShow />
          <KeyboardText />
          <KeyboardAnimation />
        </>
      ) : (
        <>
          <Registration />
        </>
      )}
    </div>
  );
}

export default ChallengeLevel;
