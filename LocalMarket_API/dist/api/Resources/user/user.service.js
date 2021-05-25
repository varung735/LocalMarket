"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  validateUser(body) {
    const schema = _joi.default.object().keys({
      firstName: _joi.default.string().required(),
      lastName: _joi.default.string().required(),
      email: _joi.default.string().required(),
      role: _joi.default.string().required(),
      password: _joi.default.string().required()
    });

    const {
      error,
      value
    } = schema.validate(body);
    console.log(error);

    if (error && error.details) {
      return {
        error
      };
    }

    return {
      value
    };
  }

};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvUmVzb3VyY2VzL3VzZXIvdXNlci5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbInZhbGlkYXRlVXNlciIsImJvZHkiLCJzY2hlbWEiLCJqb2kiLCJvYmplY3QiLCJrZXlzIiwiZmlyc3ROYW1lIiwic3RyaW5nIiwicmVxdWlyZWQiLCJsYXN0TmFtZSIsImVtYWlsIiwicm9sZSIsInBhc3N3b3JkIiwiZXJyb3IiLCJ2YWx1ZSIsInZhbGlkYXRlIiwiY29uc29sZSIsImxvZyIsImRldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUVjO0FBQ1ZBLEVBQUFBLFlBQVksQ0FBQ0MsSUFBRCxFQUFNO0FBQ2QsVUFBTUMsTUFBTSxHQUFHQyxhQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDN0JDLE1BQUFBLFNBQVMsRUFBRUgsYUFBSUksTUFBSixHQUFhQyxRQUFiLEVBRGtCO0FBRTdCQyxNQUFBQSxRQUFRLEVBQUVOLGFBQUlJLE1BQUosR0FBYUMsUUFBYixFQUZtQjtBQUc3QkUsTUFBQUEsS0FBSyxFQUFFUCxhQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFIc0I7QUFJN0JHLE1BQUFBLElBQUksRUFBRVIsYUFBSUksTUFBSixHQUFhQyxRQUFiLEVBSnVCO0FBSzdCSSxNQUFBQSxRQUFRLEVBQUVULGFBQUlJLE1BQUosR0FBYUMsUUFBYjtBQUxtQixLQUFsQixDQUFmOztBQVFBLFVBQU07QUFBQ0ssTUFBQUEsS0FBRDtBQUFRQyxNQUFBQTtBQUFSLFFBQWlCWixNQUFNLENBQUNhLFFBQVAsQ0FBZ0JkLElBQWhCLENBQXZCO0FBQ0FlLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaOztBQUVBLFFBQUdBLEtBQUssSUFBSUEsS0FBSyxDQUFDSyxPQUFsQixFQUEwQjtBQUN0QixhQUFPO0FBQUNMLFFBQUFBO0FBQUQsT0FBUDtBQUNIOztBQUNELFdBQU87QUFBQ0MsTUFBQUE7QUFBRCxLQUFQO0FBQ0g7O0FBakJTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgam9pIGZyb20gJ2pvaSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIHZhbGlkYXRlVXNlcihib2R5KXtcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSBqb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSwgXHJcbiAgICAgICAgICAgIGVtYWlsOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSwgXHJcbiAgICAgICAgICAgIHJvbGU6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLCBcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpXHJcbiAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHtlcnJvciwgdmFsdWV9ID0gc2NoZW1hLnZhbGlkYXRlKGJvZHkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgaWYoZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XHJcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3J9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge3ZhbHVlfTtcclxuICAgIH1cclxufSJdfQ==