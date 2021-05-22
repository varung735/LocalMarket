"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose.default.Schema;
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  collection: 'User'
});

var _default = new _mongoose.default.model('User', userSchema);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvUmVzb3VyY2VzL3VzZXIvdXNlci5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsInVzZXJTY2hlbWEiLCJmaXJzdE5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJsYXN0TmFtZSIsImVtYWlsIiwicm9sZSIsInBhc3N3b3JkIiwiY29sbGVjdGlvbiIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLGtCQUFTRCxNQUF4QjtBQUNBLE1BQU1FLFVBQVUsR0FBRyxJQUFJRixNQUFKLENBQVc7QUFDMUJHLEVBQUFBLFNBQVMsRUFBQztBQUNOQyxJQUFBQSxJQUFJLEVBQUNDLE1BREM7QUFFTkMsSUFBQUEsUUFBUSxFQUFDO0FBRkgsR0FEZ0I7QUFLMUJDLEVBQUFBLFFBQVEsRUFBQztBQUNMSCxJQUFBQSxJQUFJLEVBQUNDLE1BREE7QUFFTEMsSUFBQUEsUUFBUSxFQUFDO0FBRkosR0FMaUI7QUFTMUJFLEVBQUFBLEtBQUssRUFBQztBQUNGSixJQUFBQSxJQUFJLEVBQUNDLE1BREg7QUFFRkMsSUFBQUEsUUFBUSxFQUFDO0FBRlAsR0FUb0I7QUFhMUJHLEVBQUFBLElBQUksRUFBQztBQUNETCxJQUFBQSxJQUFJLEVBQUNDLE1BREo7QUFFREMsSUFBQUEsUUFBUSxFQUFDO0FBRlIsR0FicUI7QUFpQjFCSSxFQUFBQSxRQUFRLEVBQUM7QUFDTE4sSUFBQUEsSUFBSSxFQUFDQyxNQURBO0FBRUxDLElBQUFBLFFBQVEsRUFBQztBQUZKO0FBakJpQixDQUFYLEVBcUJoQjtBQUFDSyxFQUFBQSxVQUFVLEVBQUU7QUFBYixDQXJCZ0IsQ0FBbkI7O2VBc0JlLElBQUlWLGtCQUFTVyxLQUFiLENBQW1CLE1BQW5CLEVBQTJCVixVQUEzQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgZmlyc3ROYW1lOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgbGFzdE5hbWU6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWVcclxuICAgIH0sXHJcbiAgICBlbWFpbDp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIHJvbGU6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWVcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfVxyXG59LCB7Y29sbGVjdGlvbjogJ1VzZXInfSk7XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBtb25nb29zZS5tb2RlbCgnVXNlcicsIHVzZXJTY2hlbWEpOyJdfQ==