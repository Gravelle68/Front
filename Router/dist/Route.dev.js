"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Route = function Route(url, title, pathHtml, authorize) {
  var pathJS = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";

  _classCallCheck(this, Route);

  this.url = url;
  this.title = title;
  this.pathHtml = pathHtml;
  this.pathJS = pathJS;
  this.authorize = authorize;
};

exports["default"] = Route;