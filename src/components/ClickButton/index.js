import React from "react";
import { useGameDispatch, useGameState } from "../../contexts/GameContext";
// import { ActionTypes } from "enums";
import { doIncreaseScore } from "contexts/GameContext/actions";

const ClickButton = () => {
    const dispatch = useGameDispatch();
    const { clickValue } = useGameState();

    const handleClick = () => {
        dispatch(doIncreaseScore(clickValue));
    };

    return (
        <button onClick={handleClick} type="button">
            Click here
        </button>
    );
};

export default ClickButton;
