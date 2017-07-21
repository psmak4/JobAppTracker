webpackJsonp([1],{

/***/ 43:
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
var contacts_service_1 = __webpack_require__(47);
var CounterExampleViewModel = (function () {
    function CounterExampleViewModel() {
        this.Contacts = ko.observableArray();
        this.contactsService = new contacts_service_1.ContactsService();
        this.GetContacts();
    }
    CounterExampleViewModel.prototype.GetContacts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.Contacts;
                        return [4 /*yield*/, this.contactsService.GetContacts()];
                    case 1:
                        _a.apply(this, [_b.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    return CounterExampleViewModel;
}());
exports.default = { viewModel: CounterExampleViewModel, template: __webpack_require__(49) };


/***/ }),

/***/ 47:
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
var contact_1 = __webpack_require__(48);
var ContactsService = (function () {
    function ContactsService() {
    }
    ContactsService.prototype.GetContacts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var contacts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contacts = new Array();
                        return [4 /*yield*/, fetch('api/contacts', {
                                credentials: 'same-origin'
                            }).then(function (response) {
                                return response.json();
                            }).then(function (json) {
                                for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
                                    var contact = json_1[_i];
                                    contacts.push(new contact_1.Contact(contact.id, contact.name, contact.phone, contact.email));
                                }
                            }).catch(function (error) {
                                console.log(error);
                                return [];
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, contacts];
                }
            });
        });
    };
    return ContactsService;
}());
exports.ContactsService = ContactsService;


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Contact = (function () {
    function Contact(id, name, phone, email) {
        this.Id = id;
        this.Name = name;
        this.Phone = phone;
        this.Email = email;
    }
    return Contact;
}());
exports.Contact = Contact;


/***/ }),

/***/ 49:
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\r\n\t<div class=\"page-header\">\r\n\t\t<h1>Contacts</h1>\r\n\t</div>\r\n\r\n\t<ul class=\"cards\" data-bind=\"if: Contacts().length > 0\">\r\n\t\t<li class=\"card\" data-bind=\"foreach: Contacts\">\r\n\t\t\t<div class=\"card__header\">\r\n\t\t\t\t<div class=\"card__title\" data-bind=\"text: Name\"></div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"card__body\">\r\n\t\t\t\t<div data-bind=\"if: Phone\">\r\n\t\t\t\t\t<label class=\"small text-muted\">Phone:</label>\r\n\t\t\t\t\t<div data-bind=\"text: Phone\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div data-bind=\"if: Email\">\r\n\t\t\t\t\t<label class=\"small text-primary\">email</label>\r\n\t\t\t\t\t<div data-bind=\"text: Email\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<div data-bind=\"if: Contacts().length === 0\">\r\n\t\t<p class=\"lead\">There are no contacts to display.</p>\r\n\t</div>\r\n</section>"

/***/ })

});
//# sourceMappingURL=1.js.map