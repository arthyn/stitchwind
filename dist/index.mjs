/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var config = {
    "tokens": {
        "colors": {
            "$transparent": "transparent",
            "$current": "currentColor",
            "$black": "#000",
            "$white": "#fff",
            "$gray100": "#f7fafc",
            "$gray200": "#edf2f7",
            "$gray300": "#e2e8f0",
            "$gray400": "#cbd5e0",
            "$gray500": "#a0aec0",
            "$gray600": "#718096",
            "$gray700": "#4a5568",
            "$gray800": "#2d3748",
            "$gray900": "#1a202c",
            "$red100": "#fff5f5",
            "$red200": "#fed7d7",
            "$red300": "#feb2b2",
            "$red400": "#fc8181",
            "$red500": "#f56565",
            "$red600": "#e53e3e",
            "$red700": "#c53030",
            "$red800": "#9b2c2c",
            "$red900": "#742a2a",
            "$orange100": "#fffaf0",
            "$orange200": "#feebc8",
            "$orange300": "#fbd38d",
            "$orange400": "#f6ad55",
            "$orange500": "#ed8936",
            "$orange600": "#dd6b20",
            "$orange700": "#c05621",
            "$orange800": "#9c4221",
            "$orange900": "#7b341e",
            "$yellow100": "#fffff0",
            "$yellow200": "#fefcbf",
            "$yellow300": "#faf089",
            "$yellow400": "#f6e05e",
            "$yellow500": "#ecc94b",
            "$yellow600": "#d69e2e",
            "$yellow700": "#b7791f",
            "$yellow800": "#975a16",
            "$yellow900": "#744210",
            "$green100": "#f0fff4",
            "$green200": "#c6f6d5",
            "$green300": "#9ae6b4",
            "$green400": "#68d391",
            "$green500": "#48bb78",
            "$green600": "#38a169",
            "$green700": "#2f855a",
            "$green800": "#276749",
            "$green900": "#22543d",
            "$teal100": "#e6fffa",
            "$teal200": "#b2f5ea",
            "$teal300": "#81e6d9",
            "$teal400": "#4fd1c5",
            "$teal500": "#38b2ac",
            "$teal600": "#319795",
            "$teal700": "#2c7a7b",
            "$teal800": "#285e61",
            "$teal900": "#234e52",
            "$blue100": "#ebf8ff",
            "$blue200": "#bee3f8",
            "$blue300": "#90cdf4",
            "$blue400": "#63b3ed",
            "$blue500": "#4299e1",
            "$blue600": "#3182ce",
            "$blue700": "#2b6cb0",
            "$blue800": "#2c5282",
            "$blue900": "#2a4365",
            "$indigo100": "#ebf4ff",
            "$indigo200": "#c3dafe",
            "$indigo300": "#a3bffa",
            "$indigo400": "#7f9cf5",
            "$indigo500": "#667eea",
            "$indigo600": "#5a67d8",
            "$indigo700": "#4c51bf",
            "$indigo800": "#434190",
            "$indigo900": "#3c366b",
            "$purple100": "#faf5ff",
            "$purple200": "#e9d8fd",
            "$purple300": "#d6bcfa",
            "$purple400": "#b794f4",
            "$purple500": "#9f7aea",
            "$purple600": "#805ad5",
            "$purple700": "#6b46c1",
            "$purple800": "#553c9a",
            "$purple900": "#44337a",
            "$pink100": "#fff5f7",
            "$pink200": "#fed7e2",
            "$pink300": "#fbb6ce",
            "$pink400": "#f687b3",
            "$pink500": "#ed64a6",
            "$pink600": "#d53f8c",
            "$pink700": "#b83280",
            "$pink800": "#97266d",
            "$pink900": "#702459"
        },
        "space": {
            "$0": "0",
            "$1": "0.25rem",
            "$2": "0.5rem",
            "$3": "0.75rem",
            "$4": "1rem",
            "$5": "1.25rem",
            "$6": "1.5rem",
            "$8": "2rem",
            "$10": "2.5rem",
            "$12": "3rem",
            "$16": "4rem",
            "$20": "5rem",
            "$24": "6rem",
            "$32": "8rem",
            "$40": "10rem",
            "$48": "12rem",
            "$56": "14rem",
            "$64": "16rem",
            "$px": "1px"
        },
        "sizes": {
            "$0": "0",
            "$1": "0.25rem",
            "$2": "0.5rem",
            "$3": "0.75rem",
            "$4": "1rem",
            "$5": "1.25rem",
            "$6": "1.5rem",
            "$8": "2rem",
            "$10": "2.5rem",
            "$12": "3rem",
            "$16": "4rem",
            "$20": "5rem",
            "$24": "6rem",
            "$32": "8rem",
            "$40": "10rem",
            "$48": "12rem",
            "$56": "14rem",
            "$64": "16rem",
            "$auto": "auto",
            "$px": "1px",
            "$1/2": "50%",
            "$1/3": "33.333333%",
            "$2/3": "66.666667%",
            "$1/4": "25%",
            "$2/4": "50%",
            "$3/4": "75%",
            "$1/5": "20%",
            "$2/5": "40%",
            "$3/5": "60%",
            "$4/5": "80%",
            "$1/6": "16.666667%",
            "$2/6": "33.333333%",
            "$3/6": "50%",
            "$4/6": "66.666667%",
            "$5/6": "83.333333%",
            "$1/12": "8.333333%",
            "$2/12": "16.666667%",
            "$3/12": "25%",
            "$4/12": "33.333333%",
            "$5/12": "41.666667%",
            "$6/12": "50%",
            "$7/12": "58.333333%",
            "$8/12": "66.666667%",
            "$9/12": "75%",
            "$10/12": "83.333333%",
            "$11/12": "91.666667%",
            "$full": "100%",
            "$screen": "100vw"
        },
        "fonts": {
            "sans": "system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
            "serif": "Georgia,Cambria,\"Times New Roman\",Times,serif",
            "mono": "Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace"
        },
        "fontSizes": {
            "$xs": "0.75rem",
            "$sm": "0.875rem",
            "$base": "1rem",
            "$lg": "1.125rem",
            "$xl": "1.25rem",
            "$2xl": "1.5rem",
            "$3xl": "1.875rem",
            "$4xl": "2.25rem",
            "$5xl": "3rem",
            "$6xl": "4rem"
        },
        "fontWeights": {
            "$hairline": "100",
            "$thin": "200",
            "$light": "300",
            "$normal": "400",
            "$medium": "500",
            "$semibold": "600",
            "$bold": "700",
            "$extrabold": "800",
            "$black": "900"
        },
        "lineHeights": {
            "$3": ".75rem",
            "$4": "1rem",
            "$5": "1.25rem",
            "$6": "1.5rem",
            "$7": "1.75rem",
            "$8": "2rem",
            "$9": "2.25rem",
            "$10": "2.5rem",
            "$none": "1",
            "$tight": "1.25",
            "$snug": "1.375",
            "$normal": "1.5",
            "$relaxed": "1.625",
            "$loose": "2"
        },
        "letterSpacings": {
            "$tighter": "-0.05em",
            "$tight": "-0.025em",
            "$normal": "0",
            "$wide": "0.025em",
            "$wider": "0.05em",
            "$widest": "0.1em"
        },
        "borderWidths": {
            "$0": "0",
            "$2": "2px",
            "$4": "4px",
            "$8": "8px",
            "$default": "1px"
        },
        "radii": {
            "$none": "0",
            "$sm": "0.125rem",
            "$default": "0.25rem",
            "$md": "0.375rem",
            "$lg": "0.5rem",
            "$full": "9999px"
        },
        "shadows": {
            "$xs": "0 0 0 1px rgba(0, 0, 0, 0.05)",
            "$sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            "$default": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            "$md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            "$lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            "$xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            "$2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            "$inner": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
            "$outline": "0 0 0 3px rgba(66, 153, 225, 0.5)",
            "$none": "none"
        },
        "zIndices": {
            "$0": "0",
            "$10": "10",
            "$20": "20",
            "$30": "30",
            "$40": "40",
            "$50": "50",
            "$auto": "auto"
        }
    },
    "breakpoints": {
        "$sm": "640px",
        "$md": "768px",
        "$lg": "1024px",
        "$xl": "1280px"
    }
};

function refit_keys(o, map) {
    var build, key, destKey, value;
    build = {};
    for (key in o) {
        // Get the destination key
        destKey = map(key) || key;
        // Get the value
        value = o[key];
        // If this is an object, recurse
        if (typeof value === "object") {
            value = refit_keys(value, map);
        }
        // Set it on the result using the destination key
        build[destKey] = value;
    }
    return build;
}
function usePrefix(prefix, config) {
    return __assign(__assign({}, config), { tokens: refit_keys(config.tokens, function (key) { return key.replace('$', prefix); }) });
}
function prepConfig(config) {
    var breakpoints = config.breakpoints;
    var breakpointFunctions = {};
    var _loop_1 = function (size) {
        breakpointFunctions[size] = function (rule) { return "@media (min-width: " + breakpoints[size] + ") { " + rule + " }"; };
    };
    for (var size in breakpoints) {
        _loop_1(size);
    }
    return __assign(__assign({}, config), { breakpoints: breakpointFunctions });
}
var stitchwindConfig = prepConfig(config);

export default stitchwindConfig;
export { usePrefix };
