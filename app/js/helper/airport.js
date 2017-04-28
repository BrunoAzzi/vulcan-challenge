var getdistanceBetweenTwoPoints = require("./distance-algorithm.js");

var Airport = function (x, y) {
    this.nearestCloudInDays = null;

    if ( typeof x == "number" && typeof y == "number") {
        this.x = x;
        this.y = y;
    } else {
        throw new TypeError({'message': "Invalid value in constructor, it mus be a Integer"});
    }
};

Airport.prototype.calculateDaysToBeCoveradeByClouds = function (cloudsPosition) {
    var airport = this;

    cloudsPosition.forEach(function (cloud) {
        var distance = getdistanceBetweenTwoPoints(airport, cloud);

        if (!airport.nearestCloudInDays) airport.nearestCloudInDays = distance;
        if (distance < airport.nearestCloudInDays) airport.nearestCloudInDays = distance;
    });
};

module.exports = Airport;
