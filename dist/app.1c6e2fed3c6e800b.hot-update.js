"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatemy_vue"]("app",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n\n\n\n\nconst app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.config.globalProperties.$axios = axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\napp.use(_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).mount('#app');\n\n// Global configuration for axios to include credentials (such as cookies) with every request\naxios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.withCredentials = true;\n\n// Set the base URL for all axios requests (Django backend API)\naxios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.baseURL = 'http://localhost:8000'; // Django backend address\n\n// Get the CSRF token from the cookie\nconst csrfToken = getCookie('csrftoken');\n\n// Set the CSRF token in the headers for all axios requests\naxios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.headers.common['X-CSRFToken'] = csrfToken;\n\n// Ensure axios requests include cookies (for Django session management)\naxios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.withCredentials = true;\n\n// Function to retrieve a specific cookie by name\nfunction getCookie(name) {\n  let cookieValue = null;\n  if (document.cookie && document.cookie !== '') {\n    const cookies = document.cookie.split(';');\n    for (let i = 0; i < cookies.length; i++) {\n      const cookie = cookies[i].trim();\n      if (cookie.substring(0, name.length + 1) === name + '=') {\n        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));\n        break;\n      }\n    }\n  }\n  return cookieValue;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV92dWUvLi9zcmMvbWFpbi5qcz9mYmVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcic7XG5cbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcChBcHApO1xuYXBwLmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLiRheGlvcyA9IGF4aW9zO1xuYXBwLnVzZShyb3V0ZXIpLm1vdW50KCcjYXBwJyk7XG5cbi8vIEdsb2JhbCBjb25maWd1cmF0aW9uIGZvciBheGlvcyB0byBpbmNsdWRlIGNyZWRlbnRpYWxzIChzdWNoIGFzIGNvb2tpZXMpIHdpdGggZXZlcnkgcmVxdWVzdFxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuLy8gU2V0IHRoZSBiYXNlIFVSTCBmb3IgYWxsIGF4aW9zIHJlcXVlc3RzIChEamFuZ28gYmFja2VuZCBBUEkpXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCc7ICAvLyBEamFuZ28gYmFja2VuZCBhZGRyZXNzXG5cbi8vIEdldCB0aGUgQ1NSRiB0b2tlbiBmcm9tIHRoZSBjb29raWVcbmNvbnN0IGNzcmZUb2tlbiA9IGdldENvb2tpZSgnY3NyZnRva2VuJyk7XG5cbi8vIFNldCB0aGUgQ1NSRiB0b2tlbiBpbiB0aGUgaGVhZGVycyBmb3IgYWxsIGF4aW9zIHJlcXVlc3RzXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1DU1JGVG9rZW4nXSA9IGNzcmZUb2tlbjtcblxuLy8gRW5zdXJlIGF4aW9zIHJlcXVlc3RzIGluY2x1ZGUgY29va2llcyAoZm9yIERqYW5nbyBzZXNzaW9uIG1hbmFnZW1lbnQpXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXG4vLyBGdW5jdGlvbiB0byByZXRyaWV2ZSBhIHNwZWNpZmljIGNvb2tpZSBieSBuYW1lXG5mdW5jdGlvbiBnZXRDb29raWUobmFtZSkge1xuICAgIGxldCBjb29raWVWYWx1ZSA9IG51bGw7XG4gICAgaWYgKGRvY3VtZW50LmNvb2tpZSAmJiBkb2N1bWVudC5jb29raWUgIT09ICcnKSB7XG4gICAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb29raWUgPSBjb29raWVzW2ldLnRyaW0oKTtcbiAgICAgICAgICAgIGlmIChjb29raWUuc3Vic3RyaW5nKDAsIG5hbWUubGVuZ3RoICsgMSkgPT09IChuYW1lICsgJz0nKSkge1xuICAgICAgICAgICAgICAgIGNvb2tpZVZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZS5zdWJzdHJpbmcobmFtZS5sZW5ndGggKyAxKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvb2tpZVZhbHVlO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "41a82f3ee9f041cd"; }
/******/ }();
/******/ 
/******/ }
);