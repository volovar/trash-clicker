var Entity = require('./entity');
var npcData = require('./data/npc-data');
var components = [
    'displayValue',
    'incrementValue',
    'decrementValue'
];

var NPCs = {
    createNew: function (type) {
        return Entity.createEntity(npcData[type], components);
    }
};

module.exports = NPCs;