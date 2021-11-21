(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = (function (points) {
        var areas = points.reduce(function (acc, _, idx, arr) {
            var _a = arr[idx], yA = _a[0], xA = _a[1];
            var _b = arr[idx + 1] || arr[0], yB = _b[0], xB = _b[1];
            acc[0] += xA * yB;
            acc[1] += yA * xB;
            return acc;
        }, [0, 0]);
        return Math.abs(areas[0] - areas[1]) / 2;
    });
});
