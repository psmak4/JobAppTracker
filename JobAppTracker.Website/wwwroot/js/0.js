webpackJsonp([0],{

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(0);
var jobApps_service_1 = __webpack_require__(44);
var HomePageViewModel = (function () {
    function HomePageViewModel() {
        this.JobApps = ko.observableArray();
        this.jobAppsService = new jobApps_service_1.JobAppsService();
        this.GetJobApps();
    }
    HomePageViewModel.prototype.GetJobApps = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.JobApps;
                        return [4 /*yield*/, this.jobAppsService.GetJobApps()];
                    case 1:
                        _a.apply(this, [_b.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    return HomePageViewModel;
}());
exports.default = { viewModel: HomePageViewModel, template: __webpack_require__(46) };


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var jobApp_1 = __webpack_require__(45);
var JobAppsService = (function () {
    function JobAppsService() {
    }
    JobAppsService.prototype.GetJobApps = function () {
        return __awaiter(this, void 0, void 0, function () {
            var jobApps;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jobApps = new Array();
                        return [4 /*yield*/, fetch('api/jobapps', {
                                credentials: 'same-origin'
                            }).then(function (response) {
                                return response.json();
                            }).then(function (json) {
                                for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
                                    var jobApp = json_1[_i];
                                    jobApps.push(new jobApp_1.JobApp(jobApp.id, jobApp.title, jobApp.location, jobApp.type));
                                }
                            }).catch(function (error) {
                                console.log(error);
                                return [];
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, jobApps];
                }
            });
        });
    };
    return JobAppsService;
}());
exports.JobAppsService = JobAppsService;


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var JobApp = (function () {
    function JobApp(id, title, location, type) {
        this.Id = id;
        this.Title = title;
        this.Location = location;
        this.Type = type;
    }
    return JobApp;
}());
exports.JobApp = JobApp;


/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\r\n\t<div class=\"page-header\">\r\n\t\t<h1>Job Apps</h1>\r\n\t</div>\r\n\r\n\t<table class=\"table table-striped\" data-bind=\"if: JobApps().length > 0\">\r\n\t\t<thead>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Id</th>\r\n\t\t\t\t<th>Title</th>\r\n\t\t\t\t<th>Location</th>\r\n\t\t\t\t<th>Type</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\r\n\t\t<tbody data-bind=\"foreach: JobApps\">\r\n\t\t\t<tr>\r\n\t\t\t\t<td data-bind=\"text: Id\"></td>\r\n\t\t\t\t<td data-bind=\"text: Title\"></td>\r\n\t\t\t\t<td data-bind=\"text: Location\"></td>\r\n\t\t\t\t<td data-bind=\"text: Type\"></td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n\r\n\t<div data-bind=\"if: JobApps().length === 0\">\r\n\t\t<p class=\"lead\">There are no job apps to display.</p>\r\n\t</div>\r\n</section>"

/***/ })

});
//# sourceMappingURL=0.js.map