'use strict';

var game = document.getElementById('js-game');
var score = document.getElementById('js-score');
var scoreCounter = 0;
var pauseButton = document.getElementById('js-pause');
var paused;
var mainLoop;
var trashButton = document.getElementById('js-trash-button');
var store = document.getElementById('js-item-store');
var items = document.getElementsByClassName('js-item');
var itemList = [];

var Item = function (title, description, price, type) {
    this.title = title;
    this.desc = description;
    this.price = price;
    this.purchased = 0;
    this.type = type;
    this.speed = 1000;
};

Item.prototype = {
    increment: function () {
        this.purchased++;
    }
}

var raccoon = new Item('Raccoon', 'A feisty little creature that will get in your trash', 10, 'raccoon');
var garbagePerson = new Item('Garbage Person', 'This person comes to take your trash away', 100, 'gperson');
var oscar = new Item('Oscar, a grouch', 'A very unpleasant monster who wants to live in the trash', 500, 'grouch');

itemList.push(raccoon);
itemList.push(garbagePerson);
itemList.push(oscar);

startGame();

for (var i = 1; i <= itemList.length; i++) {
    var title = createElement('h3', itemList[i - 1].title, '', 'item-name');
    var price = createElement('span', itemList[i - 1].price, '', 'item-price');
    var description = createElement('p', itemList[i - 1].desc, '', 'item-desc');
    var purchased = createElement('span', itemList[i - 1].purchased, '', 'item-purchased');
    var li = createElement('li', '', itemList[i - 1].type, ['js-item', 'item', 'item-disabled']);

    li.appendChild(title);
    li.appendChild(price);
    li.appendChild(description);
    li.appendChild(purchased);
    store.appendChild(li);
}

for (var i = 1; i <= items.length; i++) {
    items[i - 1].addEventListener('click', function (e) {
        purchaseItem(e, this, this.dataset.itemType);
    });
}

trashButton.addEventListener('click', function (e) {
    e.preventDefault();
    scoreCounter += 1;
});

pauseButton.addEventListener('click', function (e) {
    e.preventDefault();

    if (paused) {
        startGame();
        e.target.innerHTML = 'Pause';
    } else {
        pauseGame();
        e.target.innerHTML = 'Paused';
    }
});

function purchaseItem (e, node, type) {
    var children = node.children;
    var child;

    for (var i = 0; i < children.length; i++) {
        if (children[i].className = 'item-purchased') {
            child = children[i];
        }
    }

    for (var i = 1; i <= itemList.length; i++) {
        var item = itemList[i - 1];

        if (item.type == type) {
            if (scoreCounter >= item.price) {
                item.purchased += 1;
                child.innerHTML = item.purchased;
                scoreCounter -= item.price;
            }
        }
    }
}

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

function startGame () {
    mainLoop = setInterval(function () {
        gameLoop();
    }, 60);
}

function pauseGame () {
    clearInterval(mainLoop);
    paused = true;
}

function gameLoop () {
    paused = false;
    score.innerHTML = scoreCounter;
    setAutoClick();
    checkItemAvailable();

    for (var i = 1; i <= itemList.length; i++) {
        var item = itemList[i - 1];
    }
}

function checkItemAvailable () {
    var listItems = document.getElementsByClassName('item');

    for (var i = 0; i < itemList.length; i++) {
        var item = itemList[i];

        if (scoreCounter >= item.price) {
            for (var i = 0; i < listItems.length; i++) {
                if (listItems[i].dataset.itemType === item.type) {
                    listItems[i].classList.remove('item-disabled');
                }
            }
        } else {
            for (var i = 0; i < listItems.length; i++) {
                if (listItems[i].dataset.itemType === item.type) {
                    listItems[i].classList.add('item-disabled');
                }
            }
        }
    }
}

function setAutoClick () {
    for (var i = 1; i <= itemList.length; i++) {
        var item = itemList[i - 1];

        if (item.purchased > 0) {
            switch (item.type) {
                case 'raccoon':
                    addClicker(1, item.purchased);
                    break;
                case 'gperson':
                    addClicker(10, item.purchased);
                    break;
                case 'grouch':
                    addClicker(25, item.purchased);
                    break;
            }
        }
    }
}

function addClicker (ability, total) {
    scoreCounter += (ability * total) / 50;
}