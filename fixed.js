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
}());