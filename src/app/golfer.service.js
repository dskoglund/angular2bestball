"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_golfers_1 = require("./mock-golfers");
var GolferService = (function () {
    function GolferService() {
    }
    GolferService.prototype.getGolfers = function () {
        return Promise.resolve(mock_golfers_1.GOLFERS);
    };
    GolferService.prototype.getGolfersSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.getGolfers()); }, 2000);
        });
    };
    return GolferService;
}());
GolferService = __decorate([
    core_1.Injectable()
], GolferService);
exports.GolferService = GolferService;
//# sourceMappingURL=golfer.service.js.map