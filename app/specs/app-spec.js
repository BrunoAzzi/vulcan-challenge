var getDistanceBeetwTwoPoints = require('../js/helper/distance-algorithm.js');

describe("Algorithm that calculates distance between two points", function() {
    var positiveOrigin = { x:0, y:0 },
        positiveDestination = { x:8, y:6 },
        negativeOrigin = { x:-2, y:-4 },
        negativeDestination = { x:-8, y:-3 },
        emptyValue = {},
        bizzareValue = { x:"asd", y:-1};

    var positiveOriginPositiveDestination = getDistanceBeetwTwoPoints(positiveOrigin, positiveDestination),
        positiveOriginNegativeDestination = getDistanceBeetwTwoPoints(positiveOrigin, negativeDestination),
        negativeOriginPositiveDestination = getDistanceBeetwTwoPoints(negativeOrigin, positiveDestination),
        negativeOriginNegativeDestination = getDistanceBeetwTwoPoints(negativeOrigin, negativeDestination),
        emptyValueTry =getDistanceBeetwTwoPoints(emptyValue, positiveDestination),
        bizzareValueTry =getDistanceBeetwTwoPoints(bizzareValue, positiveDestination);

    it("must handle positive values", function () {
        expect(positiveOriginPositiveDestination).not.toBeNull()
        expect(positiveOriginPositiveDestination).not.toBeNaN();
    });

    it("must handle negative values", function () {
        expect(positiveOriginNegativeDestination).not.toBeNull();
        expect(positiveOriginNegativeDestination).not.toBeNaN();

        expect(negativeOriginPositiveDestination).not.toBeNull();
        expect(negativeOriginPositiveDestination).not.toBeNaN();

        expect(negativeOriginNegativeDestination).not.toBeNull();
        expect(negativeOriginNegativeDestination).not.toBeNaN();
    });

    it("must return a positive number value", function () {
        expect(positiveOriginPositiveDestination).toBeNumber();
        expect(positiveOriginPositiveDestination).toBeGreaterThanOrEqualTo(0);

        expect(positiveOriginNegativeDestination).toBeNumber();
        expect(positiveOriginNegativeDestination).toBeGreaterThanOrEqualTo(0);

        expect(negativeOriginPositiveDestination).toBeNumber();
        expect(negativeOriginPositiveDestination).toBeGreaterThanOrEqualTo(0);

        expect(negativeOriginNegativeDestination).toBeNumber();
        expect(negativeOriginNegativeDestination).toBeGreaterThanOrEqualTo(0);
    });


    it("must be correct", function () {
        expect(positiveOriginPositiveDestination).toEqual(14);

        expect(positiveOriginNegativeDestination).toEqual(11);

        expect(negativeOriginPositiveDestination).toEqual(20);

        expect(negativeOriginNegativeDestination).toEqual(7);
    });

    it("must throw an error if a not suported value is given", function () {
        expect(emptyValueTry).toThrowAnyError();
        expect(bizzareValueTry).toThrowAnyError();
    });
});
