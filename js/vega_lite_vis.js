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
