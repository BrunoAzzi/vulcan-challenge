var Airport = require('../js/helper/airport.js');

describe("Airport class instance", function() {
    var airport = new Airport(1, 5);

    var instantiateAirportWithWrongTypeValue = function () {
        return Airport("asd", 5);
    };

    var instantiateAirportWithMisingValue = function () {
        return new Airport(5);
    };

    var instantiateAirportWithNoValue = function () {
        return new Airport();
    };

    it("must have a x and y numeric position", function () {
        expect(airport.x).toBeDefined();
        expect(airport.x).toBeNumber();

        expect(airport.y).toBeDefined();
        expect(airport.y).toBeNumber();
    });

    it("must throw an error if a not supported value is given", function () {
        expect(instantiateAirportWithWrongTypeValue).toThrowAnyError();
        expect(instantiateAirportWithMisingValue).toThrowAnyError();
        expect(instantiateAirportWithNoValue).toThrowAnyError();
    });

    describe("function that calculate distance between airport and clouds", function () {
        it("must throw an error if a not supported value is given");
        it("must update his inner value if at least one value is given");
    })

});
