import { ActionTypes } from "enums";

export const doPurchaseItem = type => ({
    actionType: ActionTypes.PURCHASE_ITEM,
    type
});

export const doDecreaseScore = decrement => ({
    actionType: ActionTypes.DECREASE_SCORE,
    decrement
});

export const doIncreaseScore = clickValue => ({
    increment: clickValue,
    actionType: ActionTypes.INCREASE_SCORE
});

export default {
    doDecreaseScore,
    doIncreaseScore,
    doPurchaseItem
};
