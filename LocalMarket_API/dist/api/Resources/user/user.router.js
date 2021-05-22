"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = void 0;

var _user = _interopRequireDefault(require("./user.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require('express');

const userRouter = express.Router();
exports.userRouter = userRouter;
userRouter.route('/seeUsers').get(_user.default.findAllUsers);
userRouter.route('/addUser').post(_user.default.createUser);
userRouter.route('/deleteUser/:id').delete(_user.default.deleteUser);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvUmVzb3VyY2VzL3VzZXIvdXNlci5yb3V0ZXIuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJ1c2VyUm91dGVyIiwiUm91dGVyIiwicm91dGUiLCJnZXQiLCJ1c2VyQ29udHJvbGxlciIsImZpbmRBbGxVc2VycyIsInBvc3QiLCJjcmVhdGVVc2VyIiwiZGVsZXRlIiwiZGVsZXRlVXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBREEsTUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUF2Qjs7QUFHTyxNQUFNQyxVQUFVLEdBQUdGLE9BQU8sQ0FBQ0csTUFBUixFQUFuQjs7QUFFUEQsVUFBVSxDQUFDRSxLQUFYLENBQWlCLFdBQWpCLEVBQThCQyxHQUE5QixDQUFrQ0MsY0FBZUMsWUFBakQ7QUFDQUwsVUFBVSxDQUFDRSxLQUFYLENBQWlCLFVBQWpCLEVBQTZCSSxJQUE3QixDQUFrQ0YsY0FBZUcsVUFBakQ7QUFDQVAsVUFBVSxDQUFDRSxLQUFYLENBQWlCLGlCQUFqQixFQUFvQ00sTUFBcEMsQ0FBMkNKLGNBQWVLLFVBQTFEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxuaW1wb3J0IHVzZXJDb250cm9sbGVyIGZyb20gJy4vdXNlci5jb250cm9sbGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnVzZXJSb3V0ZXIucm91dGUoJy9zZWVVc2VycycpLmdldCh1c2VyQ29udHJvbGxlci5maW5kQWxsVXNlcnMpO1xyXG51c2VyUm91dGVyLnJvdXRlKCcvYWRkVXNlcicpLnBvc3QodXNlckNvbnRyb2xsZXIuY3JlYXRlVXNlcik7XHJcbnVzZXJSb3V0ZXIucm91dGUoJy9kZWxldGVVc2VyLzppZCcpLmRlbGV0ZSh1c2VyQ29udHJvbGxlci5kZWxldGVVc2VyKTtcclxuIl19