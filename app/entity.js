var Components = require('./components/components');

var Entity = {
    createEntity: function (properties, components) {
        var entity = {};

        for (prop in properties) {
            entity[prop] = properties[prop];
        }

        components.forEach(function (component) {
            if (entity.hasOwnProperty(component)) {
                console.log('Entity already has property: ' + component)
            } else {
                entity[component] = Components[component];
            }
        });

        return entity;
    }
}

module.exports = Entity;