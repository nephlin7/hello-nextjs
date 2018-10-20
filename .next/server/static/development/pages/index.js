module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle
  }, "About")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");


var LayoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var MyLayout = function MyLayout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: LayoutStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (MyLayout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);



 // import fetch from 'isomorphic-unfetch'

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    as: "/post/".concat(post.id),
    href: "/post?title=".concat(post.title)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, post.title)));
}; // <Layout>
//     <h1>My Blog</h1>
//     <ul>
//         <PostLink slug="hello-next" title="Hello Next.js"/>
//         <PostLink slug="learn-next-js" title="Learn Next.js is awesome"/>
//         <PostLink slug="deploy-app-with-Zeit" title="Deploy apps with Zeit"/>
//     </ul>
// </Layout>


function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  }, {
    id: 'learn-nextjs',
    title: 'Learn Next.js is awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy apps with ZEIT'
  }];
}

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-740275346"
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-740275346"
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostLink, {
      key: post.id,
      post: post
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "740275346",
    css: "h1.jsx-740275346,a.jsx-740275346{font-family:\"Arial\";}ul.jsx-740275346{padding:0;}li.jsx-740275346{list-style:none;margin:5px 0;}a.jsx-740275346{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-740275346:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ2VyYWxkN1xcRGVza3RvcFxcaGVsbG8tbmV4dGpzXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUMwQixBQUd1QyxBQUlWLEFBSU0sQUFLSyxBQUtULFVBYmQsRUFjQSxJQVZlLElBUmYsU0FTQSxxQkFJYSxXQUNiIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZ2VyYWxkN1xcRGVza3RvcFxcaGVsbG8tbmV4dGpzXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuLy8gaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXHJcbiAgICA8bGk+XHJcbiAgICAgIDxMaW5rIGFzPXtgL3Bvc3QvJHtwb3N0LmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Bvc3QudGl0bGV9YH0+XHJcbiAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2xpPlxyXG4gIClcclxuICAgIC8vIDxMYXlvdXQ+XHJcbiAgICAvLyAgICAgPGgxPk15IEJsb2c8L2gxPlxyXG4gICAgLy8gICAgIDx1bD5cclxuICAgIC8vICAgICAgICAgPFBvc3RMaW5rIHNsdWc9XCJoZWxsby1uZXh0XCIgdGl0bGU9XCJIZWxsbyBOZXh0LmpzXCIvPlxyXG4gICAgLy8gICAgICAgICA8UG9zdExpbmsgc2x1Zz1cImxlYXJuLW5leHQtanNcIiB0aXRsZT1cIkxlYXJuIE5leHQuanMgaXMgYXdlc29tZVwiLz5cclxuICAgIC8vICAgICAgICAgPFBvc3RMaW5rIHNsdWc9XCJkZXBsb3ktYXBwLXdpdGgtWmVpdFwiIHRpdGxlPVwiRGVwbG95IGFwcHMgd2l0aCBaZWl0XCIvPlxyXG4gICAgLy8gICAgIDwvdWw+XHJcbiAgICAvLyA8L0xheW91dD5cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQb3N0cyAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgIHsgaWQ6ICdoZWxsby1uZXh0anMnLCB0aXRsZTogJ0hlbGxvIE5leHQuanMnfSxcclxuICAgICAgICAgIHsgaWQ6ICdsZWFybi1uZXh0anMnLCB0aXRsZTogJ0xlYXJuIE5leHQuanMgaXMgYXdlc29tZSd9LFxyXG4gICAgICAgICAgeyBpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCd9LFxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIGNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgPGgxPk15IEJsb2c8L2gxPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtnZXRQb3N0cygpLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fS8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIGgxLCBhIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICBcclxuICAgICAgICAvLyA8TGF5b3V0PlxyXG4gICAgICAgIC8vICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XHJcbiAgICAgICAgLy8gICAgPHVsPlxyXG4gICAgICAgIC8vICAgICB7cHJvcHMuc2hvd3MubWFwKCh7c2hvd30pID0+IChcclxuICAgICAgICAvLyAgICAgICA8bGkga2V5PXtzaG93LmlkfT5cclxuICAgICAgICAvLyAgICAgICAgIDxMaW5rIGFzPXtgL3Bvc3QvJHtzaG93LmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke3Nob3cuaWR9YH0+XHJcbiAgICAgICAgLy8gICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxyXG4gICAgICAgIC8vICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIC8vICAgICAgIDwvbGk+XHJcbiAgICAgICAgLy8gICAgICkpfVxyXG4gICAgICAgIC8vICAgPC91bD4gXHJcbiAgICAgICAgLy8gPC9MYXlvdXQ+XHJcbiAgICAgIClcclxuICAgICAgXHJcbiAgICAvLyAgIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpXHJcbiAgICAvLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKVxyXG4gICAgICBcclxuICAgIC8vICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgc2hvd3M6IGRhdGFcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH1cclxuICAgICAgXHJcbiAgICAgIGV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=C:\\Users\\gerald7\\Desktop\\hello-nextjs\\pages\\index.js */"
  })) // <Layout>
  //   <h1>Batman TV Shows</h1>
  //    <ul>
  //     {props.shows.map(({show}) => (
  //       <li key={show.id}>
  //         <Link as={`/post/${show.id}`} href={`/post?id=${show.id}`}>
  //           <a>{show.name}</a>
  //         </Link>
  //       </li>
  //     ))}
  //   </ul> 
  // </Layout>
  ;
}; //   Index.getInitialProps = async function() {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//     const data = await res.json()
//     console.log(`Show data fetched. Count: ${data.length}`)
//     return {
//       shows: data
//     }
//   }


/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map