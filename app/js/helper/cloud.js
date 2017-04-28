var Cloud = function (x, y) {
    if ( typeof x == "number" && typeof y == "number") {
        this.x = x;
        this.y = y;
    } else {
        throw new TypeError({'message': "Invalid value in constructor, it mus be a Integer"});
    }
};

module.exports = Cloud;
