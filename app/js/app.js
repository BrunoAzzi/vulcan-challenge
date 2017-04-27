var Airport = require("./airport.js");
var Cloud = require("./cloud.js");
var $ = require("jquery");

var linhas = 7;
var colunas = 8;

var clouds = [
    new Cloud(0,2),
    new Cloud(0,6),
    new Cloud(0,7),

    new Cloud(1,1),
    new Cloud(1,2),

    new Cloud(2,0),
    new Cloud(2,1),
    new Cloud(2,2),

    new Cloud(3,1),

    new Cloud(4,1)
];

var airports = [
    new Airport(2,4),
    new Airport(2,7),
    new Airport(4,6),
    new Airport(5,3)
];

var generateDropdownMap = function () {
    var mapLines = document.getElementById('map-lines');
    var mapColumns = document.getElementById('map-columns');

    console.log(mapLines.value);
    console.log(mapColumns.value);
};

var createSelectMap = function (linhas, colunas) {
    var selectMap = document.getElementById("selectMap");

    for ( var i = 0; i < linhas; i++ ) {
        var selectMapLine = document.createElement("tr");

        for ( var j = 0; j < colunas; j++ ) {
            var selectWrapper = document.createElement("td");
        //     // var selectLabel = document.createElement("label");
        //     // var LabelTextNode = document.createTextNode("teste");
        //     // selectWrapper.class = "input-field col s2 m2";
        //     // var select = document.createElement("select");
        //     // var optionAirport = document.createElement("option");
        //     // var optionCloud = document.createElement("option");
        //     //
        //     // select.setAttribute("class", "icons");
        //     //
        //     // optionAirport.setAttribute("value", "Airport");
        //     // optionAirport.setAttribute("data-icon", "Airport");
        //     // optionAirport.setAttribute("class", "Airport");
        //     // var airportTextNode = document.createTextNode("Airport");
        //     // optionAirport.appendChild(airportTextNode);
        //     //
        //     // optionCloud.setAttribute("value", "Cloud");
        //     // optionCloud.setAttribute("data-icon", "Cloud");
        //     // optionCloud.setAttribute("class", "Cloud");
        //     // var cloudTextNode = document.createTextNode("Cloud");
        //     // optionCloud.appendChild(cloudTextNode);
        //     //
        //     // select.appendChild(optionAirport);
        //     // select.appendChild(optionCloud);
        //
        //
        //     // selectWrapper.appendChild(select);
            selectMapLine.appendChild(selectWrapper);
        }

        selectMap.appendChild(selectMapLine);

    }
};

function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    linhas = e.target.querySelector("#map-lines").value;
    colunas = e.target.querySelector("#map-columns").value;

    createSelectMap(linhas, colunas);

    return false;
}

window.onload = function() {
    var form = document.getElementById('submitMapInfo');

    if (form.attachEvent) {
        form.attachEvent("submit", processForm);
    } else {
        form.addEventListener("submit", processForm);
    }

}

// An implementation of Shamos and Hoey algoritm could improve the performance of this
var test = function() {
    var results = [];

    airports.forEach(function (airport) {
        airport.calculateDaysToBeCoveradeByClouds(clouds);

        results.push(airport.nearestCloudInDays);
    });

    console.log(Math.min.apply( Math, results ));
    console.log(Math.max.apply( Math, results ));
};

test();
