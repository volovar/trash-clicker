import React from "react";
import { useGameState } from "../../contexts/GameContext";

const InfoPanel = () => {
    const { score } = useGameState();

    return (
        <div>
            <h1>{score}</h1>
        </div>
    );
};

export default InfoPanel;
