import React from "react";
import Item from "../Item";
import { listCss, shopCss } from "./item-shop.styles";

import { itemData } from "../../data/itemData";

var items = document.getElementsByClassName("js-item");

var NPCData = require("../../data/itemData");
var Player = require("../../../app/player");

const ItemShop = () => {
    const updatePurchaseCounts = function() {
        for (var i = 0; i < items.length; i++) {
            // var children = items[i].children;
            // console.log(items[i].children);
            // var child;
            // var type = items[i].dataset.itemType;
            // console.log(type);
            // var parent
            //
            // console.log(Player.purchases[type]);
            //
            // for (var j = 0; j < children.length; j++) {
            //     if (children[j].className = 'item-purchased') {
            //         console.log(children[j]);
            //         children[j].textnode = Player.purchases[type];
            //     }
            // }
            //
            // for (var i = 1; i <= itemList.length; i++) {
            //     var item = itemList[i - 1];
            //
            //     if (item.type == type) {
            //         if (scoreCounter >= item.price) {
            //             item.purchased += 1;
            //             child.innerHTML = item.purchased;
            //             scoreCounter -= item.price;
            //         }
            //     }
            // }
        }
        //
        //
        // if (Player.purchases.hasOwnProperty(npc.type)) {
        //     count = Player.purchases[npc.type];
        // } else {
        //     count = 0
        // }
    };

    const updateItemAvailability = function() {
        // var listItems = document.getElementsByClassName('item');

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var itemType = item.dataset.itemType;

            if (Player.score >= NPCData[itemType].value) {
                for (let j = 0; j < items.length; j++) {
                    if (items[j].dataset.itemType === itemType) {
                        items[j].classList.remove("item-disabled");
                    }
                }
            } else {
                for (let j = 0; j < items.length; j++) {
                    if (items[i].dataset.itemType === itemType) {
                        items[i].classList.add("item-disabled");
                    }
                }
            }
        }
    };

    return (
        <div css={shopCss}>
            <ul css={listCss}>
                {itemData.map(
                    ({ clickValue, description, name, type, cost }) => (
                        <Item
                            clickValue={clickValue}
                            description={description}
                            name={name}
                            key={name + "-" + type}
                            type={type}
                            cost={cost}
                        />
                    )
                )}
            </ul>
        </div>
    );
};

export default ItemShop;
