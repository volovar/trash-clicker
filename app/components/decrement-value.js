var decrementValue = function (prop, amount) {
    return this[prop] -= amount;
}

module.exports = decrementValue;