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
exports.Scrumteam = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const Developer_1 = require("./Developer");
const Proyecto_1 = require("./Proyecto");
let Scrumteam = class Scrumteam {
    constructor() {
        this.integrantes = new Array;
    }
};
__decorate([
    typegoose_1.Prop({ default: typegoose_1.mongoose.Types.ObjectId }),
    __metadata("design:type", typegoose_1.mongoose.Types.ObjectId)
], Scrumteam.prototype, "_id", void 0);
__decorate([
    typegoose_1.Prop({ ref: () => Proyecto_1.Proyecto }),
    __metadata("design:type", Proyecto_1.Proyecto)
], Scrumteam.prototype, "proyecto", void 0);
__decorate([
    typegoose_1.Prop({ uppercase: true }),
    __metadata("design:type", String)
], Scrumteam.prototype, "clave", void 0);
__decorate([
    typegoose_1.Prop({ default: new Array, ref: () => Developer_1.Developer }),
    __metadata("design:type", Array)
], Scrumteam.prototype, "integrantes", void 0);
Scrumteam = __decorate([
    typegoose_1.modelOptions({ schemaOptions: { toJSON: { virtuals: true }, toObject: { virtuals: true } } })
], Scrumteam);
exports.Scrumteam = Scrumteam;
