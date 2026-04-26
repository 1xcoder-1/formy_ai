"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/fetchFormById/route";
exports.ids = ["app/api/fetchFormById/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:events":
/*!******************************!*\
  !*** external "node:events" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:events");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FfetchFormById%2Froute&page=%2Fapi%2FfetchFormById%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FfetchFormById%2Froute.ts&appDir=H%3A%5Cformy_ai%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5Cformy_ai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FfetchFormById%2Froute&page=%2Fapi%2FfetchFormById%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FfetchFormById%2Froute.ts&appDir=H%3A%5Cformy_ai%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5Cformy_ai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var H_formy_ai_app_api_fetchFormById_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/fetchFormById/route.ts */ \"(rsc)/./app/api/fetchFormById/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/fetchFormById/route\",\n        pathname: \"/api/fetchFormById\",\n        filename: \"route\",\n        bundlePath: \"app/api/fetchFormById/route\"\n    },\n    resolvedPagePath: \"H:\\\\formy_ai\\\\app\\\\api\\\\fetchFormById\\\\route.ts\",\n    nextConfigOutput,\n    userland: H_formy_ai_app_api_fetchFormById_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/fetchFormById/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZmZXRjaEZvcm1CeUlkJTJGcm91dGUmcGFnZT0lMkZhcGklMkZmZXRjaEZvcm1CeUlkJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZmV0Y2hGb3JtQnlJZCUyRnJvdXRlLnRzJmFwcERpcj1IJTNBJTVDZm9ybXlfYWklNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUglM0ElNUNmb3JteV9haSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDRDtBQUM1RTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm15LWFpLWJ1aWxkZXIvPzdjN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiSDpcXFxcZm9ybXlfYWlcXFxcYXBwXFxcXGFwaVxcXFxmZXRjaEZvcm1CeUlkXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9mZXRjaEZvcm1CeUlkL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZmV0Y2hGb3JtQnlJZFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZmV0Y2hGb3JtQnlJZC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkg6XFxcXGZvcm15X2FpXFxcXGFwcFxcXFxhcGlcXFxcZmV0Y2hGb3JtQnlJZFxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvZmV0Y2hGb3JtQnlJZC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FfetchFormById%2Froute&page=%2Fapi%2FfetchFormById%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FfetchFormById%2Froute.ts&appDir=H%3A%5Cformy_ai%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5Cformy_ai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/fetchFormById/route.ts":
/*!****************************************!*\
  !*** ./app/api/fetchFormById/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prismadb */ \"(rsc)/./lib/prismadb.ts\");\n/* harmony import */ var _kinde_oss_kinde_auth_nextjs_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kinde-oss/kinde-auth-nextjs/server */ \"(rsc)/./node_modules/@kinde-oss/kinde-auth-nextjs/dist/server/index.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function GET(req) {\n    try {\n        const session = (0,_kinde_oss_kinde_auth_nextjs_server__WEBPACK_IMPORTED_MODULE_1__.getKindeServerSession)();\n        const user = await session.getUser();\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                error: \"Unauthorized to use this resource\"\n            }, {\n                status: 401\n            });\n        }\n        const { searchParams } = new URL(req.url);\n        const formId = searchParams.get(\"formId\");\n        if (!formId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                error: \"formId is required\"\n            }, {\n                status: 400\n            });\n        }\n        const form = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__.prisma.form.findFirst({\n            where: {\n                userId: user.id,\n                formId: formId\n            },\n            include: {\n                settings: true\n            }\n        });\n        if (!form) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                error: \"Form not found\"\n            }, {\n                status: 404\n            });\n        }\n        // Manually fetch bannerImage using raw query because Prisma client might not be aware of it yet\n        const rawSettings = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__.prisma.$queryRawUnsafe(`SELECT \"bannerImage\", \"webhookUrl\" FROM \"FormSettings\" WHERE \"id\" = $1`, form.settingsId);\n        if (rawSettings && rawSettings.length > 0) {\n            // Check both casings as Postgres might return lowercase depending on driver/quoting\n            const banner = rawSettings[0].bannerImage || rawSettings[0].bannerimage;\n            const webhook = rawSettings[0].webhookUrl || rawSettings[0].webhookurl;\n            if (banner !== undefined) {\n                form.settings.bannerImage = banner;\n            }\n            if (webhook !== undefined) {\n                form.settings.webhookUrl = webhook;\n            }\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            data: {\n                success: true,\n                message: \"Form fetched successfully\",\n                form\n            }\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: error?.message || \"Internal Server Error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2ZldGNoRm9ybUJ5SWQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNvQztBQUNqQztBQUVwQyxlQUFlRyxJQUFJQyxHQUFZO0lBQ3BDLElBQUk7UUFDRixNQUFNQyxVQUFVSiwwRkFBcUJBO1FBQ3JDLE1BQU1LLE9BQU8sTUFBTUQsUUFBUUUsT0FBTztRQUVsQyxJQUFJLENBQUNELE1BQU07WUFDVCxPQUFPSixxREFBWUEsQ0FBQ00sSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUFvQyxHQUM3QztnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJUixJQUFJUyxHQUFHO1FBQ3hDLE1BQU1DLFNBQVNILGFBQWFJLEdBQUcsQ0FBQztRQUVoQyxJQUFJLENBQUNELFFBQVE7WUFDWCxPQUFPWixxREFBWUEsQ0FBQ00sSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUFxQixHQUM5QjtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsTUFBTU0sT0FBTyxNQUFNaEIsaURBQU1BLENBQUNnQixJQUFJLENBQUNDLFNBQVMsQ0FBQztZQUN2Q0MsT0FBTztnQkFDTEMsUUFBUWIsS0FBS2MsRUFBRTtnQkFDZk4sUUFBUUE7WUFDVjtZQUNBTyxTQUFTO2dCQUNQQyxVQUFVO1lBQ1o7UUFDRjtRQUVBLElBQUksQ0FBQ04sTUFBTTtZQUNULE9BQU9kLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBaUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3RFO1FBRUEsZ0dBQWdHO1FBQ2hHLE1BQU1hLGNBQXFCLE1BQU12QixpREFBTUEsQ0FBQ3dCLGVBQWUsQ0FDckQsQ0FBQyxzRUFBc0UsQ0FBQyxFQUN4RVIsS0FBS1MsVUFBVTtRQUdqQixJQUFJRixlQUFlQSxZQUFZRyxNQUFNLEdBQUcsR0FBRztZQUN6QyxvRkFBb0Y7WUFDcEYsTUFBTUMsU0FBU0osV0FBVyxDQUFDLEVBQUUsQ0FBQ0ssV0FBVyxJQUFJTCxXQUFXLENBQUMsRUFBRSxDQUFDTSxXQUFXO1lBQ3ZFLE1BQU1DLFVBQVVQLFdBQVcsQ0FBQyxFQUFFLENBQUNRLFVBQVUsSUFBSVIsV0FBVyxDQUFDLEVBQUUsQ0FBQ1MsVUFBVTtZQUN0RSxJQUFJTCxXQUFXTSxXQUFXO2dCQUN2QmpCLEtBQUtNLFFBQVEsQ0FBU00sV0FBVyxHQUFHRDtZQUN2QztZQUNBLElBQUlHLFlBQVlHLFdBQVc7Z0JBQ3hCakIsS0FBS00sUUFBUSxDQUFTUyxVQUFVLEdBQUdEO1lBQ3RDO1FBQ0Y7UUFFQSxPQUFPNUIscURBQVlBLENBQUNNLElBQUksQ0FBQztZQUN2QjBCLE1BQU07Z0JBQ0pDLFNBQVM7Z0JBQ1RDLFNBQVM7Z0JBQ1RwQjtZQUNGO1FBQ0Y7SUFDRixFQUFFLE9BQU9QLE9BQVk7UUFDbkIsT0FBT1AscURBQVlBLENBQUNNLElBQUksQ0FDdEI7WUFBRUMsT0FBT0EsT0FBTzJCLFdBQVc7UUFBd0IsR0FDbkQ7WUFBRTFCLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybXktYWktYnVpbGRlci8uL2FwcC9hcGkvZmV0Y2hGb3JtQnlJZC9yb3V0ZS50cz80ODgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFkYlwiO1xyXG5pbXBvcnQgeyBnZXRLaW5kZVNlcnZlclNlc3Npb24gfSBmcm9tIFwiQGtpbmRlLW9zcy9raW5kZS1hdXRoLW5leHRqcy9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogUmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gZ2V0S2luZGVTZXJ2ZXJTZXNzaW9uKCk7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgc2Vzc2lvbi5nZXRVc2VyKCk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiBcIlVuYXV0aG9yaXplZCB0byB1c2UgdGhpcyByZXNvdXJjZVwiIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxLnVybCk7XHJcbiAgICBjb25zdCBmb3JtSWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiZm9ybUlkXCIpO1xyXG5cclxuICAgIGlmICghZm9ybUlkKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiBcImZvcm1JZCBpcyByZXF1aXJlZFwiIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IHByaXNtYS5mb3JtLmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxyXG4gICAgICAgIGZvcm1JZDogZm9ybUlkLFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgc2V0dGluZ3M6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWZvcm0pIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRm9ybSBub3QgZm91bmRcIiB9LCB7IHN0YXR1czogNDA0IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1hbnVhbGx5IGZldGNoIGJhbm5lckltYWdlIHVzaW5nIHJhdyBxdWVyeSBiZWNhdXNlIFByaXNtYSBjbGllbnQgbWlnaHQgbm90IGJlIGF3YXJlIG9mIGl0IHlldFxyXG4gICAgY29uc3QgcmF3U2V0dGluZ3M6IGFueVtdID0gYXdhaXQgcHJpc21hLiRxdWVyeVJhd1Vuc2FmZShcclxuICAgICAgYFNFTEVDVCBcImJhbm5lckltYWdlXCIsIFwid2ViaG9va1VybFwiIEZST00gXCJGb3JtU2V0dGluZ3NcIiBXSEVSRSBcImlkXCIgPSAkMWAsXHJcbiAgICAgIGZvcm0uc2V0dGluZ3NJZFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAocmF3U2V0dGluZ3MgJiYgcmF3U2V0dGluZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyBDaGVjayBib3RoIGNhc2luZ3MgYXMgUG9zdGdyZXMgbWlnaHQgcmV0dXJuIGxvd2VyY2FzZSBkZXBlbmRpbmcgb24gZHJpdmVyL3F1b3RpbmdcclxuICAgICAgY29uc3QgYmFubmVyID0gcmF3U2V0dGluZ3NbMF0uYmFubmVySW1hZ2UgfHwgcmF3U2V0dGluZ3NbMF0uYmFubmVyaW1hZ2U7XHJcbiAgICAgIGNvbnN0IHdlYmhvb2sgPSByYXdTZXR0aW5nc1swXS53ZWJob29rVXJsIHx8IHJhd1NldHRpbmdzWzBdLndlYmhvb2t1cmw7XHJcbiAgICAgIGlmIChiYW5uZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIChmb3JtLnNldHRpbmdzIGFzIGFueSkuYmFubmVySW1hZ2UgPSBiYW5uZXI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHdlYmhvb2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIChmb3JtLnNldHRpbmdzIGFzIGFueSkud2ViaG9va1VybCA9IHdlYmhvb2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBtZXNzYWdlOiBcIkZvcm0gZmV0Y2hlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICBmb3JtLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGVycm9yOiBlcnJvcj8ubWVzc2FnZSB8fCBcIkludGVybmFsIFNlcnZlciBFcnJvclwiIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImdldEtpbmRlU2VydmVyU2Vzc2lvbiIsIk5leHRSZXNwb25zZSIsIkdFVCIsInJlcSIsInNlc3Npb24iLCJ1c2VyIiwiZ2V0VXNlciIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsImZvcm1JZCIsImdldCIsImZvcm0iLCJmaW5kRmlyc3QiLCJ3aGVyZSIsInVzZXJJZCIsImlkIiwiaW5jbHVkZSIsInNldHRpbmdzIiwicmF3U2V0dGluZ3MiLCIkcXVlcnlSYXdVbnNhZmUiLCJzZXR0aW5nc0lkIiwibGVuZ3RoIiwiYmFubmVyIiwiYmFubmVySW1hZ2UiLCJiYW5uZXJpbWFnZSIsIndlYmhvb2siLCJ3ZWJob29rVXJsIiwid2ViaG9va3VybCIsInVuZGVmaW5lZCIsImRhdGEiLCJzdWNjZXNzIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/fetchFormById/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prismadb.ts":
/*!*************************!*\
  !*** ./lib/prismadb.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _neondatabase_serverless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @neondatabase/serverless */ \"(rsc)/./node_modules/@neondatabase/serverless/index.mjs\");\n/* harmony import */ var _prisma_adapter_neon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/adapter-neon */ \"(rsc)/./node_modules/@prisma/adapter-neon/dist/index.mjs\");\n\n\n\nconst globalForPrisma = globalThis;\nlet prisma;\nif (globalForPrisma.prisma) {\n    prisma = globalForPrisma.prisma;\n} else {\n    // Use connection pooling URL for Serverless environments\n    const connectionString = `${process.env.DATABASE_URL}`;\n    const pool = new _neondatabase_serverless__WEBPACK_IMPORTED_MODULE_1__.Pool({\n        connectionString\n    });\n    const adapter = new _prisma_adapter_neon__WEBPACK_IMPORTED_MODULE_2__.PrismaNeon(pool);\n    prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n        adapter\n    });\n}\nif (true) globalForPrisma.prisma = prisma;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEM7QUFDYztBQUNWO0FBRWxELE1BQU1HLGtCQUFrQkM7QUFFeEIsSUFBSUM7QUFFSixJQUFJRixnQkFBZ0JFLE1BQU0sRUFBRTtJQUMxQkEsU0FBU0YsZ0JBQWdCRSxNQUFNO0FBQ2pDLE9BQU87SUFDTCx5REFBeUQ7SUFDekQsTUFBTUMsbUJBQW1CLENBQUMsRUFBRUMsUUFBUUMsR0FBRyxDQUFDQyxZQUFZLENBQUMsQ0FBQztJQUN0RCxNQUFNQyxPQUFPLElBQUlULDBEQUFJQSxDQUFDO1FBQUVLO0lBQWlCO0lBQ3pDLE1BQU1LLFVBQVUsSUFBSVQsNERBQVVBLENBQUNRO0lBQy9CTCxTQUFTLElBQUlMLHdEQUFZQSxDQUFDO1FBQUVXO0lBQVE7QUFDdEM7QUFFQSxJQUFJSixJQUFxQyxFQUFFSixnQkFBZ0JFLE1BQU0sR0FBR0E7QUFFbEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JteS1haS1idWlsZGVyLy4vbGliL3ByaXNtYWRiLnRzPzBlM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmltcG9ydCB7IFBvb2wsIG5lb25Db25maWcgfSBmcm9tICdAbmVvbmRhdGFiYXNlL3NlcnZlcmxlc3MnO1xyXG5pbXBvcnQgeyBQcmlzbWFOZW9uIH0gZnJvbSAnQHByaXNtYS9hZGFwdGVyLW5lb24nO1xyXG5cclxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfTtcclxuXHJcbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudDtcclxuXHJcbmlmIChnbG9iYWxGb3JQcmlzbWEucHJpc21hKSB7XHJcbiAgcHJpc21hID0gZ2xvYmFsRm9yUHJpc21hLnByaXNtYTtcclxufSBlbHNlIHtcclxuICAvLyBVc2UgY29ubmVjdGlvbiBwb29saW5nIFVSTCBmb3IgU2VydmVybGVzcyBlbnZpcm9ubWVudHNcclxuICBjb25zdCBjb25uZWN0aW9uU3RyaW5nID0gYCR7cHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMfWA7XHJcbiAgY29uc3QgcG9vbCA9IG5ldyBQb29sKHsgY29ubmVjdGlvblN0cmluZyB9KTtcclxuICBjb25zdCBhZGFwdGVyID0gbmV3IFByaXNtYU5lb24ocG9vbCk7XHJcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCh7IGFkYXB0ZXIgfSk7XHJcbn1cclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWE7XHJcblxyXG5leHBvcnQgeyBwcmlzbWEgfTtcclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsIlBvb2wiLCJQcmlzbWFOZW9uIiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsImNvbm5lY3Rpb25TdHJpbmciLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwicG9vbCIsImFkYXB0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/prismadb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@kinde-oss","vendor-chunks/jwt-decode","vendor-chunks/@neondatabase","vendor-chunks/jose","vendor-chunks/@prisma","vendor-chunks/cookie","vendor-chunks/postgres-array","vendor-chunks/uncrypto"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FfetchFormById%2Froute&page=%2Fapi%2FfetchFormById%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FfetchFormById%2Froute.ts&appDir=H%3A%5Cformy_ai%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=H%3A%5Cformy_ai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();