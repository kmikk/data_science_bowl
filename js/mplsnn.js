
Plotly.d3.csv("https://45.56.66.135/static/csv/mpls_nn.csv", function (row1) {
    // Plotly.d3.csv("https://45.56.66.135/static/csv/csv/mpls_xg.csv", function (row2) {
        // Plotly.d3.csv("https://45.56.66.135/static/csv/csv/olg_nn.csv", function (row3) {
        //     Plotly.d3.csv("https://45.56.66.135/static/csv/csv/olg_xg.csv", function (row4) {
                // Plotly.d3.csv("CMH01_2017-2018_TrollData.csv", function (row5) {
                    // Plotly.d3.csv("CGL01_2017-2018_TrollData.csv", function (row6) {

                        function unpack(row1, key) {
                            return row1.map(function (row) { return row[key]; });
                        }
                        // function unpack(row2, key) {
                        //     return row2.map(function (row) { return row[key]; });
                        // }
                        // function unpack(row3, key) {
                        //     return row3.map(function (row) { return row[key]; });
                        // }
                        // function unpack(row4, key) {
                        //     return row4.map(function (row) { return row[key]; });
                        // }
                        // function unpack(row5, key) {
                        //     return row5.map(function (row) { return row[key]; });
                        // }
                        // function unpack(row6, key) {
                        //     return row6.map(function (row) { return row[key]; });
                        // }

                        var trace1 = {
                            type: "scatter",
                            mode: "lines",
                            name: 'MPLS NN',
                            x: unpack(row1, 'date_time'),
                            y: unpack(row1, 'predictions_in_Watts'),
                            line: { color: '00b8ff' }
                        };
                        // var trace2 = {
                        //     type: "scatter",
                        //     mode: "lines",
                        //     name: 'MPLS XGBOOST',
                        //     x: unpack(row2, 'date_time'),
                        //     y: unpack(row2, 'predictions_in_Watts'),
                        //     line: { color: '1034a6' }
                        // };
                        // var trace3 = {
                        //     type: "scatter",
                        //     mode: "lines",
                        //     name: 'OLG NN',
                        //     x: unpack(row3, 'date_time'),
                        //     y: unpack(row3, 'predictions_in_Watts'),
                        //     line: { color: '008ecc' }
                        // };
                        // var trace4 = {
                        //     type: "scatter",
                        //     mode: "lines",
                        //     name: 'OLG XGBOOST',
                        //     x: unpack(row4, 'date_time'),
                        //     y: unpack(row4, 'predictions_in_Watts'),
                        //     line: { color: '3fe0d0' }
                        // };
                        // var trace5 = {
                        //     type: "scatter",
                        //     mode: "lines",
                        //     name: '494 & Minnetonka Blvd.',
                        //     x: unpack(row5, 'date_time'),
                        //     y: unpack(row5, 'predictions_in_Watts'),
                        //     line: { color: '0080ff' }
                        // };
                        // var trace6 = {
                        //     type: "scatter",
                        //     mode: "lines",
                        //     name: 'Gleason Lake',
                        //     x: unpack(row6, 'date_time'),
                        //     y: unpack(row6, 'predictions_in_Watts'),
                        //     line: { color: '468284' }
                        // };

                        // var data = [trace1, trace2, trace3, trace4, trace5, trace6];
                        // var data = [trace1, trace2];
                        var data = [trace1];
                        var layout = {
                            title: 'Predicted Watts',
                            yaxis: {
                                title: {
                                    text: 'watts'
                                }
                            }
                        };
                        Plotly.newPlot('mplsDiv', data, layout, {});
    //                 })
    //             })
        //     })
        // })
    // })
})