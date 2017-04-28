var Airport = require("./helper/airport.js");
var Cloud = require("./helper/cloud.js");
var component = require("./helper/component.js");

window.onload = function() {
    var mapBoundsForm = document.getElementById('submitMapInfo');
    var mapItemsForm = document.getElementById('selectMap');

    if (mapBoundsForm.attachEvent) {
        mapBoundsForm.attachEvent("submit", processBoundsForm);
    } else {
        mapBoundsForm.addEventListener("submit", processBoundsForm);
    }

    if (mapItemsForm.attachEvent) {
        mapItemsForm.attachEvent("submit", processItemsForm);
    } else {
        mapItemsForm.addEventListener("submit", processItemsForm);
    }

};

var processBoundsForm  = function (event) {
        if (event.preventDefault) event.preventDefault();

        var lineCount = event.target.querySelector("#map-lines").value;
        var columnsCount = event.target.querySelector("#map-columns").value;

        component.cleanSelectMap();

        //processItemsForm will be caled here
        component.createSelectMap(lineCount, columnsCount);

        return false;
    },

    processItemsForm = function (event) {
        if (event.preventDefault) event.preventDefault();

        var tableData = event.target.querySelectorAll("td"),
            oraganizedMapPoints = organizeTableData(tableData),
            daysToBeCoveredByClouds = calculateDaysToBeCoveradeByClouds(
                oraganizedMapPoints.airports,
                oraganizedMapPoints.clouds
            );

        component.renderResult(daysToBeCoveredByClouds);

        return false;
    },

    organizeTableData = function (tableDataList) {
        var airports = [];
        var clouds = [];

        tableDataList.forEach( function (data) {
            var textValue = data.querySelector("select").value;

            if ( textValue == "Airport") airports.push(new Airport(
                Number.parseInt(data.getAttribute("data-x")),
                Number.parseInt(data.getAttribute("data-y"))
            ));

            if ( textValue == "Cloud") clouds.push(new Cloud(
                Number.parseInt(data.getAttribute("data-x")),
                Number.parseInt(data.getAttribute("data-y"))
            ));
        });

        return {
            airports: airports,
            clouds: clouds
        };
    },

    // I think that a implementation of Shamos and Hoey algoritm could improve the performance of this to O(n log n)
    calculateDaysToBeCoveradeByClouds = function( airports, clouds ) {
        var results = [];

        airports.forEach(function (airport) {
            airport.calculateDaysToBeCoveradeByClouds(clouds);
            results.push(airport.nearestCloudInDays);
        });

        return {
            daysToReachFirstAirport: Math.min.apply( Math, results ),
            daysToReachLastAirport: Math.max.apply( Math, results )
        };
    };
