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
var golfer_1 = require("./golfer");
var GolferDetailComponent = (function () {
    function GolferDetailComponent() {
    }
    return GolferDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", golfer_1.Golfer)
], GolferDetailComponent.prototype, "golfer", void 0);
GolferDetailComponent = __decorate([
    core_1.Component({
        selector: 'golfer-detail',
        template: "\n  <div *ngIf=\"golfer\">\n    <md-card>\n      <md-card-title>{{golfer.name}} Details!</md-card-title>\n      <md-card-content>\n        <div>\n          <label>id: </label>{{golfer.id}}\n        </div>\n        <div>\n          <label>name: </label>\n          <md-input-container>\n            <input mdInput [(ngModel)]=\"golfer.name\" placeholder=\"name\">\n          </md-input-container>\n        </div>\n      </md-card-content>\n    </md-card>\n  </div>\n "
    })
], GolferDetailComponent);
exports.GolferDetailComponent = GolferDetailComponent;
//# sourceMappingURL=golfer-detail.component.js.map