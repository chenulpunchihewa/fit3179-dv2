// The chapter bar: a slim bar fixed to the top of the window.
//   1. It slides in once the header has scrolled out of sight.
//   2. The link for the chapter you are reading is underlined (the chapter whose cover has passed the top of the window).
//   3. A row of dots fills as you scroll down the page, like a progress meter.
// It only reads the scroll position. Nothing on the page is hidden, moved or swapped, and the page works without it.

(function () {
    var bar = document.querySelector(".chapter-bar");
    if (!bar) { return; }

    var covers = Array.prototype.slice.call(document.querySelectorAll(".cover"));
    var links = Array.prototype.slice.call(bar.querySelectorAll("[data-target]"));
    var meter = bar.querySelector(".bar-meter");
    var DOTS = 24;
    var dots = [];

    // Build the dots once
    for (var i = 0; i < DOTS; i++) {
        var dot = document.createElement("span");
        meter.appendChild(dot);
        dots.push(dot);
    }

    function update() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        var scrollable = document.documentElement.scrollHeight - window.innerHeight;
        var progress = scrollable > 0 ? Math.min(1, scrolled / scrollable) : 0;

        // 1. show the bar after 360 px of scrolling (about the height of the header's title block)
        bar.classList.toggle("show", scrolled > 360);

        // 2. the current chapter is the last cover whose top edge is above 140 px from the top of the window
        var current = "";
        covers.forEach(function (cover) {
            if (cover.getBoundingClientRect().top <= 140) { current = cover.id; }
        });
        links.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("data-target") === current);
        });

        // 3. fill the dots in proportion to how far down the page you are
        var filled = Math.round(progress * DOTS);
        dots.forEach(function (d, index) {
            d.classList.toggle("on", index < filled);
        });
    }

    // Scroll events fire very often, so ask the browser to run update once per frame at most
    var waiting = false;
    window.addEventListener("scroll", function () {
        if (!waiting) {
            waiting = true;
            window.requestAnimationFrame(function () { update(); waiting = false; });
        }
    }, { passive: true });
    window.addEventListener("resize", update);
    update();
})();
