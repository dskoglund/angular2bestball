"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var golfer_service_1 = require("./golfer.service");
var GolfersComponent = (function () {
    function GolfersComponent(golferService) {
        this.golferService = golferService;
        this.toolbarTitle = 'Golfers';
    }
    GolfersComponent.prototype.getGolfers = function () {
        var _this = this;
        this.golferService.getGolfersSlowly().then(function (golfers) { return _this.golfers = golfers; });
    };
    ;
    GolfersComponent.prototype.ngOnInit = function () {
        this.getGolfers();
    };
    GolfersComponent.prototype.onSelect = function (golfer) {
        this.selectedGolfer = golfer;
    };
    return GolfersComponent;
}());
GolfersComponent = __decorate([
    core_1.Component({
        selector: 'my-golfers',
        templateUrl: "./golfers.component.html",
        styleUrls: ['./golfers.component.css']
    }),
    __metadata("design:paramtypes", [golfer_service_1.GolferService])
], GolfersComponent);
exports.GolfersComponent = GolfersComponent;
//# sourceMappingURL=golfers.component.js.map