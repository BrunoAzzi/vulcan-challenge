var Cloud = require('../js/helper/cloud.js');

describe("Cloud class instance", function() {
    var cloud = new Cloud(1, 5);

    var instantiateNewCloud = function () {
        var cloud = new Cloud("asd", 5);

        return cloud;
    };

    it("must have a x and y numeric position", function () {
        expect(cloud.x).toBeDefined();
        expect(cloud.x).toBeNumber();

        expect(cloud.y).toBeDefined();
        expect(cloud.y).toBeNumber();
    });

    it("must throw an error if a not supported value is given", function () {
        expect(instantiateNewCloud).toThrowAnyError();
    });
});
