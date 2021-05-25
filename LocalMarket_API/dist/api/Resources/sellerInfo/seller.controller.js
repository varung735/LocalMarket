"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _seller = _interopRequireDefault(require("./seller.model"));

var _seller2 = _interopRequireDefault(require("./seller.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  findSellers(req, res) {
    _seller.default.find({}).populate('user_Id').then(seller => res.json(seller)).catch(err => res.status(500).json(err));
  },

  async addSeller(req, res) {
    try {
      const {
        error,
        value
      } = _seller2.default.validateSeller(req.body);

      if (error && error.details) {
        return res.status(500).json(error.details);
      }

      await _seller.default.create(value).then(seller => res.json(seller)).catch(err => res.status(500).json(err));
    } catch (err) {
      console.log(err);
    }
  },

  deleteSeller(req, res) {
    const id = req.params.id;

    _seller.default.findByIdAndRemove(id).then(seller => res.json(seller)).catch(err => res.status(500).json(err));
  },

  updateSeller(req, res) {
    const id = req.params.id;

    _seller.default.findOneAndUpdate({
      _id: id
    }, {
      $set: req.body
    }, {
      new: true
    }).then(seller => {
      if (!seller) {
        return res.status(400).json({
          err: "seller not found"
        });
      }

      return res.json(seller);
    }).catch(err => res.status(500).json(err));
  }

};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvUmVzb3VyY2VzL3NlbGxlckluZm8vc2VsbGVyLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiZmluZFNlbGxlcnMiLCJyZXEiLCJyZXMiLCJzZWxsZXJfaW5mbyIsImZpbmQiLCJwb3B1bGF0ZSIsInRoZW4iLCJzZWxsZXIiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJzdGF0dXMiLCJhZGRTZWxsZXIiLCJlcnJvciIsInZhbHVlIiwic2VsbGVyU2VydmljZSIsInZhbGlkYXRlU2VsbGVyIiwiYm9keSIsImRldGFpbHMiLCJjcmVhdGUiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlU2VsbGVyIiwiaWQiLCJwYXJhbXMiLCJmaW5kQnlJZEFuZFJlbW92ZSIsInVwZGF0ZVNlbGxlciIsImZpbmRPbmVBbmRVcGRhdGUiLCJfaWQiLCIkc2V0IiwibmV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7ZUFFYztBQUVWQSxFQUFBQSxXQUFXLENBQUNDLEdBQUQsRUFBS0MsR0FBTCxFQUFTO0FBQ2hCQyxvQkFBWUMsSUFBWixDQUFpQixFQUFqQixFQUFxQkMsUUFBckIsQ0FBOEIsU0FBOUIsRUFBeUNDLElBQXpDLENBQThDQyxNQUFNLElBQUlMLEdBQUcsQ0FBQ00sSUFBSixDQUFTRCxNQUFULENBQXhELEVBQTBFRSxLQUExRSxDQUFnRkMsR0FBRyxJQUFJUixHQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCSCxJQUFoQixDQUFxQkUsR0FBckIsQ0FBdkY7QUFDSCxHQUpTOztBQU1WLFFBQU1FLFNBQU4sQ0FBZ0JYLEdBQWhCLEVBQW9CQyxHQUFwQixFQUF3QjtBQUNwQixRQUFHO0FBQ0MsWUFBTTtBQUFDVyxRQUFBQSxLQUFEO0FBQVFDLFFBQUFBO0FBQVIsVUFBaUJDLGlCQUFjQyxjQUFkLENBQTZCZixHQUFHLENBQUNnQixJQUFqQyxDQUF2Qjs7QUFDQSxVQUFHSixLQUFLLElBQUlBLEtBQUssQ0FBQ0ssT0FBbEIsRUFBMEI7QUFDdEIsZUFBT2hCLEdBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JILElBQWhCLENBQXFCSyxLQUFLLENBQUNLLE9BQTNCLENBQVA7QUFDSDs7QUFFRCxZQUFNZixnQkFBWWdCLE1BQVosQ0FBbUJMLEtBQW5CLEVBQTBCUixJQUExQixDQUErQkMsTUFBTSxJQUFJTCxHQUFHLENBQUNNLElBQUosQ0FBU0QsTUFBVCxDQUF6QyxFQUNMRSxLQURLLENBQ0NDLEdBQUcsSUFBSVIsR0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxFQUFnQkgsSUFBaEIsQ0FBcUJFLEdBQXJCLENBRFIsQ0FBTjtBQUdILEtBVEQsQ0FTRSxPQUFNQSxHQUFOLEVBQVU7QUFDUlUsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlYLEdBQVo7QUFDSDtBQUNKLEdBbkJTOztBQXFCVlksRUFBQUEsWUFBWSxDQUFDckIsR0FBRCxFQUFLQyxHQUFMLEVBQVM7QUFDakIsVUFBTXFCLEVBQUUsR0FBR3RCLEdBQUcsQ0FBQ3VCLE1BQUosQ0FBV0QsRUFBdEI7O0FBRUFwQixvQkFBWXNCLGlCQUFaLENBQThCRixFQUE5QixFQUFrQ2pCLElBQWxDLENBQXVDQyxNQUFNLElBQUlMLEdBQUcsQ0FBQ00sSUFBSixDQUFTRCxNQUFULENBQWpELEVBQ0NFLEtBREQsQ0FDT0MsR0FBRyxJQUFJUixHQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCSCxJQUFoQixDQUFxQkUsR0FBckIsQ0FEZDtBQUVILEdBMUJTOztBQTRCVmdCLEVBQUFBLFlBQVksQ0FBQ3pCLEdBQUQsRUFBS0MsR0FBTCxFQUFTO0FBQ2pCLFVBQU1xQixFQUFFLEdBQUd0QixHQUFHLENBQUN1QixNQUFKLENBQVdELEVBQXRCOztBQUVBcEIsb0JBQVl3QixnQkFBWixDQUE2QjtBQUFDQyxNQUFBQSxHQUFHLEVBQUNMO0FBQUwsS0FBN0IsRUFBc0M7QUFBQ00sTUFBQUEsSUFBSSxFQUFDNUIsR0FBRyxDQUFDZ0I7QUFBVixLQUF0QyxFQUFzRDtBQUFDYSxNQUFBQSxHQUFHLEVBQUM7QUFBTCxLQUF0RCxFQUFrRXhCLElBQWxFLENBQXVFQyxNQUFNLElBQUk7QUFDN0UsVUFBRyxDQUFDQSxNQUFKLEVBQVc7QUFDUCxlQUFPTCxHQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCSCxJQUFoQixDQUFxQjtBQUFDRSxVQUFBQSxHQUFHLEVBQUU7QUFBTixTQUFyQixDQUFQO0FBQ0g7O0FBQ0QsYUFBT1IsR0FBRyxDQUFDTSxJQUFKLENBQVNELE1BQVQsQ0FBUDtBQUNILEtBTEQsRUFNQ0UsS0FORCxDQU1PQyxHQUFHLElBQUlSLEdBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JILElBQWhCLENBQXFCRSxHQUFyQixDQU5kO0FBT0g7O0FBdENTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2VsbGVyX2luZm8gZnJvbSAnLi9zZWxsZXIubW9kZWwnO1xyXG5pbXBvcnQgc2VsbGVyU2VydmljZSBmcm9tICcuL3NlbGxlci5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0e1xyXG5cclxuICAgIGZpbmRTZWxsZXJzKHJlcSxyZXMpe1xyXG4gICAgICAgIHNlbGxlcl9pbmZvLmZpbmQoe30pLnBvcHVsYXRlKCd1c2VyX0lkJykudGhlbihzZWxsZXIgPT4gcmVzLmpzb24oc2VsbGVyKSkuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBhZGRTZWxsZXIocmVxLHJlcyl7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCB7ZXJyb3IsIHZhbHVlfSA9IHNlbGxlclNlcnZpY2UudmFsaWRhdGVTZWxsZXIocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICBpZihlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnJvci5kZXRhaWxzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgc2VsbGVyX2luZm8uY3JlYXRlKHZhbHVlKS50aGVuKHNlbGxlciA9PiByZXMuanNvbihzZWxsZXIpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG5cclxuICAgICAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBkZWxldGVTZWxsZXIocmVxLHJlcyl7XHJcbiAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG5cclxuICAgICAgICBzZWxsZXJfaW5mby5maW5kQnlJZEFuZFJlbW92ZShpZCkudGhlbihzZWxsZXIgPT4gcmVzLmpzb24oc2VsbGVyKSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVTZWxsZXIocmVxLHJlcyl7XHJcbiAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG5cclxuICAgICAgICBzZWxsZXJfaW5mby5maW5kT25lQW5kVXBkYXRlKHtfaWQ6aWR9LHskc2V0OnJlcS5ib2R5fSx7bmV3OnRydWV9KS50aGVuKHNlbGxlciA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFzZWxsZXIpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6IFwic2VsbGVyIG5vdCBmb3VuZFwifSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHNlbGxlcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==