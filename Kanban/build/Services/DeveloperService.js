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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("@typegoose/typegoose");
const Developer_1 = require("../Beans/Developer");
const Utilities_1 = __importDefault(require("../utils/Utilities"));
class DeveloperService {
    static save(developer) {
        return __awaiter(this, void 0, void 0, function* () {
            const fullName = developer.nombre + " " + developer.apellidoPaterno + " " + developer.apellidoMaterno;
            developer.clave = Utilities_1.default.getInitials(fullName);
            return yield this.developerModel.create(developer);
        });
    }
    static update(developer) {
        return __awaiter(this, void 0, void 0, function* () {
            const claveAnterior = developer.clave;
            const fullName = developer.nombre + developer.apellidoPaterno + developer.apellidoMaterno;
            developer.clave = Utilities_1.default.getInitials(fullName);
            return yield this.developerModel.updateOne({ clave: claveAnterior }, developer);
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.developerModel.find().exec();
        });
    }
    static getOne(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.developerModel.findOne({ clave }).exec();
        });
    }
    static delete(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.developerModel.deleteOne({ clave }).exec();
        });
    }
}
exports.default = DeveloperService;
DeveloperService.developerModel = typegoose_1.getModelForClass(Developer_1.Developer);
