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
const Proyecto_1 = require("../Beans/Proyecto");
const Utilities_1 = __importDefault(require("../utils/Utilities"));
const ScrumteamServices_1 = require("./ScrumteamServices");
class ProyectoService {
    static save(proyecto) {
        return __awaiter(this, void 0, void 0, function* () {
            proyecto.clave = Utilities_1.default.getInitials(proyecto.nombre);
            return yield this.proyectoModel.create(proyecto);
        });
    }
    static update(proyecto) {
        return __awaiter(this, void 0, void 0, function* () {
            const claveAnterior = proyecto.clave;
            proyecto.clave = Utilities_1.default.getInitials(proyecto.nombre);
            var scrumTeamtoUpdate = yield ScrumteamServices_1.ScrumTeamService.getOne("SC-" + claveAnterior);
            yield this.proyectoModel.updateOne({ clave: claveAnterior }, proyecto).exec();
            if (scrumTeamtoUpdate) {
                yield ScrumteamServices_1.ScrumTeamService.update(scrumTeamtoUpdate);
            }
            return proyecto;
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.proyectoModel.find().exec();
        });
    }
    static getOne(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.proyectoModel.findOne({ clave: clave }).exec();
        });
    }
    static deleteOne(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.proyectoModel.deleteOne({ clave: clave }).exec();
        });
    }
}
exports.default = ProyectoService;
ProyectoService.proyectoModel = typegoose_1.getModelForClass(Proyecto_1.Proyecto);
