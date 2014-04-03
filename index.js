(function() {
    !function() {
        var d3 = {
            version: "3.4.4"
        };
        d3.shuffle = function(array) {
            var m = array.length, t, i;
            while (m) {
                i = Math.random() * m-- | 0;
                t = array[m], array[m] = array[i], array[i] = t;
            }
            return array;
        };
        if (typeof define === "function" && define.amd) {
            define(d3);
        } else if (typeof module === "object" && module.exports) {
            module.exports = d3;
        } else {
            this.d3 = d3;
        }
    }();
})();