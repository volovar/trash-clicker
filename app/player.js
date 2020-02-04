var NPCData = require("../src/data/itemData");
var Entity = require("./entity");
// var props = require("../src/data/player-data");
var components = ["displayValue", "incrementValue", "decrementValue"];

var Player = Entity.createEntity({}, components);

Player.checkPurchases = function() {
    return console.log(this.purchases);
};

Player.checkNPCAmount = function(type) {
    return console.log(this.purchases[type]);
};

Player.purchaseNPC = function(type) {
    var cost = NPCData[type].value;

    if (this.score >= cost && cost !== undefined) {
        if (!this.purchases.hasOwnProperty(type)) {
            this.purchases[type] = 1;
        } else {
            this.purchases[type] += 1;
        }

        this.score -= cost;
    } else {
        console.log("need more money!");
    }
};

module.exports = Player;
