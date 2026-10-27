// One variable per chart (the path to its Vega-Lite JSON file), then one vegaEmbed call that puts it in its div.
// This is the pattern from Week 7 Part B, section 1.3. The path is relative to index.html.
// "#vis_..." is the id of the div in index.html. {actions: false} hides the three-dot menu with "Open in Vega Editor" (Week 9 studio).
// The charts are listed in the same order as they appear on the page.

// Options shared by every chart:
//   actions: false  hides the three-dot menu (Week 9 studio).
//   config         one shared look for the text in every chart: Open Sans (the page font), 12 px axis and legend text,
//                  and the same dark text colours as the page. A chart's own config can still override these.
var embedOptions = {
    actions: false,
    config: {
        font: "Open Sans",
        background: "transparent",                     // charts sit directly on the page's paper colour
        view: {stroke: null},                          // no thin frame around the plot area
        axis: {labelFontSize: 12, titleFontSize: 12, labelColor: "#2d3643", titleColor: "#0f2742",
               gridColor: "#e7dfcb", domainColor: "#b9ad94", tickColor: "#b9ad94"},   // soft warm grey lines
        legend: {labelFontSize: 12, titleFontSize: 12, labelColor: "#2a3a4d", titleColor: "#0f2742"},
        header: {labelColor: "#0f2742"},
        title: {color: "#0f2742"}
    }
};

// A chart is drawn once, so it must be drawn after the fonts have arrived or it would keep a fallback font.
// This waits for Open Sans (regular and bold), but never longer than 3 seconds.
var fontsLoaded = Promise.race([
    Promise.all([
        document.fonts.load('400 12px "Open Sans"'),
        document.fonts.load('700 12px "Open Sans"')
    ]),
    new Promise(function(resolve) { setTimeout(resolve, 3000); })
]).catch(function() {});   // if a font cannot be loaded at all, draw the charts anyway

fontsLoaded.then(function() {

    // The big picture
    var vg_economy_indicators = "js/economy_indicators.vg.json";
    vegaEmbed("#vis_economy_indicators", vg_economy_indicators, embedOptions).then(function(result) {}).catch(console.error);

    // Work
    var vg_icon_array = "js/employment_icon_array.vg.json";
    vegaEmbed("#vis_icon_array", vg_icon_array, embedOptions).then(function(result) {}).catch(console.error);

    var vg_employment_heatmap = "js/employment_heatmap.vg.json";
    vegaEmbed("#vis_heatmap", vg_employment_heatmap, embedOptions).then(function(result) {}).catch(console.error);

    var vg_cartogram = "js/employment_cartogram.vg.json";
    vegaEmbed("#vis_cartogram", vg_cartogram, embedOptions).then(function(result) {}).catch(console.error);

    var vg_unemployment_underemployment = "js/unemployment_underemployment.vg.json";
    vegaEmbed("#vis_unemployment_underemployment", vg_unemployment_underemployment, embedOptions).then(function(result) {}).catch(console.error);

    var vg_underutilisation_choropleth = "js/underutilisation_choropleth.vg.json";
    vegaEmbed("#vis_underutilisation_map", vg_underutilisation_choropleth, embedOptions).then(function(result) {}).catch(console.error);

    // Prices and spending
    var vg_inflation_symbol_map = "js/inflation_symbol_map.vg.json";
    vegaEmbed("#vis_inflation_map", vg_inflation_symbol_map, embedOptions).then(function(result) {}).catch(console.error);

    var vg_spending_index = "js/spending_category_index.vg.json";
    vegaEmbed("#vis_spending_index", vg_spending_index, embedOptions).then(function(result) {}).catch(console.error);

    var vg_spending_slope = "js/spending_slope.vg.json";
    vegaEmbed("#vis_spending_slope_graph", vg_spending_slope, embedOptions).then(function(result) {}).catch(console.error);

    // Industries and trade
    var vg_gva_growth_industry = "js/gva_industry_growth.vg.json";
    vegaEmbed("#vis_gvagrowthindustry", vg_gva_growth_industry, embedOptions).then(function(result) {}).catch(console.error);

    var vg_exports_flow_map = "js/exports_flow_map.vg.json";
    vegaEmbed("#vis_flow_map", vg_exports_flow_map, embedOptions).then(function(result) {}).catch(console.error);

    var vg_top_exports = "js/top_export_destinations.vg.json";
    vegaEmbed("#vis_top_exports", vg_top_exports, embedOptions).then(function(result) {}).catch(console.error);

    var vg_exports_streamgraph = "js/exports_streamgraph.vg.json";
    vegaEmbed("#vis_streamgraph", vg_exports_streamgraph, embedOptions).then(function(result) {}).catch(console.error);

});
