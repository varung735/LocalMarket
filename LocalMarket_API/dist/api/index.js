"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _seller = require("./Resources/sellerInfo/seller.router");

var _user = require("./Resources/user/user.router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mainRouter = _express.default.Router();

exports.mainRouter = mainRouter;
mainRouter.use('/users', _user.userRouter);
mainRouter.use('/seller', _seller.sellerRouter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvaW5kZXguanMiXSwibmFtZXMiOlsibWFpblJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJ1c2VyUm91dGVyIiwic2VsbGVyUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFTyxNQUFNQSxVQUFVLEdBQUdDLGlCQUFRQyxNQUFSLEVBQW5COzs7QUFDUEYsVUFBVSxDQUFDRyxHQUFYLENBQWUsUUFBZixFQUF5QkMsZ0JBQXpCO0FBQ0FKLFVBQVUsQ0FBQ0csR0FBWCxDQUFlLFNBQWYsRUFBMEJFLG9CQUExQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBzZWxsZXJSb3V0ZXIgfSBmcm9tICcuL1Jlc291cmNlcy9zZWxsZXJJbmZvL3NlbGxlci5yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VyUm91dGVyIH0gZnJvbSAnLi9SZXNvdXJjZXMvdXNlci91c2VyLnJvdXRlcic7XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbm1haW5Sb3V0ZXIudXNlKCcvdXNlcnMnLCB1c2VyUm91dGVyKTtcclxubWFpblJvdXRlci51c2UoJy9zZWxsZXInLCBzZWxsZXJSb3V0ZXIpOyJdfQ==