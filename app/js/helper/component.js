var createComponent = function (componentName, specs) {
        var component = document.createElement(componentName);

        Object.keys(specs).forEach(function (value){
            if (value != "text") {
                // component[value] = specs[value];
                component.setAttribute(value, specs[value]);
            } else {
                var submitButtonText = document.createTextNode(specs[value]);
                component.appendChild(submitButtonText);
            }
        });

        return component;
    },

    createTableWithPositionData = function ( lineCount, columnsCount ) {
        var selectMapTable = document.createElement("table");

        for ( var i = 0; i < lineCount; i++ ) {
            var selectMapLine = document.createElement("tr");

            for ( var j = 0; j < columnsCount; j++ ) {
                var selectWrapper = createComponent("td", {
                    "class": "input-field col s1 m1",
                    "data-x": i,
                    "data-y": j
                });

                var select = createComponent("select", {});

                var optionAirport = createComponent("option", {
                    value: "Airport",
                    text: "Airport"
                });

                var optionCloud = createComponent("option", {
                    value: "Cloud",
                    text: "Cloud"
                });

                var optionEmpty = createComponent("option", {
                    value: "Empty",
                    text: "Empty",
                    selected: ""
                });

                select.appendChild(optionEmpty);
                select.appendChild(optionAirport);
                select.appendChild(optionCloud);
                selectWrapper.appendChild(select);
                selectMapLine.appendChild(selectWrapper);
            }

            selectMapTable.appendChild(selectMapLine);

        }

        return selectMapTable;
    },

    createSelectMap = function (linhas, colunas) {
        var selectMap = document.getElementById("selectMap");
        var header = createComponent("h2", {text: "Preencha o estado inicial do mapa:"});

        selectMap.appendChild(header);

        var selectMapTable = createTableWithPositionData( linhas, colunas);

        selectMap.appendChild(header);
        selectMap.appendChild(selectMapTable);

        var submitButton = createComponent("button", {
            name: "action",
            type: "submit",
            class: "btn waves-effect waves-light",
            text: "Enviar"
        });

        selectMap.appendChild(submitButton);

        $('select').material_select();

    },

    cleanSelectMap = function() {
        $("#selectMap").empty();
    },

    renderResult = function (result) {
        document.getElementById("result-card").classList.remove("hide");
        document.getElementById("daysToReachFirstAirport").innerHTML = result.daysToReachFirstAirport;
        document.getElementById("daysToReachLastAirport").innerHTML = result.daysToReachLastAirport;
    };

module.exports = {
    createComponent: createComponent,
    createTableWithPositionData: createTableWithPositionData,
    createSelectMap: createSelectMap,
    cleanSelectMap: cleanSelectMap,
    renderResult: renderResult
};
