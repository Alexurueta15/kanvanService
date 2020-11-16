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
exports.Proyecto = void 0;
const typegoose_1 = require("@typegoose/typegoose");
class Proyecto {
}
__decorate([
    typegoose_1.Prop({ default: typegoose_1.mongoose.Types.ObjectId() }),
    __metadata("design:type", typegoose_1.mongoose.Types.ObjectId)
], Proyecto.prototype, "_id", void 0);
__decorate([
    typegoose_1.Prop({ uppercase: true }),
    __metadata("design:type", String)
], Proyecto.prototype, "clave", void 0);
__decorate([
    typegoose_1.Prop(),
    __metadata("design:type", String)
], Proyecto.prototype, "nombre", void 0);
__decorate([
    typegoose_1.Prop(),
    __metadata("design:type", String)
], Proyecto.prototype, "fechaInicio", void 0);
__decorate([
    typegoose_1.Prop(),
    __metadata("design:type", String)
], Proyecto.prototype, "fechaFinal", void 0);
__decorate([
    typegoose_1.Prop({ default: "Pendiente" }),
    __metadata("design:type", String)
], Proyecto.prototype, "estatus", void 0);
__decorate([
    typegoose_1.Prop({ default: Date.now().toString() }),
    __metadata("design:type", String)
], Proyecto.prototype, "fechaEstatus", void 0);
exports.Proyecto = Proyecto;
