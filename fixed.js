;(function () {
    "use strict";
    var fixedArray = document.getElementsByClassName("fixed");

    function getScrollHandler(fixed) {
        var initialTop = fixed.scrollTop;
        return function () {
            var scrollTop = fixed.parentElement.scrollTop;
            fixed.style.top = initialTop + scrollTop + "px";
        };
    }

    for (var i = 0; i < fixedArray.length; i++) {
        fixedArray[i].parentElement.onscroll = getScrollHandler(fixedArray[i]);
    }

    //    window.onscroll = function () {
    //
    //        var scrolled = window.pageYOffset || document.documentElement.scrollTop,
    //            header = document.getElementsByTagName("header")[0];
    //        header.style.top = scrolled + "px";
    //                    if (scrolled >= bgHeight * 0.61) {
    //                        document.getElementById("playMarketBtn").className = "btn btn-scroll-outline";
    //                    };
}());