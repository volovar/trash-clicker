var store = document.getElementById('js-item-store');
var items = document.getElementsByClassName('js-item');

var NPCs = require('./npc');
var NPCData = require('./data/npc-data');
var Player = require('./player');

// creating NPCs and adding them to a list
var raccoonNew = NPCs.createNew('raccoon');
var garbagePersonNew = NPCs.createNew('garbage_person');
var grouchNew = NPCs.createNew('grouch');
var npcList = [raccoonNew, garbagePersonNew, grouchNew];

// setting up the store
var NPCStore = {
    init: function () {
        npcList.forEach(function(npc) {
            var count = 0;
            var cost = (npc.value / 100).toString();

            var title = createElement('h3', npc.name, '', 'item-name');
            var price = createElement('span', cost, '', 'item-price');
            var description = createElement('p', npc.description, '', 'item-desc');
            var purchased = createElement('span', count, '', 'item-purchased');
            var li = createElement('li', '', npc.type, ['js-item', 'item', 'item-disabled']);

            li.appendChild(title);
            li.appendChild(price);
            li.appendChild(description);
            li.appendChild(purchased);
            store.appendChild(li);
        });

        for (var i = 1; i <= items.length; i++) {
            items[i - 1].addEventListener('click', function (e) {
                Player.purchaseNPC(this.dataset.itemType);
            });
        }
    },

    updatePurchaseCounts: function () {
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
    },

    updateItemAvailability: function () {
        // var listItems = document.getElementsByClassName('item');

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var itemType = item.dataset.itemType;

            if (Player.score >= NPCData[itemType].value) {
                for (var j = 0; j < items.length; j++) {
                    if (items[j].dataset.itemType === itemType) {
                        items[j].classList.remove('item-disabled');
                    }
                }
            } else {
                for (var j = 0; j < items.length; j++) {
                    if (items[i].dataset.itemType === itemType) {
                        items[i].classList.add('item-disabled');
                    }
                }
            }
        }
    }
}

// helper functions
//
// function for creating a new element. It takes an element name, the content in
// the element, a data attribute, a single class name or an array of class names
// and lastly an ID
function createElement (elem, elemContent, elemData, elemClass, elemId) {
    var newElem = document.createElement(elem);

    newElem.innerHTML = elemContent;

    if (elemData) {
        newElem.dataset.itemType = elemData;
    }

    if (elemId) {
        newElem.id = elemId;
    }

    if (elemClass) {
        if (Array.isArray(elemClass)) {
            for (var i = 1; i <= elemClass.length; i++) {
                newElem.className += ' ' + elemClass[i - 1];
            }
        } else {
            newElem.className = elemClass;
        }
    }

    return newElem;
}

module.exports = NPCStore;