var getdistanceBetweenTwoPoints = require("./distance-algorithm.js");

var Airport = function (x, y) {
    this.x = x;
    this.y = y;
    this.nearestCloudInDays = null;
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
