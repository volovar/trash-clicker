var Entity = require("./entity");
var npcData = require("../src/data/itemData");
var components = ["displayValue", "incrementValue", "decrementValue"];

var NPCs = {
    createNew: function(type) {
        return Entity.createEntity(npcData[type], components);
    }
};

module.exports = NPCs;
