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
exports.ScrumTeamService = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const Developer_1 = require("../Beans/Developer");
const Proyecto_1 = require("../Beans/Proyecto");
const ScrumTeam_1 = require("../Beans/ScrumTeam");
class ScrumTeamService {
    static save(scrumTeam) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            scrumTeam.clave = "sc-" + ((_a = scrumTeam.proyecto) === null || _a === void 0 ? void 0 : _a.clave);
            return yield this.scrumTeamModel.create(scrumTeam);
        });
    }
    static update(scrumTeam) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const claveAnterior = scrumTeam.clave;
            var scrumTeamToUpdate = yield this.getOne(claveAnterior);
            if (scrumTeamToUpdate) {
                scrumTeamToUpdate.clave = "sc-" + ((_a = scrumTeamToUpdate.proyecto) === null || _a === void 0 ? void 0 : _a.clave);
                return yield this.scrumTeamModel.updateOne({ clave: claveAnterior }, scrumTeamToUpdate);
            }
            else {
                return scrumTeam;
            }
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.scrumTeamModel.find()
                .populate({ path: "proyecto", model: typegoose_1.getModelForClass(Proyecto_1.Proyecto) })
                .populate({ path: "integrantes", model: typegoose_1.getModelForClass(Developer_1.Developer) })
                .exec();
        });
    }
    static getOne(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.scrumTeamModel.findOne({ clave: clave })
                .populate({ path: "proyecto", model: typegoose_1.getModelForClass(Proyecto_1.Proyecto) })
                .populate({ path: "integrantes", model: typegoose_1.getModelForClass(Developer_1.Developer) })
                .exec();
        });
    }
    static deleteOne(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.scrumTeamModel.deleteOne({ clave: clave }).exec();
        });
    }
}
exports.ScrumTeamService = ScrumTeamService;
ScrumTeamService.scrumTeamModel = typegoose_1.getModelForClass(ScrumTeam_1.Scrumteam);
