// One variable per chart (the path to its Vega-Lite JSON file), then one vegaEmbed call that puts it in its div.
// This is the pattern from Week 7 Part B, section 1.3. The path is relative to index.html.
// "#vis_..." is the id of the div in index.html. {actions: false} hides the three-dot menu with "Open in Vega Editor" (Week 9 studio).
// The charts are listed in the same order as they appear on the page.

// The big picture
var vg_economy_indicators = "js/economy_indicators.vg.json";
vegaEmbed("#vis_economy_indicators", vg_economy_indicators, {actions: false}).then(function(result) {}).catch(console.error);

// Work
var vg_icon_array = "js/employment_icon_array.vg.json";
vegaEmbed("#vis_icon_array", vg_icon_array, {actions: false}).then(function(result) {}).catch(console.error);

var vg_employment_heatmap = "js/employment_heatmap.vg.json";
vegaEmbed("#vis_heatmap", vg_employment_heatmap, {actions: false}).then(function(result) {}).catch(console.error);

var vg_cartogram = "js/employment_cartogram.vg.json";
vegaEmbed("#vis_cartogram", vg_cartogram, {actions: false}).then(function(result) {}).catch(console.error);

var vg_unemployment_underemployment = "js/unemployment_underemployment.vg.json";
vegaEmbed("#vis_unemployment_underemployment", vg_unemployment_underemployment, {actions: false}).then(function(result) {}).catch(console.error);

var vg_underutilisation_choropleth = "js/underutilisation_choropleth.vg.json";
vegaEmbed("#vis_underutilisation_map", vg_underutilisation_choropleth, {actions: false}).then(function(result) {}).catch(console.error);

// Prices and spending
var vg_inflation_symbol_map = "js/inflation_symbol_map.vg.json";
vegaEmbed("#vis_inflation_map", vg_inflation_symbol_map, {actions: false}).then(function(result) {}).catch(console.error);

var vg_spending_index = "js/spending_category_index.vg.json";
vegaEmbed("#vis_spending_index", vg_spending_index, {actions: false}).then(function(result) {}).catch(console.error);

var vg_spending_slope = "js/spending_slope.vg.json";
vegaEmbed("#vis_spending_slope_graph", vg_spending_slope, {actions: false}).then(function(result) {}).catch(console.error);

// Industries and trade
var vg_gva_growth_industry = "js/gva_industry_growth.vg.json";
vegaEmbed("#vis_gvagrowthindustry", vg_gva_growth_industry, {actions: false}).then(function(result) {}).catch(console.error);

var vg_exports_flow_map = "js/exports_flow_map.vg.json";
vegaEmbed("#vis_flow_map", vg_exports_flow_map, {actions: false}).then(function(result) {}).catch(console.error);

var vg_top_exports = "js/top_export_destinations.vg.json";
vegaEmbed("#vis_top_exports", vg_top_exports, {actions: false}).then(function(result) {}).catch(console.error);

var vg_exports_streamgraph = "js/exports_streamgraph.vg.json";
vegaEmbed("#vis_streamgraph", vg_exports_streamgraph, {actions: false}).then(function(result) {}).catch(console.error);
