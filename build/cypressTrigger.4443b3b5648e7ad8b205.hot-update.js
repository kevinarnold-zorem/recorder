"use strict";
self["webpackHotUpdatedeploysentinel_recorder"]("cypressTrigger",{

/***/ "./src/pages/builders/index.ts":
/*!*************************************!*\
  !*** ./src/pages/builders/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "truncateText": () => (/* binding */ truncateText),
/* harmony export */   "isActionStateful": () => (/* binding */ isActionStateful),
/* harmony export */   "ActionContext": () => (/* binding */ ActionContext),
/* harmony export */   "ScriptBuilder": () => (/* binding */ ScriptBuilder),
/* harmony export */   "PlaywrightScriptBuilder": () => (/* binding */ PlaywrightScriptBuilder),
/* harmony export */   "PuppeteerScriptBuilder": () => (/* binding */ PuppeteerScriptBuilder),
/* harmony export */   "GherkinScriptBuilder": () => (/* binding */ GherkinScriptBuilder),
/* harmony export */   "LocatorsScriptBuilder": () => (/* binding */ LocatorsScriptBuilder),
/* harmony export */   "CypressScriptBuilder": () => (/* binding */ CypressScriptBuilder),
/* harmony export */   "genCode": () => (/* binding */ genCode)
/* harmony export */ });
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selector */ "./src/pages/builders/selector.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/pages/types/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};


var FILLABLE_INPUT_TYPES = [
    '',
    'date',
    'datetime',
    'datetime-local',
    'email',
    'month',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
// only used in ActionContext
var truncateText = function (str, maxLen) {
    return "" + str.substring(0, maxLen) + (str.length > maxLen ? '...' : '');
};
var isActionStateful = function (action) {
    return action.tagName === _types__WEBPACK_IMPORTED_MODULE_1__.TagName.TextArea;
};
var ActionContext = /** @class */ (function (_super) {
    __extends(ActionContext, _super);
    function ActionContext(action, scriptType, actionState) {
        var _this = _super.call(this) || this;
        _this.action = action;
        _this.actionState = actionState;
        _this.scriptType = scriptType;
        return _this;
    }
    ActionContext.prototype.getType = function () {
        return this.action.type;
    };
    ActionContext.prototype.getTagName = function () {
        return this.action.tagName;
    };
    ActionContext.prototype.getAttributes = function () {
        return this.action.attributes;
    };
    ActionContext.prototype.getValue = function () {
        return this.action.value;
    };
    ActionContext.prototype.getInputType = function () {
        return this.action.inputType;
    };
    // (FIXME: shouldn't expose action)
    ActionContext.prototype.getAction = function () {
        return this.action;
    };
    ActionContext.prototype.getActionState = function () {
        return this.actionState;
    };
    ActionContext.prototype.getDescription = function () {
        var _a = this.action, type = _a.type, selectors = _a.selectors, tagName = _a.tagName, value = _a.value;
        switch (type) {
            case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.Click:
                return "Click on <" + tagName.toLowerCase() + "> " + (selectors.text != null && selectors.text.length > 0
                    ? "\"" + truncateText(selectors.text.replace(/\s/g, ' '), 25) + "\""
                    : (0,_selector__WEBPACK_IMPORTED_MODULE_0__.getBestSelectorForAction)(this.action, this.scriptType));
            case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.DblClick:
                return "DblClick on <" + tagName.toLowerCase() + "> " + (selectors.text != null && selectors.text.length > 0
                    ? "\"" + truncateText(selectors.text.replace(/\s/g, ' '), 25) + "\""
                    : (0,_selector__WEBPACK_IMPORTED_MODULE_0__.getBestSelectorForAction)(this.action, this.scriptType));
            case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.Hover:
                return "Hover over <" + tagName.toLowerCase() + "> " + (selectors.text != null && selectors.text.length > 0
                    ? "\"" + truncateText(selectors.text.replace(/\s/g, ' '), 25) + "\""
                    : (0,_selector__WEBPACK_IMPORTED_MODULE_0__.getBestSelectorForAction)(this.action, this.scriptType));
            case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.Move:
                return "Move to <" + tagName.toLowerCase() + "> " + (selectors.text != null && selectors.text.length > 0
                    ? "\"" + truncateText(selectors.text.replace(/\s/g, ' '), 25) + "\""
                    : (0,_selector__WEBPACK_IMPORTED_MODULE_0__.getBestSelectorForAction)(this.action, this.scriptType));
            case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.Input:
                return "Fill " + truncateText(JSON.stringify(value !== null && value !== void 0 ? value : ''), 16) + " on <" + tagName.toLowerCase() + "> " + (0,_selector__WEBPACK_IMPORTED_MODULE_0__.getBestSelectorForAction)(this.action, this.scriptType);
            case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.Keydown:
                return "Press " + this.action.key + " on " + tagName.toLowerCase();
            case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.Load:
                return "Load \"" + this.action.url + "\"";
            case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.Resize:
                return "Resize window to " + this.action.width + " x " + this.action.height;
            case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.Wheel:
                return "Scroll wheel by X:" + this.action.deltaX + ", Y:" + this.action.deltaY;
            case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.FullScreenshot:
                return "Take full page screenshot";
            case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.AwaitText:
                return "Wait for text " + truncateText(JSON.stringify(this.action.text), 25) + " to appear";
            case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.DragAndDrop:
                return "Drag n drop " + (0,_selector__WEBPACK_IMPORTED_MODULE_0__.getBestSelectorForAction)(this.action, this.scriptType) + " from (" + this.action.sourceX + ", " + this.action.sourceY + ") to (" + this.action.targetX + ", " + this.action.targetY + ")";
            default:
                return '';
        }
    };
    ActionContext.prototype.getBestSelector = function () {
        return (0,_selector__WEBPACK_IMPORTED_MODULE_0__.getBestSelectorForAction)(this.action, this.scriptType);
    };
    return ActionContext;
}(_types__WEBPACK_IMPORTED_MODULE_1__.BaseAction));

var ScriptBuilder = /** @class */ (function () {
    function ScriptBuilder(showComments) {
        var _this = this;
        this.transformActionIntoCodes = function (actionContext) {
            var _a, _b;
            if (_this.showComments) {
                var actionDescription = actionContext.getDescription();
                _this.pushComments("// " + actionDescription);
            }
            var bestSelector = actionContext.getBestSelector();
            var tagName = actionContext.getTagName();
            var attributes = (_a = actionContext.getAttributes()) !== null && _a !== void 0 ? _a : {};
            var value = actionContext.getValue();
            var inputType = actionContext.getInputType();
            var type = actionContext.getType();
            var causesNavigation = actionContext.getActionState().causesNavigation;
            // (FIXME: getters for special fields)
            var action = actionContext.getAction();
            switch (actionContext.getType()) {
                case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.DblClick:
                    _this.dblclick(bestSelector, causesNavigation, attributes);
                    break;
                case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.Click:
                    _this.click(bestSelector, causesNavigation, tagName, attributes);
                    break;
                case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.Hover:
                    _this.hover(bestSelector, causesNavigation, attributes);
                    break;
                case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.Move:
                    _this.move(bestSelector, causesNavigation);
                    break;
                case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.Keydown:
                    _this.keydown(bestSelector, (_b = action.key) !== null && _b !== void 0 ? _b : '', causesNavigation);
                    break;
                case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.Input: {
                    if (tagName === _types__WEBPACK_IMPORTED_MODULE_1__.TagName.Select) {
                        _this.select(bestSelector, value !== null && value !== void 0 ? value : '', causesNavigation, attributes);
                    }
                    else if (
                    // If the input is "fillable" or a text area
                    tagName === _types__WEBPACK_IMPORTED_MODULE_1__.TagName.Input &&
                        inputType != null &&
                        FILLABLE_INPUT_TYPES.includes(inputType)) {
                        // Do more actionability checks
                        _this.fill(bestSelector, value !== null && value !== void 0 ? value : '', causesNavigation, attributes);
                    }
                    else if (tagName === _types__WEBPACK_IMPORTED_MODULE_1__.TagName.TextArea) {
                        _this.fill(bestSelector, value !== null && value !== void 0 ? value : '', causesNavigation, attributes);
                    }
                    else {
                        _this.type(bestSelector, value !== null && value !== void 0 ? value : '', causesNavigation, attributes);
                    }
                    break;
                }
                case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.Load:
                    _this.load(action.url);
                    break;
                case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.Resize:
                    _this.resize(action.width, action.height);
                    break;
                case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.Wheel:
                    _this.wheel(action.deltaX, action.deltaY, action.pageXOffset, action.pageYOffset);
                    break;
                case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.FullScreenshot:
                    _this.fullScreenshot();
                    break;
                case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.AwaitText:
                    _this.awaitText(action.text);
                    break;
                case _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.DragAndDrop:
                    _this.dragAndDrop(action.sourceX, action.sourceY, action.targetX, action.targetY);
                    break;
                default:
                    break;
            }
        };
        this.pushComments = function (comments) {
            _this.codes.push("\n  " + comments);
            return _this;
        };
        this.pushCodes = function (codes) {
            _this.codes.push("\n  " + codes + "\n");
            return _this;
        };
        this.pushActionContext = function (actionContext) {
            _this.actionContexts.push(actionContext);
        };
        this.buildCodes = function () {
            var e_1, _a;
            var prevActionContext;
            try {
                for (var _b = __values(_this.actionContexts), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var actionContext = _c.value;
                    if (!actionContext.getActionState().isStateful) {
                        if (prevActionContext !== undefined &&
                            prevActionContext.getActionState().isStateful) {
                            _this.transformActionIntoCodes(prevActionContext);
                        }
                        _this.transformActionIntoCodes(actionContext);
                    }
                    prevActionContext = actionContext;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // edge case
            if (prevActionContext !== undefined &&
                prevActionContext.getActionState().isStateful) {
                _this.transformActionIntoCodes(prevActionContext);
            }
            return _this;
        };
        // for test
        this.getLatestCode = function () { return _this.codes[_this.codes.length - 1]; };
        this.codes = [];
        this.actionContexts = [];
        this.showComments = showComments;
    }
    return ScriptBuilder;
}());

var PlaywrightScriptBuilder = /** @class */ (function (_super) {
    __extends(PlaywrightScriptBuilder, _super);
    function PlaywrightScriptBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.click = function (selector, causesNavigation) {
            var actionStr = "page.click('" + selector + "')";
            var action = causesNavigation
                ? _this.waitForActionAndNavigation(actionStr)
                : "await " + actionStr + ";";
            _this.pushCodes(action);
            return _this;
        };
        _this.dblclick = function (selector, causesNavigation) {
            var actionStr = "page.dbclick('" + selector + "')";
            var action = causesNavigation
                ? _this.waitForActionAndNavigation(actionStr)
                : "await " + actionStr + ";";
            _this.pushCodes(action);
            return _this;
        };
        _this.hover = function (selector, causesNavigation) {
            var actionStr = "page.hover('" + selector + "')";
            var action = causesNavigation
                ? _this.waitForActionAndNavigation(actionStr)
                : "await " + actionStr + ";";
            _this.pushCodes(action);
            return _this;
        };
        _this.move = function (selector, causesNavigation) {
            var actionStr = "page.hover('" + selector + "')";
            var action = causesNavigation
                ? _this.waitForActionAndNavigation(actionStr)
                : "await " + actionStr + ";";
            _this.pushCodes(action);
            return _this;
        };
        _this.load = function (url) {
            _this.pushCodes("await page.goto('" + url + "');");
            return _this;
        };
        _this.resize = function (width, height) {
            _this.pushCodes("await page.setViewportSize({ width: " + width + ", height: " + height + " });");
            return _this;
        };
        _this.fill = function (selector, value, causesNavigation) {
            var actionStr = "page.fill('" + selector + "', " + JSON.stringify(value) + ")";
            var action = causesNavigation
                ? _this.waitForActionAndNavigation(actionStr)
                : "await " + actionStr + ";";
            _this.pushCodes(action);
            return _this;
        };
        _this.type = function (selector, value, causesNavigation) {
            var actionStr = "page.type('" + selector + "', " + JSON.stringify(value) + ")";
            var action = causesNavigation
                ? _this.waitForActionAndNavigation(actionStr)
                : "await " + actionStr + ";";
            _this.pushCodes(action);
            return _this;
        };
        _this.select = function (selector, option, causesNavigation) {
            var actionStr = "page.selectOption('" + selector + "', '" + option + "')";
            var action = causesNavigation
                ? _this.waitForActionAndNavigation(actionStr)
                : "await " + actionStr + ";";
            _this.pushCodes(action);
            return _this;
        };
        _this.keydown = function (selector, key, causesNavigation) {
            var actionStr = "page.press('" + selector + "', '" + key + "')";
            var action = causesNavigation
                ? _this.waitForActionAndNavigation(actionStr)
                : "await " + actionStr + ";";
            _this.pushCodes(action);
            return _this;
        };
        _this.wheel = function (deltaX, deltaY) {
            _this.pushCodes("await page.mouse.wheel(" + Math.floor(deltaX) + ", " + Math.floor(deltaY) + ");");
            return _this;
        };
        _this.fullScreenshot = function () {
            _this.pushCodes("await page.screenshot({ path: 'screenshot.png', fullPage: true });");
            return _this;
        };
        _this.awaitText = function (text) {
            _this.pushCodes("await page.waitForSelector('text=" + text + "');");
            return _this;
        };
        _this.dragAndDrop = function (sourceX, sourceY, targetX, targetY) {
            _this.pushCodes([
                "await page.mouse.move(" + sourceX + ", " + sourceY + ");",
                '  await page.mouse.down();',
                "  await page.mouse.move(" + targetX + ", " + targetY + ");",
                '  await page.mouse.up();',
            ].join('\n'));
            return _this;
        };
        _this.buildScript = function () {
            return "import { test, expect } from '@playwright/test';\n\ntest('Written with DeploySentinel Recorder', async ({ page }) => {" + _this.codes.join('') + "});";
        };
        return _this;
    }
    PlaywrightScriptBuilder.prototype.waitForNavigation = function () {
        return "page.waitForNavigation()";
    };
    PlaywrightScriptBuilder.prototype.waitForActionAndNavigation = function (action) {
        return "await Promise.all([\n    " + action + ",\n    " + this.waitForNavigation() + "\n  ]);";
    };
    return PlaywrightScriptBuilder;
}(ScriptBuilder));

var PuppeteerScriptBuilder = /** @class */ (function (_super) {
    __extends(PuppeteerScriptBuilder, _super);
    function PuppeteerScriptBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.click = function (selector, causesNavigation) {
            var pageClick = "page.click('" + selector + "')";
            if (causesNavigation) {
                _this.pushCodes(_this.waitForSelectorAndNavigation(selector, pageClick));
            }
            else {
                _this.pushCodes("await " + _this.waitForSelector(selector) + ";\n  await " + pageClick + ";");
            }
            return _this;
        };
        _this.dblclick = function (selector, causesNavigation) {
            var pageClick = "page.dblclick('" + selector + "')";
            if (causesNavigation) {
                _this.pushCodes(_this.waitForSelectorAndNavigation(selector, pageClick));
            }
            else {
                _this.pushCodes("await " + _this.waitForSelector(selector) + ";\n  await " + pageClick + ";");
            }
            return _this;
        };
        _this.hover = function (selector, causesNavigation) {
            var pageHover = "page.hover('" + selector + "')";
            if (causesNavigation) {
                _this.pushCodes(_this.waitForSelectorAndNavigation(selector, pageHover));
            }
            else {
                _this.pushCodes("await " + _this.waitForSelector(selector) + ";\n  await " + pageHover + ";");
            }
            return _this;
        };
        _this.move = function (selector, causesNavigation) {
            var pageHover = "page.move('" + selector + "')";
            if (causesNavigation) {
                _this.pushCodes(_this.waitForSelectorAndNavigation(selector, pageHover));
            }
            else {
                _this.pushCodes("await " + _this.waitForSelector(selector) + ";\n  await " + pageHover + ";");
            }
            return _this;
        };
        _this.load = function (url) {
            _this.pushCodes("await page.goto('" + url + "');");
            return _this;
        };
        _this.resize = function (width, height) {
            _this.pushCodes("await page.setViewport({ width: " + width + ", height: " + height + " });");
            return _this;
        };
        _this.type = function (selector, value, causesNavigation) {
            var pageType = "page.type('" + selector + "', " + JSON.stringify(value) + ")";
            if (causesNavigation) {
                _this.pushCodes(_this.waitForSelectorAndNavigation(selector, pageType));
            }
            else {
                _this.pushCodes("await " + _this.waitForSelector(selector) + ";\n  await " + pageType + ";");
            }
            return _this;
        };
        // Puppeteer doesn't support `fill` so we'll do our own actionability checks
        // but still type
        _this.fill = function (selector, value, causesNavigation) {
            var pageType = "page.type('" + selector + "', " + JSON.stringify(value) + ")";
            if (causesNavigation) {
                _this.pushCodes(_this.waitForSelectorAndNavigation(selector + ":not([disabled])", pageType));
            }
            else {
                // Do more actionability checks
                _this.pushCodes("await " + _this.waitForSelector(selector + ":not([disabled])") + ";\n  await " + pageType + ";");
            }
            return _this;
        };
        _this.select = function (selector, option, causesNavigation) {
            var pageSelectOption = "page.select('" + selector + "', '" + option + "')";
            if (causesNavigation) {
                _this.pushCodes(_this.waitForSelectorAndNavigation(selector, pageSelectOption));
            }
            else {
                _this.pushCodes("await " + _this.waitForSelector(selector) + ";\n  await " + pageSelectOption + ";");
            }
            return _this;
        };
        _this.keydown = function (selector, key, causesNavigation) {
            var pagePress = "page.keyboard.press('" + key + "')";
            if (causesNavigation) {
                _this.pushCodes(_this.waitForSelectorAndNavigation(selector, pagePress));
            }
            else {
                _this.pushCodes("await page.waitForSelector('" + selector + "');\n  await page.keyboard.press('" + key + "');");
            }
            return _this;
        };
        _this.wheel = function (deltaX, deltaY) {
            _this.pushCodes("await page.evaluate(() => window.scrollBy(" + deltaX + ", " + deltaY + "));");
            return _this;
        };
        _this.fullScreenshot = function () {
            _this.pushCodes("await page.screenshot({ path: 'screenshot.png', fullPage: true });");
            return _this;
        };
        _this.awaitText = function (text) {
            _this.pushCodes("await page.waitForFunction(\"document.body.innerText.includes('" + text + "')\");");
            return _this;
        };
        _this.dragAndDrop = function (sourceX, sourceY, targetX, targetY) {
            _this.pushCodes([
                "await page.mouse.move(" + sourceX + ", " + sourceY + ");",
                '  await page.mouse.down();',
                "  await page.mouse.move(" + targetX + ", " + targetY + ");",
                '  await page.mouse.up();',
            ].join('\n'));
            return _this;
        };
        _this.buildScript = function () {
            return "const puppeteer = require('puppeteer');\n(async () => {\n  const browser = await puppeteer.launch({\n    // headless: false, slowMo: 100, // Uncomment to visualize test\n  });\n  const page = await browser.newPage();\n" + _this.codes.join('') + "\n  await browser.close();\n})();";
        };
        return _this;
    }
    PuppeteerScriptBuilder.prototype.waitForSelector = function (selector) {
        return "page.waitForSelector('" + selector + "')";
    };
    PuppeteerScriptBuilder.prototype.waitForNavigation = function () {
        return "page.waitForNavigation()";
    };
    PuppeteerScriptBuilder.prototype.waitForSelectorAndNavigation = function (selector, action) {
        return "await " + this.waitForSelector(selector) + ";\n  await Promise.all([\n    " + action + ",\n    " + this.waitForNavigation() + "\n  ]);";
    };
    return PuppeteerScriptBuilder;
}(ScriptBuilder));

var GherkinScriptBuilder = /** @class */ (function (_super) {
    __extends(GherkinScriptBuilder, _super);
    function GherkinScriptBuilder() {
        /*private formatAttributes(attributes: { [key: string]: string } = {}): string {
          return Object.entries(attributes)
            .map(([key, value]) => `${key}="${value}"`)
            .join(' '); // Retorna los atributos en formato `key="value"`
        }*/
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.featureHeader = "\n#language: es\nCaracter\u00EDstica: Titulo del Scenario\n\n  @untag\n  Escenario: Nombre del Scenario - no voy hacer todo";
        _this.load = function (url) {
            _this.pushCodes("Dado que estoy en la p\u00E1gina '" + url + "'");
            return _this;
        };
        _this.click = function (selector, causesNavigation, tagname, atributos) {
            var attributes = _this.formatAttributes(atributos); // Obtenemos todos los atributos
            //const step = `Y hago clic en el ${tagname.toLowerCase()} '${selector}' con atributos ${attributes}`;
            var step = "Y hago clic en el elemento '" + attributes + "'";
            if (causesNavigation) {
                _this.pushCodes(step);
                _this.pushCodes(_this.waitForNavigation());
            }
            else {
                _this.pushCodes(step);
            }
            return _this;
        };
        _this.dblclick = function (selector, causesNavigation, atributos) {
            var attributes = _this.formatAttributes(atributos); // Obtenemos todos los atributos
            var step = "Y hago doble click en el elemento '" + attributes + "'";
            if (causesNavigation) {
                _this.pushCodes(step);
                _this.pushCodes(_this.waitForNavigation());
            }
            else {
                _this.pushCodes(step);
            }
            return _this;
        };
        _this.type = function (selector, value, causesNavigation, atributos) {
            var step;
            var attributes = _this.formatAttributes(atributos); // Obtenemos todos los atributos
            if (value.includes('fakepath')) {
                value = value
                    .replace('C:', '')
                    .replace('fakepath', '')
                    .replace(/\\/g, '');
                step = "Y adjunto el archivo '" + value + "' al elemento '" + selector + "'";
            }
            else {
                step = "Y relleno el elemento '" + attributes + "' con el valor '" + value + "'";
            }
            if (causesNavigation) {
                _this.pushCodes(step);
                _this.pushCodes(_this.waitForNavigation());
            }
            else {
                _this.pushCodes(step);
            }
            return _this;
        };
        _this.resize = function (width, height) {
            //this.pushCodes(`# Cambiar el tamaño de la ventana a ${width}x${height}\nY cambio el tamaño de la ventana a ${width}x${height}`);
            return _this;
        };
        _this.hover = function (selector, causesNavigation, atributos) {
            var attributes = _this.formatAttributes(atributos); // Obtenemos todos los atributos
            var step = "Y hago hover en el elemento '" + attributes + "'";
            if (causesNavigation) {
                _this.pushCodes(step);
                _this.pushCodes(_this.waitForNavigation());
            }
            else {
                _this.pushCodes(step);
            }
            return _this;
        };
        _this.move = function (selector, causesNavigation) {
            var step = "Y desplazo la pagina al elemento 'WebElement'";
            if (causesNavigation) {
                _this.pushCodes(step);
                _this.pushCodes(_this.waitForNavigation());
            }
            else {
                _this.pushCodes(step);
            }
            return _this;
        };
        _this.fill = function (selector, value, causesNavigation, atributos) {
            var step;
            var attributes = _this.formatAttributes(atributos); // Obtenemos todos los atributos
            if (value.includes('fakepath')) {
                value = value
                    .replace('C:', '')
                    .replace('fakepath', '')
                    .replace(/\\/g, '');
                step = "Y adjunto el archivo '" + value + "' al elemento '" + attributes + "'";
            }
            else {
                step = "Y relleno el elemento '" + attributes + "' con el valor '" + value + "'";
            }
            if (causesNavigation) {
                _this.pushCodes(step);
                _this.pushCodes(_this.waitForNavigation());
            }
            else {
                _this.pushCodes(step);
            }
            return _this;
        };
        _this.keydown = function (selector, key, causesNavigation) {
            /*const step = `# Presionar la tecla '${key}' en el elemento '${selector}'\nY presiono la tecla '${key}' en el elemento '${selector}'`;
            if (causesNavigation) {
              this.pushCodes(step);
              this.pushCodes(this.waitForNavigation());
            } else {
              this.pushCodes(step);
            }*/
            return _this;
        };
        _this.select = function (selector, option, causesNavigation, atributos) {
            var attributes = _this.formatAttributes(atributos); // Obtenemos todos los atributos
            var step = "se pulsa sobre el desplegable '" + attributes + "' y selecciona el valor '" + option + "'";
            if (causesNavigation) {
                _this.pushCodes(step);
                _this.pushCodes(_this.waitForNavigation());
            }
            else {
                _this.pushCodes(step);
            }
            return _this;
        };
        _this.wheel = function (deltaX, deltaY) {
            if (deltaY > 0) {
                _this.pushCodes("Y desplazo la p\u00E1gina '" + Math.abs(deltaY) + "' hacia abajo.");
            }
            else if (deltaY < 0) {
                _this.pushCodes("Y desplazo la p\u00E1gina '" + Math.abs(deltaY) + "' hacia arriba.");
            }
            return _this;
        };
        _this.fullScreenshot = function () {
            _this.pushCodes("Tomo una captura de pantalla de la p\u00E1gina completa.");
            return _this;
        };
        _this.awaitText = function (text) {
            _this.pushCodes("Espero que el texto '" + text + "' est\u00E9 presente en la p\u00E1gina.");
            return _this;
        };
        _this.dragAndDrop = function (sourceX, sourceY, targetX, targetY) {
            _this.pushCodes("Arrastro el elemento desde (" + sourceX + ", " + sourceY + ") hasta (" + targetX + ", " + targetY + ")");
            return _this;
        };
        _this.buildScript = function () {
            var formattedCodes = _this.codes
                .filter(function (code) { return !code.trim().startsWith('//'); })
                .map(function (code, index) {
                return code;
            })
                .join('');
            var script = "" + _this.featureHeader + formattedCodes;
            return script;
        };
        return _this;
    }
    GherkinScriptBuilder.prototype.formatAttributes = function (attributes) {
        var e_2, _a;
        var priorityAttributes = [
            'value',
            'placeholder',
            'name',
            'title',
            'alt',
            'aria-label',
            'class',
            'data-*',
        ];
        try {
            for (var priorityAttributes_1 = __values(priorityAttributes), priorityAttributes_1_1 = priorityAttributes_1.next(); !priorityAttributes_1_1.done; priorityAttributes_1_1 = priorityAttributes_1.next()) {
                var attr = priorityAttributes_1_1.value;
                if (attr === 'data-*') {
                    // Devuelve el primer atributo data-* que encuentre
                    var dataAttr = Object.keys(attributes).find(function (key) {
                        return key.startsWith('data-');
                    });
                    if (dataAttr) {
                        return dataAttr + "=\"" + attributes[dataAttr] + "\"";
                    }
                }
                else if (attributes[attr]) {
                    return "" + attributes[attr];
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (priorityAttributes_1_1 && !priorityAttributes_1_1.done && (_a = priorityAttributes_1.return)) _a.call(priorityAttributes_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return 'WebElement';
    };
    GherkinScriptBuilder.prototype.waitForSelector = function (selector) {
        return "Espero que el elemento con el selector '" + selector + "' est\u00E9 visible.";
    };
    GherkinScriptBuilder.prototype.waitForNavigation = function () {
        //return `Espero que la página termine de cargar.`;
        return '';
    };
    return GherkinScriptBuilder;
}(ScriptBuilder));

var LocatorsScriptBuilder = /** @class */ (function (_super) {
    __extends(LocatorsScriptBuilder, _super);
    function LocatorsScriptBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.click = function (selector, causesNavigation, tagName, attributes) {
            var attr = _this.formatAttributes(attributes);
            var step = attr + ":@: " + selector;
            _this.pushCodes(step);
            return _this;
        };
        _this.dblclick = function (selector, causesNavigation, attributes) {
            var attr = _this.formatAttributes(attributes);
            var step = attr + ":@: " + selector;
            _this.pushCodes(step);
            return _this;
        };
        _this.type = function (selector, value, causesNavigation, attributes) {
            var attr = _this.formatAttributes(attributes);
            var step = attr + ":@: " + selector;
            _this.pushCodes(step);
            return _this;
        };
        _this.hover = function (selector, causesNavigation, attributes) {
            var attr = _this.formatAttributes(attributes);
            var step = attr + ":@: " + selector;
            _this.pushCodes(step);
            return _this;
        };
        _this.select = function (selector, option, causesNavigation, attributes) {
            var attr = _this.formatAttributes(attributes);
            var step = attr + ":@: " + selector;
            _this.pushCodes(step);
            return _this;
        };
        _this.move = function (selector, causesNavigation) {
            //this.pushCodes(`move:@: ${selector}`);
            return _this;
        };
        _this.load = function (url) {
            //this.pushCodes(`load:@: ${url}`);
            return _this;
        };
        _this.resize = function (width, height) {
            //this.pushCodes(`resize:@: ${width}x${height}`);
            return _this;
        };
        _this.fill = function (selector, value, causesNavigation, atributos) {
            var attr = _this.formatAttributes(atributos);
            var step = attr + ":@: " + selector;
            _this.pushCodes(step);
            return _this;
        };
        _this.keydown = function (selector, key, causesNavigation) {
            //this.pushCodes(`keydown:@: ${key} on ${selector}`);
            return _this;
        };
        _this.wheel = function (deltaX, deltaY, pageXOffset, pageYOffset) {
            //this.pushCodes(`wheel:@: deltaX:${deltaX}, deltaY:${deltaY}`);
            return _this;
        };
        _this.dragAndDrop = function (sourceX, sourceY, targetX, targetY) {
            //this.pushCodes(`dragAndDrop:@: from (${sourceX}, ${sourceY}) to (${targetX}, ${targetY})`);
            return _this;
        };
        _this.fullScreenshot = function () {
            //this.pushCodes('fullScreenshot:@: captured');
            return _this;
        };
        _this.awaitText = function (text) {
            //this.pushCodes(`awaitText:@: waiting for '${text}'`);
            return _this;
        };
        _this.buildScript = function () {
            var formattedCodes = _this.codes
                .filter(function (code) { return code.includes(':@:'); })
                .join('');
            return formattedCodes;
        };
        return _this;
    }
    LocatorsScriptBuilder.prototype.formatAttributes = function (attributes) {
        var e_3, _a;
        var priorityAttributes = [
            'value',
            'placeholder',
            'name',
            'title',
            'alt',
            'aria-label',
            'class',
            'data-*',
        ];
        try {
            for (var priorityAttributes_2 = __values(priorityAttributes), priorityAttributes_2_1 = priorityAttributes_2.next(); !priorityAttributes_2_1.done; priorityAttributes_2_1 = priorityAttributes_2.next()) {
                var attr = priorityAttributes_2_1.value;
                if (attr === 'data-*') {
                    // Devuelve el primer atributo data-* que encuentre
                    var dataAttr = Object.keys(attributes).find(function (key) {
                        return key.startsWith('data-');
                    });
                    if (dataAttr) {
                        return "" + dataAttr;
                    }
                }
                else if (attributes[attr]) {
                    return "" + attributes[attr];
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (priorityAttributes_2_1 && !priorityAttributes_2_1.done && (_a = priorityAttributes_2.return)) _a.call(priorityAttributes_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return 'element'; // Nombre predeterminado si no hay atributos
    };
    return LocatorsScriptBuilder;
}(ScriptBuilder));

var CypressScriptBuilder = /** @class */ (function (_super) {
    __extends(CypressScriptBuilder, _super);
    function CypressScriptBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Cypress automatically detects and waits for the page to finish loading
        _this.click = function (selector, causesNavigation) {
            _this.pushCodes("cy.get('" + selector + "').click();");
            return _this;
        };
        _this.dblclick = function (selector, causesNavigation) {
            _this.pushCodes("cy.get('" + selector + "').dbclick();");
            return _this;
        };
        _this.hover = function (selector, causesNavigation) {
            _this.pushCodes("cy.get('" + selector + "').trigger('mouseover');");
            return _this;
        };
        _this.move = function (selector, causesNavigation) {
            _this.pushCodes("cy.get('" + selector + "').trigger('mouseover');");
            return _this;
        };
        _this.load = function (url) {
            _this.pushCodes("cy.visit('" + url + "');");
            return _this;
        };
        _this.resize = function (width, height) {
            _this.pushCodes("cy.viewport(" + width + ", " + height + ");");
            return _this;
        };
        _this.fill = function (selector, value, causesNavigation) {
            _this.pushCodes("cy.get('" + selector + "').type(" + JSON.stringify(value) + ");");
            return _this;
        };
        _this.type = function (selector, value, causesNavigation) {
            _this.pushCodes("cy.get('" + selector + "').type(" + JSON.stringify(value) + ");");
            return _this;
        };
        _this.select = function (selector, option, causesNavigation) {
            _this.pushCodes("cy.get('" + selector + "').select('" + option + "');");
            return _this;
        };
        _this.keydown = function (selector, key, causesNavigation) {
            _this.pushCodes("cy.get('" + selector + "').type('{" + key + "}');");
            return _this;
        };
        _this.wheel = function (deltaX, deltaY, pageXOffset, pageYOffset) {
            _this.pushCodes("cy.scrollTo(" + Math.floor(pageXOffset !== null && pageXOffset !== void 0 ? pageXOffset : 0) + ", " + Math.floor(pageYOffset !== null && pageYOffset !== void 0 ? pageYOffset : 0) + ");");
            return _this;
        };
        _this.fullScreenshot = function () {
            _this.pushCodes("cy.screenshot();");
            return _this;
        };
        _this.awaitText = function (text) {
            _this.pushCodes("cy.contains('" + text + "');");
            return _this;
        };
        _this.dragAndDrop = function (sourceX, sourceY, targetX, targetY) {
            // TODO -> IMPLEMENT ME
            _this.pushCodes('');
            return _this;
        };
        _this.buildScript = function () {
            return "it('Written with DeploySentinel Recorder', () => {" + _this.codes.join('') + "});";
        };
        return _this;
    }
    return CypressScriptBuilder;
}(ScriptBuilder));

var genCode = function (actions, showComments, scriptType) {
    var scriptBuilder;
    switch (scriptType) {
        case _types__WEBPACK_IMPORTED_MODULE_1__.ScriptType.Playwright:
            scriptBuilder = new PlaywrightScriptBuilder(showComments);
            break;
        case _types__WEBPACK_IMPORTED_MODULE_1__.ScriptType.Puppeteer:
            scriptBuilder = new PuppeteerScriptBuilder(showComments);
            break;
        case _types__WEBPACK_IMPORTED_MODULE_1__.ScriptType.Cypress:
            scriptBuilder = new CypressScriptBuilder(showComments);
            break;
        case _types__WEBPACK_IMPORTED_MODULE_1__.ScriptType.Gherkin:
            scriptBuilder = new GherkinScriptBuilder(showComments);
            break;
        case _types__WEBPACK_IMPORTED_MODULE_1__.ScriptType.Locators:
            scriptBuilder = new LocatorsScriptBuilder(showComments);
            break;
        default:
            throw new Error('Unsupported script type');
    }
    for (var i = 0; i < actions.length; i++) {
        var action = actions[i];
        if (!(0,_types__WEBPACK_IMPORTED_MODULE_1__.isSupportedActionType)(action.type)) {
            continue;
        }
        var nextAction = actions[i + 1];
        var causesNavigation = (nextAction === null || nextAction === void 0 ? void 0 : nextAction.type) === _types__WEBPACK_IMPORTED_MODULE_1__.ActionType.Navigate;
        scriptBuilder.pushActionContext(new ActionContext(action, scriptType, {
            causesNavigation: causesNavigation,
            isStateful: isActionStateful(action),
        }));
    }
    return scriptBuilder.buildCodes().buildScript();
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("953d6ea4be5bef85791e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=cypressTrigger.4443b3b5648e7ad8b205.hot-update.js.map