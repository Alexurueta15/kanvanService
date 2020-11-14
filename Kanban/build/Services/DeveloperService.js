"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("@typegoose/typegoose");
const DeveloperBean_1 = require("../Beans/DeveloperBean");
class DeveloperService {
    static save(developer) {
        return __awaiter(this, void 0, void 0, function* () {
            const clave = (developer.nombre[0] + developer.apellidoPaterno[0] + developer.apellidoMaterno[0]);
            developer.clave = clave;
            return DeveloperService.developerModel.create(developer);
        });
    }
    static update(developer) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.save(developer);
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return DeveloperService.developerModel.find().exec();
        });
    }
    static getOne(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            return DeveloperService.developerModel.findOne({ clave }).exec();
        });
    }
    static delete(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            DeveloperService.developerModel.deleteOne({ clave }).exec();
        });
    }
}
exports.default = DeveloperService;
DeveloperService.developerModel = typegoose_1.getModelForClass(DeveloperBean_1.DeveloperBean);
