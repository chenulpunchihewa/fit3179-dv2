// One variable per chart (the path to its Vega-Lite JSON file), then one vegaEmbed call that puts it in its div.
// This is the pattern from Week 7 Part B, section 1.3. The path is relative to index.html.

var vg_top_exports = "js/top_export_destinations.vg.json";
// "#vis_top_exports" is the id of the div in index.html. {actions: false} hides the three-dot menu with "Open in Vega Editor" (Week 9 studio).
vegaEmbed("#vis_top_exports", vg_top_exports, {actions: false}).then(function(result) {
    // result.view is the Vega view instance (not needed yet)
}).catch(console.error);

var vg_seasonal_spending = "js/household_spending.vg.json";
// "#vis_spending" is the id of the div in index.html. {actions: false} hides the three-dot menu with "Open in Vega Editor" (Week 9 studio).
vegaEmbed("#vis_spending", vg_seasonal_spending, {actions: false}).then(function(result) {
    // result.view is the Vega view instance (not needed yet)
}).catch(console.error);

var vg_gva_growth_industry = "js/gva_industry_growth.vg.json";
// "#vis_gvagrowthindustry" is the id of the div in index.html. {actions: false} hides the three-dot menu with "Open in Vega Editor" (Week 9 studio).
vegaEmbed("#vis_gvagrowthindustry", vg_gva_growth_industry, {actions: false}).then(function(result) {
    // result.view is the Vega view instance (not needed yet)
}).catch(console.error);

var vg_unemployment_underemployment = "js/unemployment_underemployment.vg.json";
// "#vis_unemployment_underemployment" is the id of the div in index.html. {actions: false} hides the three-dot menu with "Open in Vega Editor" (Week 9 studio).
vegaEmbed("#vis_unemployment_underemployment", vg_unemployment_underemployment, {actions: false}).then(function(result) {
    // result.view is the Vega view instance (not needed yet)
}).catch(console.error);

var vg_employment_heatmap = "js/employment_heatmap.vg.json";
// "#vis_heatmap" is the id of the div in index.html. {actions: false} hides the three-dot menu with "Open in Vega Editor" (Week 9 studio).
vegaEmbed("#vis_heatmap", vg_employment_heatmap, {actions: false}).then(function(result) {
    // result.view is the Vega view instance (not needed yet)
}).catch(console.error);

var vg_exports_streamgraph = "js/exports_streamgraph.vg.json";
// "#vis_streamgraph" is the id of the div in index.html. {actions: false} hides the three-dot menu with "Open in Vega Editor" (Week 9 studio).
vegaEmbed("#vis_streamgraph", vg_exports_streamgraph, {actions: false}).then(function(result) {
    // result.view is the Vega view instance (not needed yet)
}).catch(console.error);

var vg_economy_indicators = "js/economy_indicators.vg.json";
// "#vis_economy_indicators" is the id of the div in index.html. {actions: false} hides the three-dot menu with "Open in Vega Editor" (Week 9 studio).
vegaEmbed("#vis_economy_indicators", vg_economy_indicators, {actions: false}).then(function(result) {
    // result.view is the Vega view instance (not needed yet)
}).catch(console.error);

var vg_spending_slope = "js/spending_slope.vg.json";
// "#vis_spending_slope_graph" is the id of the div in index.html. {actions: false} hides the three-dot menu with "Open in Vega Editor" (Week 9 studio).
vegaEmbed("#vis_spending_slope_graph", vg_spending_slope, {actions: false}).then(function(result) {
    // result.view is the Vega view instance (not needed yet)
}).catch(console.error);

var vg_unemployment_choropleth = "js/unemployment_chloropleth.vg.json";
// "#vis_unemployment_map" is the id of the new div in index.html.
vegaEmbed("#vis_unemployment_map", vg_unemployment_choropleth, {actions: false}).then(function(result) {
    // result.view is the Vega view instance (not needed yet)
}).catch(console.error);