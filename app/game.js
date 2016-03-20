(function() {
    'use strict';

    var game = document.getElementById('js-game');
    var score = document.getElementById('js-score');
    var scoreCounter = 0;
    var pauseButton = document.getElementById('js-pause');
    var paused;
    var mainLoop;
    var trashButton = document.getElementById('js-trash-button');
    var itemList = [];

    var Player = require('./player');
    var NPCData = require('./data/npc-data');
    var NPCStore = require('./npc-store');

    // setting up the events
    var initializeEvents = (function () {
        trashButton.addEventListener('click', function (e) {
            e.preventDefault();
            Player.score += Player.currentValue;
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
    }())

    var initGame = (function () {
        NPCStore.init();
        startGame();
    }());

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
        score.innerHTML = (Player.score / 100).toString().split('.')[0];
        createAutoClickers();
        NPCStore.updateItemAvailability();
        NPCStore.updatePurchaseCounts();
    }

    // auto clickers
    function createAutoClickers () {
        var purchase;

        for (purchase in Player.purchases) {
            addClicker(NPCData[purchase].clickValue, Player.purchases[purchase]);
        }
    }

    function addClicker (clickValue, purchased) {
        Player.score += clickValue * purchased;
    }
}());