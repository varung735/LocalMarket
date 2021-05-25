"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  validateSeller(body) {
    const schema = _joi.default.object().keys({
      user_Id: _joi.default.string().required(),
      BusinessName: _joi.default.string().required(),
      GST_no: _joi.default.string().required(),
      PAN_no: _joi.default.string().required(),
      Aadhar_no: _joi.default.string().required(),
      Bank_name: _joi.default.string().required(),
      AC_no: _joi.default.string().required()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvUmVzb3VyY2VzL3NlbGxlckluZm8vc2VsbGVyLnNlcnZpY2UuanMiXSwibmFtZXMiOlsidmFsaWRhdGVTZWxsZXIiLCJib2R5Iiwic2NoZW1hIiwiam9pIiwib2JqZWN0Iiwia2V5cyIsInVzZXJfSWQiLCJzdHJpbmciLCJyZXF1aXJlZCIsIkJ1c2luZXNzTmFtZSIsIkdTVF9ubyIsIlBBTl9ubyIsIkFhZGhhcl9ubyIsIkJhbmtfbmFtZSIsIkFDX25vIiwiZXJyb3IiLCJ2YWx1ZSIsInZhbGlkYXRlIiwiY29uc29sZSIsImxvZyIsImRldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUVjO0FBQ1ZBLEVBQUFBLGNBQWMsQ0FBQ0MsSUFBRCxFQUFNO0FBQ2hCLFVBQU1DLE1BQU0sR0FBR0MsYUFBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQzdCQyxNQUFBQSxPQUFPLEVBQUVILGFBQUlJLE1BQUosR0FBYUMsUUFBYixFQURvQjtBQUU3QkMsTUFBQUEsWUFBWSxFQUFFTixhQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFGZTtBQUc3QkUsTUFBQUEsTUFBTSxFQUFFUCxhQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFIcUI7QUFJN0JHLE1BQUFBLE1BQU0sRUFBRVIsYUFBSUksTUFBSixHQUFhQyxRQUFiLEVBSnFCO0FBSzdCSSxNQUFBQSxTQUFTLEVBQUVULGFBQUlJLE1BQUosR0FBYUMsUUFBYixFQUxrQjtBQU03QkssTUFBQUEsU0FBUyxFQUFFVixhQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFOa0I7QUFPN0JNLE1BQUFBLEtBQUssRUFBRVgsYUFBSUksTUFBSixHQUFhQyxRQUFiO0FBUHNCLEtBQWxCLENBQWY7O0FBVUEsVUFBTTtBQUFDTyxNQUFBQSxLQUFEO0FBQVFDLE1BQUFBO0FBQVIsUUFBaUJkLE1BQU0sQ0FBQ2UsUUFBUCxDQUFnQmhCLElBQWhCLENBQXZCO0FBRUFpQixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBWjs7QUFFQSxRQUFHQSxLQUFLLElBQUlBLEtBQUssQ0FBQ0ssT0FBbEIsRUFBMEI7QUFDdEIsYUFBTztBQUFDTCxRQUFBQTtBQUFELE9BQVA7QUFDSDs7QUFDRCxXQUFPO0FBQUNDLE1BQUFBO0FBQUQsS0FBUDtBQUNIOztBQXBCUyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpvaSBmcm9tICdqb2knO1xyXG5cclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICB2YWxpZGF0ZVNlbGxlcihib2R5KXtcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSBqb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICAgICAgICAgIHVzZXJfSWQ6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBCdXNpbmVzc05hbWU6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBHU1Rfbm86IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBQQU5fbm86IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBBYWRoYXJfbm86IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBCYW5rX25hbWU6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBBQ19ubzogam9pLnN0cmluZygpLnJlcXVpcmVkKClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qge2Vycm9yLCB2YWx1ZX0gPSBzY2hlbWEudmFsaWRhdGUoYm9keSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICBpZihlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtlcnJvcn07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7dmFsdWV9O1xyXG4gICAgfVxyXG59Il19