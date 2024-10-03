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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n\n\n\n\nconst app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.config.globalProperties.$axios = axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\napp.use(_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).mount('#app');\n\n// 全局设置 axios 请求带上凭据（cookies 等）\naxios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.withCredentials = true;\n\n// 全局设置 axios 的 baseURL （后端 API 的基础路径）\naxios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.baseURL = 'http://localhost:8000'; // Django 后端地址\n\n// 如果需要全局设置 CSRF Token，可以从 cookie 或 meta 标签中获取\nconst csrfToken = document.querySelector('meta[name=\"csrf-token\"]').getAttribute('content');\naxios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.headers.common['X-CSRFToken'] = csrfToken;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV92dWUvLi9zcmMvbWFpbi5qcz9mYmVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcic7XG5cbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcChBcHApO1xuYXBwLmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLiRheGlvcyA9IGF4aW9zO1xuYXBwLnVzZShyb3V0ZXIpLm1vdW50KCcjYXBwJyk7XG5cbi8vIOWFqOWxgOiuvue9riBheGlvcyDor7fmsYLluKbkuIrlh63mja7vvIhjb29raWVzIOetie+8iVxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuLy8g5YWo5bGA6K6+572uIGF4aW9zIOeahCBiYXNlVVJMIO+8iOWQjuerryBBUEkg55qE5Z+656GA6Lev5b6E77yJXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCc7ICAvLyBEamFuZ28g5ZCO56uv5Zyw5Z2AXG5cbi8vIOWmguaenOmcgOimgeWFqOWxgOiuvue9riBDU1JGIFRva2Vu77yM5Y+v5Lul5LuOIGNvb2tpZSDmiJYgbWV0YSDmoIfnrb7kuK3ojrflj5ZcbmNvbnN0IGNzcmZUb2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLUNTUkZUb2tlbiddID0gY3NyZlRva2VuOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "eac07ceb68dbed6a"; }
/******/ }();
/******/ 
/******/ }
);