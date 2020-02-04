import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import { ItemTypes } from "enums";
import { gameReducer } from "./reducers";

const GameStateContext = createContext();
const GameDispatchContext = createContext();

const initialGameState = {
    name: "Player",
    clickValue: 1,
    purchasedItems: {
        [ItemTypes.RACCOON]: 0,
        [ItemTypes.GARBAGE_PERSON]: 0,
        [ItemTypes.GROUCH]: 0
    },
    score: 0
};

const GameProvider = ({ children }) => {
    const [state, setState] = useReducer(gameReducer, initialGameState);

    return (
        <GameStateContext.Provider value={state}>
            <GameDispatchContext.Provider value={setState}>
                {children}
            </GameDispatchContext.Provider>
        </GameStateContext.Provider>
    );
};

const useGameState = () => {
    const context = useContext(GameStateContext);

    if (typeof context === "undefined") {
        throw new Error("useGameState must be used with a GameProvider");
    }

    return context;
};

const useGameDispatch = () => {
    const context = useContext(GameDispatchContext);

    if (typeof context == "undefined") {
        throw new Error("useGameDispatch must be used with a GameProvider");
    }

    return context;
};

export { useGameDispatch, useGameState };
export default GameProvider;

GameProvider.propTypes = {
    children: PropTypes.node
};
