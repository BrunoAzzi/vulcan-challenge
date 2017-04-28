var Cloud = require('../js/helper/cloud.js');

describe("Cloud class instance", function() {
    var cloud = new Cloud(1, 5);

    var instantiateCloudWithWrongTypeValue = function () {
        return Cloud("asd", 5);
    };

    var instantiateCloudWithMisingValue = function () {
        return new Cloud(5);
    };

    var instantiateCloudWithNoValue = function () {
        return new Cloud();
    };

    it("must have a x and y numeric position", function () {
        expect(cloud.x).toBeDefined();
        expect(cloud.x).toBeNumber();

        expect(cloud.y).toBeDefined();
        expect(cloud.y).toBeNumber();
    });

    it("must throw an error if a not supported value is given", function () {
        expect(instantiateCloudWithWrongTypeValue).toThrowAnyError();
        expect(instantiateCloudWithMisingValue).toThrowAnyError();
        expect(instantiateCloudWithNoValue).toThrowAnyError();
    });
});
