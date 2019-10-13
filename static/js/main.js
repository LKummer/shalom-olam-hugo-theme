/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/header-links.js":
/*!********************************!*\
  !*** ./source/header-links.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var headers = $('#post-content :header');\nvar paragraph_link_html = '<i id=\"paragraph-link-icon\" class=\"paragraph link icon\" onclick=\"to_paragraph(this)\"></i>';\nvar toc_link_html = '<i id=\"toc-link-icon\" class=\"list ul link icon\" onclick=\"to_toc(this)\"></i>';\nheaders.popup({\n  position: 'left center',\n  distanceAway: 10,\n  hoverable: true,\n  exclusive: true,\n  delay: {\n    show: 0,\n    hide: 250\n  },\n  html: ($('#toc').length <= 0 ? '' : toc_link_html) + paragraph_link_html,\n  forcePosition: true,\n  inline: true\n});\n\nfunction get_header(element) {\n  return $(element).parent('.popup').prev().attr('id');\n}\n\n;\n\nwindow.to_paragraph = function (e) {\n  var header = get_header(e);\n  window.location = \"#\".concat(header);\n};\n\nwindow.to_toc = function () {\n  if ($('#toc.accordion .title').hasClass('active')) {\n    window.location = '#toc';\n  } else {\n    $('.ui.accordion#toc').accordion('open', 0);\n    setTimeout(function () {\n      window.location = '#toc';\n    }, 500);\n  }\n\n  ;\n};\n\n//# sourceURL=webpack:///./source/header-links.js?");

/***/ }),

/***/ "./source/index.js":
/*!*************************!*\
  !*** ./source/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_links_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-links.js */ \"./source/header-links.js\");\n/* harmony import */ var _header_links_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_links_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.js */ \"./source/search.js\");\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_search_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n$('.hamburger.item').click(function (e) {\n  $('.ui.modal').modal('show');\n});\n$('.ui.accordion').accordion();\n\n//# sourceURL=webpack:///./source/index.js?");

/***/ }),

/***/ "./source/search.js":
/*!**************************!*\
  !*** ./source/search.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var fuse_options = {\n  shouldSort: true,\n  includeMatches: true,\n  findAllMatches: true,\n  threshold: .5,\n  location: 0,\n  distance: 100,\n  maxPatternLength: 32,\n  minMatchCharLength: 1,\n  keys: ['title', 'series', 'categories']\n};\nvar fuse = false;\nvar fuse_promise = new Promise(function (resolve, reject) {\n  $.getJSON('/חיפוש/index.json', function (result, status) {\n    if (status === 'success') {\n      resolve(result);\n    } else {\n      reject();\n    }\n\n    ;\n  });\n}).then(function (response) {\n  fuse = new Fuse(response, fuse_options);\n});\n\nfunction string_insert(string, substring, position) {\n  return \"\".concat(string.slice(0, position)).concat(substring).concat(string.slice(position));\n}\n\nvar highlight_start = '<mark>';\nvar highlight_end = '</mark>';\n\nfunction highlight_string(string, matches) {\n  var extra_length = 0;\n  matches.forEach(function (indices) {\n    string = string_insert(string, highlight_start, indices[0] + extra_length);\n    extra_length += highlight_start.length;\n    string = string_insert(string, highlight_end, indices[1] + extra_length + 1);\n    extra_length += highlight_end.length;\n  });\n  return string;\n}\n\nfunction highlight_match(result) {\n  console.log(result.matches);\n  result.matches.forEach(function (match) {\n    if (match.key == 'title') {\n      result.item[match.key] = highlight_string(result.item[match.key], match.indices);\n    } else {\n      result.item[match.key][match.arrayIndex] = highlight_string(result.item[match.key][match.arrayIndex], match.indices);\n    }\n  });\n  return result;\n}\n\nfunction reduce_key(array, prefix, suffix) {\n  var delimeter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ', ';\n\n  if (array && array.length >= 1) {\n    var result = \"\".concat(prefix, \": \");\n    array.forEach(function (e) {\n      result += e + delimeter;\n    });\n    result = result.slice(0, -delimeter.length);\n    result += suffix;\n    return result;\n  } else {\n    return '';\n  }\n}\n\nfunction search(term) {\n  return $.extend(true, [], fuse.search(term)).map(function (result) {\n    return highlight_match(result);\n  }).reduce(function (acc, cur) {\n    var obj = {\n      title: cur.item.title,\n      url: cur.item.url\n    };\n    obj.description = \"\".concat(reduce_key(cur.item.series, 'סדרה', '. '), \"\\n                \").concat(reduce_key(cur.item.categories, 'קטגוריות', '.'), \"<br>\\n                \").concat(cur.item.date);\n    acc.push(obj);\n    return acc;\n  }, []);\n} // Menu Search\n\n\n$('.ui.search').search({\n  apiSettings: {\n    responseAsync: function responseAsync(settings, callback) {\n      if (fuse) {\n        var results = search(settings.urlData.query);\n        callback({\n          results: results,\n          success: true\n        });\n      } else {\n        return {\n          success: false\n        };\n      }\n    }\n  },\n  error: {\n    noResults: 'אולי תנסו משהו אחר?'\n  },\n  selectFirstResult: true,\n  searchDelay: 0\n}); // Search Page:\n\nfunction format_search_as_cards(search) {\n  return search.reduce(function (acc, cur) {\n    return acc + \"\\n                <a href=\".concat(cur.url, \" class=\\\"card\\\">\\n                <div class=\\\"content\\\">\\n                    <div class=\\\"header\\\">\").concat(cur.title, \"</div>\\n                    \").concat(cur.description, \"\\n                </div>\\n                </a>\");\n  }, '');\n}\n\n$('#search-input').click(function (e) {\n  var results = format_search_as_cards(search($(e.currentTarget).val()));\n  $('#search-results').html(results);\n});\n$('#search-input').keyup(function (e) {\n  var results = format_search_as_cards(search($(e.currentTarget).val()));\n  $('#search-results').html(results);\n});\n\n//# sourceURL=webpack:///./source/search.js?");

/***/ })

/******/ });