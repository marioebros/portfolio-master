"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TimeLineData\": function() { return /* binding */ TimeLineData; },\n/* harmony export */   \"projects\": function() { return /* binding */ projects; }\n/* harmony export */ });\nvar projects = [\n    {\n        title: \"Pocket Library\",\n        description: \"Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.\",\n        image: \"/images/pocket-library.png\",\n        tags: [\n            \"JavaScript\",\n            \"HTML\",\n            \"CSS\"\n        ],\n        source: \"https://github.com/marioebros/library-app\",\n        visit: \"https://marioebros.github.io/library-app/\",\n        id: 0\n    },\n    {\n        title: \"Calculator App\",\n        description: \"Built mainly using JavaScript as the foundation for all operations available on a calculator; HTML & CSS brought the project together with JS interactivity. While building it you're going to learn many advanced React & JavaScript topics. And trust me, e-commerce applications are impressive.\",\n        image: \"/images/calculator-app.png\",\n        tags: [\n            \"JavaScript\",\n            \"HTML\",\n            \"CSS\"\n        ],\n        source: \"https://github.com/marioebros/project-calculator\",\n        visit: \"https://marioebros.github.io/project-calculator/\",\n        id: 1\n    },\n    {\n        title: \"Rock, Paper, Scissors\",\n        description: \"Part of The Odin Project: Foundations; making use of HTML, CSS, & JavaScript. A working rock, paper, scissors game played against the computer. Served as an introduction to the interactivity that JS provides.\",\n        image: \"/images/rps.png\",\n        tags: [\n            \"JavaScript\",\n            \"HTML\",\n            \"CSS\"\n        ],\n        source: \"https://github.com/marioebros/project-rock-paper-scissors\",\n        visit: \"https://marioebros.github.io/project-rock-paper-scissors/\",\n        id: 2\n    },\n    {\n        title: \"G's\",\n        description: \"This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application\",\n        image: \"/images/g-s.png\",\n        tags: [\n            \"JavaScript\",\n            \"CSS\",\n            \"Webpack\"\n        ],\n        source: \"https://github.com/marioebros/restaurant-page\",\n        visit: \"https://marioebros.github.io/restaurant-page/\",\n        id: 3\n    }, \n];\nvar TimeLineData = [\n    {\n        year: 2018,\n        text: \"Finished Masters program in Trombone @ BU\"\n    },\n    {\n        year: 2019,\n        text: \"Worked in construction & moved to NYC to work with a start-up apartment rental company\"\n    },\n    {\n        year: 2020,\n        text: 'Began working \"online\" full-time'\n    },\n    {\n        year: 2021,\n        text: \"Started my developer journey\"\n    },\n    {\n        year: 2022,\n        text: \"Began making projects and pursuing software development full-time\"\n    }, \n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQU1BLFFBQVEsR0FBRztJQUN0QjtRQUNFQyxLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCQyxXQUFXLEVBQ1QsbVFBQW1RO1FBQ3JRQyxLQUFLLEVBQUUsNEJBQTRCO1FBQ25DQyxJQUFJLEVBQUU7WUFBQyxZQUFZO1lBQUUsTUFBTTtZQUFFLEtBQUs7U0FBQztRQUNuQ0MsTUFBTSxFQUFFLDJDQUEyQztRQUNuREMsS0FBSyxFQUFFLDJDQUEyQztRQUNsREMsRUFBRSxFQUFFLENBQUM7S0FDTjtJQUNEO1FBQ0VOLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkJDLFdBQVcsRUFDVCxxU0FBcVM7UUFDdlNDLEtBQUssRUFBRSw0QkFBNEI7UUFDbkNDLElBQUksRUFBRTtZQUFDLFlBQVk7WUFBRSxNQUFNO1lBQUUsS0FBSztTQUFDO1FBQ25DQyxNQUFNLEVBQUUsa0RBQWtEO1FBQzFEQyxLQUFLLEVBQUUsa0RBQWtEO1FBQ3pEQyxFQUFFLEVBQUUsQ0FBQztLQUNOO0lBQ0Q7UUFDRU4sS0FBSyxFQUFFLHVCQUF1QjtRQUM5QkMsV0FBVyxFQUNULGtOQUFrTjtRQUNwTkMsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QkMsSUFBSSxFQUFFO1lBQUMsWUFBWTtZQUFFLE1BQU07WUFBRSxLQUFLO1NBQUM7UUFDbkNDLE1BQU0sRUFBRSwyREFBMkQ7UUFDbkVDLEtBQUssRUFBRSwyREFBMkQ7UUFDbEVDLEVBQUUsRUFBRSxDQUFDO0tBQ047SUFDRDtRQUNFTixLQUFLLEVBQUUsS0FBSztRQUNaQyxXQUFXLEVBQ1QsZ0lBQWdJO1FBQ2xJQyxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCQyxJQUFJLEVBQUU7WUFBQyxZQUFZO1lBQUUsS0FBSztZQUFFLFNBQVM7U0FBQztRQUN0Q0MsTUFBTSxFQUFFLCtDQUErQztRQUN2REMsS0FBSyxFQUFFLCtDQUErQztRQUN0REMsRUFBRSxFQUFFLENBQUM7S0FDTjtDQUNGLENBQUM7QUFFSyxJQUFNQyxZQUFZLEdBQUc7SUFDMUI7UUFBRUMsSUFBSSxFQUFFLElBQUk7UUFBRUMsSUFBSSxFQUFFLDJDQUEyQztLQUFFO0lBQ2pFO1FBQ0VELElBQUksRUFBRSxJQUFJO1FBQ1ZDLElBQUksRUFBRSx3RkFBd0Y7S0FDL0Y7SUFDRDtRQUFFRCxJQUFJLEVBQUUsSUFBSTtRQUFFQyxJQUFJLEVBQUUsa0NBQWtDO0tBQUU7SUFDeEQ7UUFBRUQsSUFBSSxFQUFFLElBQUk7UUFBRUMsSUFBSSxFQUFFLDhCQUE4QjtLQUFFO0lBQ3BEO1FBQ0VELElBQUksRUFBRSxJQUFJO1FBQ1ZDLElBQUksRUFBRSxtRUFBbUU7S0FDMUU7Q0FDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzPzFjMDYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiUG9ja2V0IExpYnJhcnlcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVXNpbmcgUmVhY3QsIE5vZGUuanMsIEV4cHJlc3MgJiBNb25nb0RCIHlvdSdsbCBsZWFybiBob3cgdG8gYnVpbGQgYSBGdWxsIFN0YWNrIE1FUk4gQXBwbGljYXRpb24gLSBmcm9tIHN0YXJ0IHRvIGZpbmlzaC4gVGhlIEFwcCBpcyBjYWxsZWQgTWVtb3JpZXMgYW5kIGl0IGlzIGEgc2ltcGxlIHNvY2lhbCBtZWRpYSBhcHAgdGhhdCBhbGxvd3MgdXNlcnMgdG8gcG9zdCBpbnRlcmVzdGluZyBldmVudHMgdGhhdCBoYXBwZW5lZCBpbiB0aGVpciBsaXZlcy5cIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3BvY2tldC1saWJyYXJ5LnBuZ1wiLFxuICAgIHRhZ3M6IFtcIkphdmFTY3JpcHRcIiwgXCJIVE1MXCIsIFwiQ1NTXCJdLFxuICAgIHNvdXJjZTogXCJodHRwczovL2dpdGh1Yi5jb20vbWFyaW9lYnJvcy9saWJyYXJ5LWFwcFwiLFxuICAgIHZpc2l0OiBcImh0dHBzOi8vbWFyaW9lYnJvcy5naXRodWIuaW8vbGlicmFyeS1hcHAvXCIsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJDYWxjdWxhdG9yIEFwcFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJCdWlsdCBtYWlubHkgdXNpbmcgSmF2YVNjcmlwdCBhcyB0aGUgZm91bmRhdGlvbiBmb3IgYWxsIG9wZXJhdGlvbnMgYXZhaWxhYmxlIG9uIGEgY2FsY3VsYXRvcjsgSFRNTCAmIENTUyBicm91Z2h0IHRoZSBwcm9qZWN0IHRvZ2V0aGVyIHdpdGggSlMgaW50ZXJhY3Rpdml0eS4gV2hpbGUgYnVpbGRpbmcgaXQgeW91J3JlIGdvaW5nIHRvIGxlYXJuIG1hbnkgYWR2YW5jZWQgUmVhY3QgJiBKYXZhU2NyaXB0IHRvcGljcy4gQW5kIHRydXN0IG1lLCBlLWNvbW1lcmNlIGFwcGxpY2F0aW9ucyBhcmUgaW1wcmVzc2l2ZS5cIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2NhbGN1bGF0b3ItYXBwLnBuZ1wiLFxuICAgIHRhZ3M6IFtcIkphdmFTY3JpcHRcIiwgXCJIVE1MXCIsIFwiQ1NTXCJdLFxuICAgIHNvdXJjZTogXCJodHRwczovL2dpdGh1Yi5jb20vbWFyaW9lYnJvcy9wcm9qZWN0LWNhbGN1bGF0b3JcIixcbiAgICB2aXNpdDogXCJodHRwczovL21hcmlvZWJyb3MuZ2l0aHViLmlvL3Byb2plY3QtY2FsY3VsYXRvci9cIixcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlJvY2ssIFBhcGVyLCBTY2lzc29yc1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJQYXJ0IG9mIFRoZSBPZGluIFByb2plY3Q6IEZvdW5kYXRpb25zOyBtYWtpbmcgdXNlIG9mIEhUTUwsIENTUywgJiBKYXZhU2NyaXB0LiBBIHdvcmtpbmcgcm9jaywgcGFwZXIsIHNjaXNzb3JzIGdhbWUgcGxheWVkIGFnYWluc3QgdGhlIGNvbXB1dGVyLiBTZXJ2ZWQgYXMgYW4gaW50cm9kdWN0aW9uIHRvIHRoZSBpbnRlcmFjdGl2aXR5IHRoYXQgSlMgcHJvdmlkZXMuXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9ycHMucG5nXCIsXG4gICAgdGFnczogW1wiSmF2YVNjcmlwdFwiLCBcIkhUTUxcIiwgXCJDU1NcIl0sXG4gICAgc291cmNlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9tYXJpb2Vicm9zL3Byb2plY3Qtcm9jay1wYXBlci1zY2lzc29yc1wiLFxuICAgIHZpc2l0OiBcImh0dHBzOi8vbWFyaW9lYnJvcy5naXRodWIuaW8vcHJvamVjdC1yb2NrLXBhcGVyLXNjaXNzb3JzL1wiLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRydzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIHZpZGVvIHR1dG9yaWFsLiBJbiB0aGlzIHZpZGVvLCB3ZSB3aWxsIGNyZWF0ZSBhIGZ1bGwgUmVhbHRpbWUgQ2hhdCBBcHBsaWNhdGlvblwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvZy1zLnBuZ1wiLFxuICAgIHRhZ3M6IFtcIkphdmFTY3JpcHRcIiwgXCJDU1NcIiwgXCJXZWJwYWNrXCJdLFxuICAgIHNvdXJjZTogXCJodHRwczovL2dpdGh1Yi5jb20vbWFyaW9lYnJvcy9yZXN0YXVyYW50LXBhZ2VcIixcbiAgICB2aXNpdDogXCJodHRwczovL21hcmlvZWJyb3MuZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcGFnZS9cIixcbiAgICBpZDogMyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHsgeWVhcjogMjAxOCwgdGV4dDogXCJGaW5pc2hlZCBNYXN0ZXJzIHByb2dyYW0gaW4gVHJvbWJvbmUgQCBCVVwiIH0sXG4gIHtcbiAgICB5ZWFyOiAyMDE5LFxuICAgIHRleHQ6IFwiV29ya2VkIGluIGNvbnN0cnVjdGlvbiAmIG1vdmVkIHRvIE5ZQyB0byB3b3JrIHdpdGggYSBzdGFydC11cCBhcGFydG1lbnQgcmVudGFsIGNvbXBhbnlcIixcbiAgfSxcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnQmVnYW4gd29ya2luZyBcIm9ubGluZVwiIGZ1bGwtdGltZScgfSxcbiAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiBcIlN0YXJ0ZWQgbXkgZGV2ZWxvcGVyIGpvdXJuZXlcIiB9LFxuICB7XG4gICAgeWVhcjogMjAyMixcbiAgICB0ZXh0OiBcIkJlZ2FuIG1ha2luZyBwcm9qZWN0cyBhbmQgcHVyc3Vpbmcgc29mdHdhcmUgZGV2ZWxvcG1lbnQgZnVsbC10aW1lXCIsXG4gIH0sXG5dO1xuIl0sIm5hbWVzIjpbInByb2plY3RzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidGFncyIsInNvdXJjZSIsInZpc2l0IiwiaWQiLCJUaW1lTGluZURhdGEiLCJ5ZWFyIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/constants/constants.js\n"));

/***/ })

});