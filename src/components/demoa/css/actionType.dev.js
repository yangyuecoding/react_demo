"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _type = require("./type");

var add = function add(payload) {
  return {
    type: _type.ADD,
    payload: payload
  };
};

var addThunk = function addThunk(payload) {
  return function (dispatch, getState) {
    dispatch(add(payload));
  };
};

var _default = {
  addThunk: addThunk
};
exports["default"] = _default;