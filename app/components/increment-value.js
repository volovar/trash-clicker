var incrementValue = function (prop, amount) {
    return this[prop] += amount;
}

module.exports = incrementValue;