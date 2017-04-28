var getdistanceBetweenTwoPoints = function (origin, destination) {
    return Math.abs(destination.x - origin.x) + Math.abs(destination.y - origin.y);
};

module.exports = getdistanceBetweenTwoPoints;
