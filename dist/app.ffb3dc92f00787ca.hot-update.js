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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n// main.js\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\n// 设置 Axios 的基础 URL\naxios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.baseURL = 'http://localhost:8000'; // 后端服务器地址\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype.$axios = axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; // 将 Axios 挂载到 Vue 原型上\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  router: _router__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n}).$mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV92dWUvLi9zcmMvbWFpbi5qcz9mYmVhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG1haW4uanNcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxuXG4vLyDorr7nva4gQXhpb3Mg55qE5Z+656GAIFVSTFxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnICAvLyDlkI7nq6/mnI3liqHlmajlnLDlnYBcblZ1ZS5wcm90b3R5cGUuJGF4aW9zID0gYXhpb3MgIC8vIOWwhiBBeGlvcyDmjILovb3liLAgVnVlIOWOn+Wei+S4ilxuXG5uZXcgVnVlKHtcbiAgcm91dGVyLFxuICByZW5kZXI6IGggPT4gaChBcHApXG59KS4kbW91bnQoJyNhcHAnKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var _components_Home_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Home.vue */ \"./src/components/Home.vue\");\n/* harmony import */ var _components_Register_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Register.vue */ \"./src/components/Register.vue\");\n/* harmony import */ var _components_Login_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Login.vue */ \"./src/components/Login.vue\");\n// src/router/index.js\n\n\n\n\nconst routes = [{\n  path: '/',\n  component: _components_Home_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/register',\n  component: _components_Register_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, {\n  path: '/login',\n  component: _components_Login_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}];\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.createWebHistory)(),\n  routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL215X3Z1ZS8uL3NyYy9yb3V0ZXIvaW5kZXguanM/NWFhNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvcm91dGVyL2luZGV4LmpzXG5pbXBvcnQgeyBjcmVhdGVSb3V0ZXIsIGNyZWF0ZVdlYkhpc3RvcnkgfSBmcm9tICd2dWUtcm91dGVyJ1xuaW1wb3J0IEhvbWVDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lLnZ1ZSdcbmltcG9ydCBSZWdpc3RlckNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL1JlZ2lzdGVyLnZ1ZSdcbmltcG9ydCBMb2dpbkNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luLnZ1ZSdcblxuY29uc3Qgcm91dGVzID0gW1xuICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJy9yZWdpc3RlcicsIGNvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnL2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuXVxuXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xuICBoaXN0b3J5OiBjcmVhdGVXZWJIaXN0b3J5KCksXG4gIHJvdXRlcyxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/router/index.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "bfadcbe54a47c33b"; }
/******/ }();
/******/ 
/******/ }
);