function Airport (x, y) {
    this.x = x;
    this.y = y;
    this.nearestCloudInDays = null;
}

Airport.prototype.calculateDaysToBeCoveradeByClouds = function (cloudsPosition) {
    var airport = this;

    cloudsPosition.forEach(function (cloud) {
        var distance = distanceBetweenTwoPoints(airport, cloud);

        if (!airport.nearestCloudInDays) airport.nearestCloudInDays = distance;
        if (distance < airport.nearestCloudInDays) airport.nearestCloudInDays = distance;
    });
};

var distanceBetweenTwoPoints = function (origin, destination) {
    return Math.abs(destination.x - origin.x) + Math.abs(destination.y - origin.y);
};

module.exports = Airport;
