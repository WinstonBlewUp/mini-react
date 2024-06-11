/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Counter.js":
/*!***********************************!*\
  !*** ./src/components/Counter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mini_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mini-react */ \"./src/mini-react.js\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\nfunction Counter() {\n  var _useState = (0,_mini_react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    _useState2 = _slicedToArray(_useState, 2),\n    count = _useState2[0],\n    setCount = _useState2[1];\n  console.log('Counter rendered with count:', count);\n  return (0,_mini_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', null, (0,_mini_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', null, \"Count: \".concat(count)), (0,_mini_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {\n    onClick: function onClick() {\n      console.log('Button clicked');\n      setCount(count + 1);\n    }\n  }, 'Increment'));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);\n\n//# sourceURL=webpack://mini-react/./src/components/Counter.js?");

/***/ }),

/***/ "./src/components/Updater.js":
/*!***********************************!*\
  !*** ./src/components/Updater.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mini_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mini-react */ \"./src/mini-react.js\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\nfunction Updater() {\n  var _useState = (0,_mini_react__WEBPACK_IMPORTED_MODULE_0__.useState)('Initial Text'),\n    _useState2 = _slicedToArray(_useState, 2),\n    text = _useState2[0],\n    setText = _useState2[1];\n  console.log('Updater rendered with text:', text);\n  return (0,_mini_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', null, (0,_mini_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', null, text), (0,_mini_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {\n    onClick: function onClick() {\n      console.log('Button clicked');\n      setText('Updated Text');\n    }\n  }, 'Update Text'));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Updater);\n\n//# sourceURL=webpack://mini-react/./src/components/Updater.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mini_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mini-react */ \"./src/mini-react.js\");\n/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Counter */ \"./src/components/Counter.js\");\n/* harmony import */ var _components_Updater__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Updater */ \"./src/components/Updater.js\");\n\n\n\nfunction App() {\n  return (0,_mini_react__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', null, (0,_mini_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Counter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), (0,_mini_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Updater__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n}\nvar container = document.getElementById('root');\n(0,_mini_react__WEBPACK_IMPORTED_MODULE_0__.render)((0,_mini_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(App), container);\n\n// Modifiez setState pour utiliser la fonction render correcte\nfunction rerenderApp() {\n  (0,_mini_react__WEBPACK_IMPORTED_MODULE_0__.render)((0,_mini_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(App), container);\n}\n\n// Ajouter la fonction de rendu dans le contexte global pour la réutiliser\nwindow.rerenderApp = rerenderApp;\n\n//# sourceURL=webpack://mini-react/./src/index.js?");

/***/ }),

/***/ "./src/mini-react.js":
/*!***************************!*\
  !*** ./src/mini-react.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElement: () => (/* binding */ createElement),\n/* harmony export */   render: () => (/* binding */ render),\n/* harmony export */   useState: () => (/* binding */ useState)\n/* harmony export */ });\nvar globalState = [];\nvar setters = [];\nvar callIndex = 0;\nvar rootContainer = null;\nvar rootVDom = null;\nfunction useState(initialValue) {\n  var state = globalState[callIndex] !== undefined ? globalState[callIndex] : initialValue;\n  var index = callIndex;\n  function setState(newValue) {\n    globalState[index] = newValue;\n    callIndex = 0; // Réinitialise l'index des appels\n    console.log('State updated:', globalState); // Vérifie que l'état est mis à jour\n    window.rerenderApp(); // Appel pour re-rendre avec le nouveau VDOM\n  }\n  setters.push(setState);\n  callIndex++;\n  return [state, setState];\n}\nfunction createElement(tag, props) {\n  if (typeof tag === 'function') {\n    callIndex = 0; // Réinitialise l'index avant de créer l'élément fonctionnel\n    return tag(props);\n  }\n  var element = document.createElement(tag);\n  if (props) {\n    Object.keys(props).forEach(function (key) {\n      if (key.startsWith('on')) {\n        var event = key.toLowerCase().substring(2);\n        element.addEventListener(event, props[key]);\n      } else {\n        element[key] = props[key];\n      }\n    });\n  }\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n  children.forEach(function (child) {\n    if (typeof child === 'string') {\n      element.appendChild(document.createTextNode(child));\n    } else {\n      element.appendChild(child);\n    }\n  });\n  return element;\n}\nfunction render(vdom, container) {\n  if (container) {\n    rootContainer = container; // Stocke le conteneur racine\n    rootVDom = vdom; // Stocke le VDOM racine\n  }\n  callIndex = 0; // Réinitialise l'index avant le rendu\n  if (rootContainer && rootVDom) {\n    rootContainer.innerHTML = '';\n    rootContainer.appendChild(rootVDom); // Utiliser rootVDom ici pour s'assurer que le ré-rendu utilise le bon VDOM\n  }\n  console.log('VDOM rendered:', rootVDom); // Vérifie que le VDOM est re-rendu\n}\n\n\n//# sourceURL=webpack://mini-react/./src/mini-react.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;