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
exports.DeveloperService = void 0;
const DeveloperModel_1 = __importDefault(require("../Models/DeveloperModel"));
class DeveloperService {
    save(developer) {
        return __awaiter(this, void 0, void 0, function* () {
            var developerDocument = new DeveloperModel_1.default(developer);
            const clave = (developerDocument.get("nombre")[0] + developerDocument.get("apellidoPaterno")[0] + developerDocument.get("apellidoMaterno")[0]).toUpperCase();
            developerDocument.set("clave", clave);
            var developerDocument = new DeveloperModel_1.default(developerDocument);
            yield developerDocument.save();
            return developerDocument.toObject();
        });
    }
    update(developer) {
        return __awaiter(this, void 0, void 0, function* () {
            const clave = (developer.get("nombre")[0] + developer.get("apellidoPaterno")[0] + developer.get("apellidoMaterno")[0]).toUpperCase();
            developer.set("clave", clave);
            console.log("lo que se actualiza: " + developer);
            developer.save();
            return developer.toObject();
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield DeveloperModel_1.default.find().exec();
        });
    }
    getOne(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield DeveloperModel_1.default.findOne({ clave: clave }).exec();
        });
    }
    deleteOne(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            yield DeveloperModel_1.default.deleteOne({ clave: clave }).exec();
        });
    }
}
exports.DeveloperService = DeveloperService;
