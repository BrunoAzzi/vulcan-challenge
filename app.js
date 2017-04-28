(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Airport = require("./helper/airport.js"),
    Cloud = require("./helper/cloud.js"),
    component = require("./helper/component.js");window.onload = function () {
  var e = document.getElementById("submitMapInfo"),
      t = document.getElementById("selectMap");e.attachEvent ? e.attachEvent("submit", processBoundsForm) : e.addEventListener("submit", processBoundsForm), t.attachEvent ? t.attachEvent("submit", processItemsForm) : t.addEventListener("submit", processItemsForm);
};var processBoundsForm = function processBoundsForm(e) {
  e.preventDefault && e.preventDefault();var t = e.target.querySelector("#map-lines").value,
      r = e.target.querySelector("#map-columns").value;return component.cleanSelectMap(), component.createSelectMap(t, r), !1;
},
    processItemsForm = function processItemsForm(e) {
  e.preventDefault && e.preventDefault();var t = e.target.querySelectorAll("td"),
      r = organizeTableData(t),
      a = calculateDaysToBeCoveradeByClouds(r.airports, r.clouds);return component.renderResult(a), !1;
},
    organizeTableData = function organizeTableData(e) {
  var t = [],
      r = [];return e.forEach(function (e) {
    var a = e.querySelector("select").value;"Airport" == a && t.push(new Airport(Number.parseInt(e.getAttribute("data-x")), Number.parseInt(e.getAttribute("data-y")))), "Cloud" == a && r.push(new Cloud(Number.parseInt(e.getAttribute("data-x")), Number.parseInt(e.getAttribute("data-y"))));
  }), { airports: t, clouds: r };
},
    calculateDaysToBeCoveradeByClouds = function calculateDaysToBeCoveradeByClouds(e, t) {
  var r = [];return e.forEach(function (e) {
    e.calculateDaysToBeCoveradeByClouds(t), r.push(e.nearestCloudInDays);
  }), { daysToReachFirstAirport: Math.min.apply(Math, r), daysToReachLastAirport: Math.max.apply(Math, r) };
};

},{"./helper/airport.js":2,"./helper/cloud.js":3,"./helper/component.js":4}],2:[function(require,module,exports){
"use strict";

var getdistanceBetweenTwoPoints = require("./distance-algorithm.js"),
    Airport = function Airport(e, t) {
  this.x = e, this.y = t, this.nearestCloudInDays = null;
};Airport.prototype.calculateDaysToBeCoveradeByClouds = function (e) {
  var t = this;e.forEach(function (e) {
    var n = getdistanceBetweenTwoPoints(t, e);t.nearestCloudInDays || (t.nearestCloudInDays = n), n < t.nearestCloudInDays && (t.nearestCloudInDays = n);
  });
}, module.exports = Airport;

},{"./distance-algorithm.js":5}],3:[function(require,module,exports){
"use strict";

var Cloud = function Cloud(e, o) {
  if ("number" != typeof e || "number" != typeof o) throw new TypeError({ message: "Invalid value in constructor, it mus be a Integer" });this.x = e, this.y = o;
};module.exports = Cloud;

},{}],4:[function(require,module,exports){
"use strict";

var createComponent = function createComponent(e, t) {
  var a = document.createElement(e);return Object.keys(t).forEach(function (e) {
    if ("text" != e) a.setAttribute(e, t[e]);else {
      var n = document.createTextNode(t[e]);a.appendChild(n);
    }
  }), a;
},
    createTableWithPositionData = function createTableWithPositionData(e, t) {
  for (var a = document.createElement("table"), n = 0; n < e; n++) {
    for (var o = document.createElement("tr"), r = 0; r < t; r++) {
      var c = createComponent("td", { class: "input-field col s1 m1", "data-x": n, "data-y": r }),
          l = createComponent("select", {}),
          i = createComponent("option", { value: "Airport", text: "Airport" }),
          p = createComponent("option", { value: "Cloud", text: "Cloud" }),
          d = createComponent("option", { value: "Empty", text: "Empty", selected: "" });l.appendChild(d), l.appendChild(i), l.appendChild(p), c.appendChild(l), o.appendChild(c);
    }a.appendChild(o);
  }return a;
},
    createSelectMap = function createSelectMap(e, t) {
  var a = document.getElementById("selectMap"),
      n = createComponent("h2", { text: "Preencha o estado inicial do mapa:" });a.appendChild(n);var o = createTableWithPositionData(e, t);a.appendChild(n), a.appendChild(o);var r = createComponent("button", { name: "action", type: "submit", class: "btn waves-effect waves-light", text: "Enviar" });a.appendChild(r), $("select").material_select();
},
    cleanSelectMap = function cleanSelectMap() {
  $("#selectMap").empty();
},
    renderResult = function renderResult(e) {
  document.getElementById("result-card").classList.remove("hide"), document.getElementById("daysToReachFirstAirport").innerHTML = e.daysToReachFirstAirport, document.getElementById("daysToReachLastAirport").innerHTML = e.daysToReachLastAirport;
};module.exports = { createComponent: createComponent, createTableWithPositionData: createTableWithPositionData, createSelectMap: createSelectMap, cleanSelectMap: cleanSelectMap, renderResult: renderResult };

},{}],5:[function(require,module,exports){
"use strict";

var getdistanceBetweenTwoPoints = function getdistanceBetweenTwoPoints(e, t) {
  return Math.abs(t.x - e.x) + Math.abs(t.y - e.y);
};module.exports = getdistanceBetweenTwoPoints;

},{}]},{},[1]);
