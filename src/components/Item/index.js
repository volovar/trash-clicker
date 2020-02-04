import React from "react";
import PropTypes from "prop-types";
import { useGameDispatch, useGameState } from "../../contexts/GameContext";
import { doDecreaseScore, doPurchaseItem } from "contexts/GameContext/actions";
import { disabledCss, itemCss } from "./item.styles";

const Item = ({ description, name, type, cost }) => {
    const { score, purchasedItems } = useGameState();
    const dispatch = useGameDispatch();
    const isDisabled = score <= cost;

    const buyItem = () => {
        dispatch(doPurchaseItem(type));
        dispatch(doDecreaseScore(cost));
    };

    return (
        <li
            onClick={!isDisabled ? buyItem : undefined}
            css={[itemCss, isDisabled && disabledCss]}
            key={name}
        >
            <h3>{name}</h3>
            <span>{(cost / 100).toString()}</span>
            <p>{description}</p>
            <span>{purchasedItems[type]}</span>
        </li>
    );
};

export default Item;

Item.propTypes = {
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired,
    cost: PropTypes.number.isRequired
};
