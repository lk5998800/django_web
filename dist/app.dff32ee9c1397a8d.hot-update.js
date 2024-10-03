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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n\n\n\n\nconst app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.config.globalProperties.$axios = axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\napp.use(_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).mount('#app');\n\n// 全局设置 axios 请求带上凭据（cookies 等）\naxios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.withCredentials = true;\n\n// 全局设置 axios 的 baseURL （后端 API 的基础路径）\naxios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.baseURL = 'http://localhost:8000'; // Django 后端地址\n\n// 从 Cookie 中获取 CSRF token\nconst csrfToken = getCookie('csrftoken');\n\n// 设置 Axios 的全局配置\naxios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.headers.common['X-CSRFToken'] = csrfToken;\n\n// 确保 Axios 请求中带上 Cookie（用于 Django Session）\naxios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.withCredentials = true;\nfunction getCookie(name) {\n  let cookieValue = null;\n  if (document.cookie && document.cookie !== '') {\n    const cookies = document.cookie.split(';');\n    for (let i = 0; i < cookies.length; i++) {\n      const cookie = cookies[i].trim();\n      if (cookie.substring(0, name.length + 1) === name + '=') {\n        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));\n        break;\n      }\n    }\n  }\n  return cookieValue;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV92dWUvLi9zcmMvbWFpbi5qcz9mYmVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcic7XG5cbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcChBcHApO1xuYXBwLmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLiRheGlvcyA9IGF4aW9zO1xuYXBwLnVzZShyb3V0ZXIpLm1vdW50KCcjYXBwJyk7XG5cbi8vIOWFqOWxgOiuvue9riBheGlvcyDor7fmsYLluKbkuIrlh63mja7vvIhjb29raWVzIOetie+8iVxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuLy8g5YWo5bGA6K6+572uIGF4aW9zIOeahCBiYXNlVVJMIO+8iOWQjuerryBBUEkg55qE5Z+656GA6Lev5b6E77yJXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCc7ICAvLyBEamFuZ28g5ZCO56uv5Zyw5Z2AXG5cbi8vIOS7jiBDb29raWUg5Lit6I635Y+WIENTUkYgdG9rZW5cbmNvbnN0IGNzcmZUb2tlbiA9IGdldENvb2tpZSgnY3NyZnRva2VuJyk7XG5cbi8vIOiuvue9riBBeGlvcyDnmoTlhajlsYDphY3nva5cbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLUNTUkZUb2tlbiddID0gY3NyZlRva2VuO1xuXG4vLyDnoa7kv50gQXhpb3Mg6K+35rGC5Lit5bim5LiKIENvb2tpZe+8iOeUqOS6jiBEamFuZ28gU2Vzc2lvbu+8iVxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuXG5mdW5jdGlvbiBnZXRDb29raWUobmFtZSkge1xuICAgIGxldCBjb29raWVWYWx1ZSA9IG51bGw7XG4gICAgaWYgKGRvY3VtZW50LmNvb2tpZSAmJiBkb2N1bWVudC5jb29raWUgIT09ICcnKSB7XG4gICAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb29raWUgPSBjb29raWVzW2ldLnRyaW0oKTtcbiAgICAgICAgICAgIGlmIChjb29raWUuc3Vic3RyaW5nKDAsIG5hbWUubGVuZ3RoICsgMSkgPT09IChuYW1lICsgJz0nKSkge1xuICAgICAgICAgICAgICAgIGNvb2tpZVZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZS5zdWJzdHJpbmcobmFtZS5sZW5ndGggKyAxKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvb2tpZVZhbHVlO1xufVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "1c6e2fed3c6e800b"; }
/******/ }();
/******/ 
/******/ }
);