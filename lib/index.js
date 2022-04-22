'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var theme = {
    color: {
        // Color Scheme
        primary: '#215aff',
        primary_variant: '#1781ff',
        secondary: '#0f194b',
        secondary_variant: '#1e2642',
        error: '#fe5454',
        success: '#48c88f',
        background: '#f0eff4',
        title: '#707070',
        // Primary
        primary_050: '#b7c9ff',
        primary_100: '#88a6ff',
        primary_200: '#5e85fb',
        primary_300: '#4775fe',
        primary_400: '#4775fe',
        primary_500: '#215aff',
        primary_600: '#134fff',
        primary_700: '#032dff',
        primary_800: '#0e1fff',
        primary_900: '#0b03ff',
        // Secondary
        secondary_050: '#3f4970',
        secondary_100: '#283257',
        secondary_200: '#1e2642',
        secondary_300: '#121b3a',
        secondary_400: '#0f194b',
        secondary_500: '#090033',
        secondary_600: '#080129',
        secondary_700: '#060020',
        secondary_800: '#040016',
        secondary_900: '#02000c',
        // Neutral
        white: '#ffffff',
        gray_default: '#a8a8a8',
        gray_500: '#ecedef',
        gray_600: '#dfe1e4',
        gray_700: '#d3d6da',
        gray_800: '#b1b8be',
        gray_900: '#929aa3',
        black_500: '#747c87',
        black_600: '#565e6d',
        black_700: '#374050',
        black_800: '#152235',
        black_900: '#051225',
        black: '#000000',
    },
    font: {
        family: {
            default: 'Avenir Next LT Pro Regular, Arial, Helvetica, sans-serif',
            defaultBold: 'Avenir Next LT Pro Bold, Arial, Helvetica, sans-serif',
            defaultItalico: 'Avenir Next LT Pro It',
            primary: "'Open Sans', sans-serif",
            secondary: "'Montserrat', sans-serif",
        },
        weight: {
            light: '300',
            regular: '400',
            bold: '700',
            extrabold: '800',
            black: '900',
        },
        size: {
            xsmall: '1.2rem',
            small: '1.4rem',
            medium: '1.6rem',
            large: '2.0rem',
            xlarge: '2.4rem',
            xxlarge: '2.8rem',
            big: '3.2rem',
            xbig: '4.0rem',
            xxbig: '4.8rem',
            huge: '5.2rem',
        },
    },
    spacings: {
        xxsmall: '0.8rem',
        xsmall: '1.6rem',
        small: '2.4rem',
        medium: '3.2rem',
        large: '4.0rem',
        xlarge: '4.8rem',
        xxlarge: '5.6rem',
    },
    breakpoints: {
        xmodile: '320px',
        modile: '425px',
        tablet: '768px',
        desktop: '1024px',
        hd: '1440px',
    },
    layers: {
        base: 10,
        menu: 20,
        overlay: 30,
        modal: 40,
        alwayOnTop: 50,
    },
    transition: {
        default: '0.3s ease-in-out',
        fast: '0.1s ease-in-out',
    },
    border: {
        radius: '0.8rem',
        circle: '50%',
    },
};

/******************************************************************************
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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Wrapper = styled__default["default"].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  width: 100%;\n  height: 0.2rem;\n  margin-top: ", ";\n  margin-bottom: ", ";\n  margin-left: auto;\n  margin-right: auto;\n  background-color: ", ";\n  border: 0;\n"], ["\n  width: 100%;\n  height: 0.2rem;\n  margin-top: ", ";\n  margin-bottom: ", ";\n  margin-left: auto;\n  margin-right: auto;\n  background-color: ", ";\n  border: 0;\n"])), function (_a) {
    var marginTop = _a.marginTop;
    return marginTop || theme.spacings.xxsmall;
}, function (_a) {
    var marginBottom = _a.marginBottom;
    return marginBottom || theme.spacings.xxsmall;
}, function (_a) {
    var color = _a.color;
    return color || theme.color.black_800;
});
var templateObject_1$1;

var Separator = function (_a) {
    var color = _a.color, marginTop = _a.marginTop, marginBottom = _a.marginBottom, props = __rest(_a, ["color", "marginTop", "marginBottom"]);
    return (React__default["default"].createElement(Wrapper, __assign({ color: color, marginTop: marginTop, marginBottom: marginBottom }, props)));
};

var mediaFont = function () { return styled.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @media (max-width: ", ") {\n    font-size: ", ";\n  }\n"], ["\n  @media (max-width: ", ") {\n    font-size: ", ";\n  }\n"])), theme.breakpoints.tablet, theme.font.size.xxlarge); };
var titleSize = {
    small: function () { return styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-size: ", ";\n  "], ["\n    font-size: ", ";\n  "])), theme.font.size.small); },
    medium: function () { return styled.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-size: ", ";\n  "], ["\n    font-size: ", ";\n  "])), theme.font.size.medium); },
    large: function () { return styled.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    font-size: ", ";\n  "], ["\n    font-size: ", ";\n  "])), theme.font.size.large); },
    xlarge: function () { return styled.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    font-size: ", ";\n  "], ["\n    font-size: ", ";\n  "])), theme.font.size.xlarge); },
    big: function () { return styled.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    font-size: ", ";\n    ", ";\n  "], ["\n    font-size: ", ";\n    ", ";\n  "])), theme.font.size.big, mediaFont()); },
};
var titleColor = {
    white: function () { return styled.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    color: ", ";\n  "], ["\n    color: ", ";\n  "])), theme.color.white); },
    gray: function () { return styled.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    color: ", ";\n  "], ["\n    color: ", ";\n  "])), theme.color.title); },
    black: function () { return styled.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    color: ", ";\n  "], ["\n    color: ", ";\n  "])), theme.color.black_700); },
};
var titleCase = function (uppercase) { return styled.css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  text-transform: ", ";\n"], ["\n  text-transform: ", ";\n"])), uppercase ? 'uppercase' : 'none'); };
var Title = styled__default["default"].h1(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var color = _a.color, size = _a.size, uppercase = _a.uppercase, bold = _a.bold;
    return styled.css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    font-family: ", ";\n    ", ";\n    ", ";\n    ", ";\n  "], ["\n    font-family: ", ";\n    ", ";\n    ", ";\n    ", ";\n  "])), bold
        ? theme.font.family.defaultBold
        : theme.font.family.default, titleColor[color](), titleSize[size](), titleCase(uppercase));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;

var Heading = function (_a) {
    var children = _a.children, _b = _a.as, as = _b === void 0 ? 'h1' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, _d = _a.uppercase, uppercase = _d === void 0 ? false : _d, _e = _a.bold, bold = _e === void 0 ? false : _e, _f = _a.color, color = _f === void 0 ? 'gray' : _f, props = __rest(_a, ["children", "as", "size", "uppercase", "bold", "color"]);
    return (React__default["default"].createElement(Title, __assign({ as: as, size: size, uppercase: uppercase, bold: bold, color: color }, props), children));
};

exports.Heading = Heading;
exports.Separator = Separator;
exports.theme = theme;
//# sourceMappingURL=index.js.map
