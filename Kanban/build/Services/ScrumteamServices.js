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
exports.ScrumTeamService = void 0;
const ScrumTeamModel_1 = __importDefault(require("../Models/ScrumTeamModel"));
class ScrumTeamService {
    save(scrumTeam) {
        return __awaiter(this, void 0, void 0, function* () {
            var scrumTeamDao = new ScrumTeamModel_1.default(scrumTeam);
            yield scrumTeamDao.save();
            return scrumTeamDao.toJSON();
        });
    }
    update(scrumTeam) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.save(scrumTeam);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return JSON.parse((yield ScrumTeamModel_1.default.find().lean().exec()).toString());
        });
    }
    getOne(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ScrumTeamModel_1.default.findOne({ _clave: clave }).exec().then(d => d === null || d === void 0 ? void 0 : d.toJSON());
        });
    }
    deleteOne(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ScrumTeamModel_1.default.deleteOne({ _clave: clave }).lean().exec().then(d => d === null || d === void 0 ? void 0 : d.toJSON());
        });
    }
}
exports.ScrumTeamService = ScrumTeamService;
