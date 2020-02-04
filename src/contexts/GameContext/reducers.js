import { ActionTypes } from "enums";

export const gameReducer = (state, action) => {
    switch (action.actionType) {
        case ActionTypes.DECREASE_SCORE: {
            const { score } = state;
            const { decrement } = action;

            return { ...state, score: score - decrement };
        }
        case ActionTypes.INCREASE_SCORE: {
            const { score } = state;
            const { increment } = action;
            return { ...state, score: score + increment };
        }
        case ActionTypes.PURCHASE_ITEM: {
            const { purchasedItems } = state;
            const { type } = action;

            purchasedItems[type]++;

            return { ...state, purchasedItems };
        }
        case ActionTypes.UPDATE_CLICK_VALUE: {
            const { clickValue } = action;
            return { ...state, clickValue };
        }
        case ActionTypes.UPDATE_NAME: {
            const { name } = action;
            return { ...state, name };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.actionType}`);
        }
    }
};
