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
const mongoose_1 = __importDefault(require("mongoose"));
const DeveloperService_1 = __importDefault(require("./Services/DeveloperService"));
const chalk_1 = __importDefault(require("chalk"));
const DeveloperBean_1 = require("./Beans/DeveloperBean");
const typegoose_1 = require("@typegoose/typegoose");
const MONGO_URI = 'mongodb://localhost/kanban';
const log = console.log;
//conexion a mongodb
mongoose_1.default.set("useFindAndModify", true);
mongoose_1.default.connect(MONGO_URI, { useNewUrlParser: true, useCreateIndex: true }).then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("conectado a la bd");
    //---------------------test de CRUD para developers
    const log = console.log;
    const developerModel = typegoose_1.getModelForClass(DeveloperBean_1.DeveloperBean);
    log(chalk_1.default.blue.bold("GUARDAR"));
    var developer = new DeveloperBean_1.DeveloperBean();
    developer.nombre = "oscar alexis";
    developer.apellidoPaterno = "urueta";
    developer.apellidoMaterno = "Caballero";
    yield DeveloperService_1.default.save(developer);
    log(chalk_1.default.red.bold("CONSULTAR"));
    var listaDevelopers = yield DeveloperService_1.default.getAll();
    listaDevelopers.forEach(e => log(e));
    log(chalk_1.default.red.bold("GET ONE"));
    log(yield DeveloperService_1.default.getOne("OUC"));
    log(chalk_1.default.blue.bold("actualizar 7u7"));
    var developerToUpdate = yield DeveloperService_1.default.getOne("OUC");
    if (developerToUpdate) {
        developerToUpdate.nombre = "estefano";
        yield DeveloperService_1.default.update(developerToUpdate);
    }
    log(chalk_1.default.blue.bold("GUARDAR otro registro"));
    var developer = new DeveloperBean_1.DeveloperBean();
    developer.nombre = "diego";
    developer.apellidoPaterno = "flores";
    developer.apellidoMaterno = "montes";
    yield DeveloperService_1.default.save(developer);
    var listaDevelopers = yield DeveloperService_1.default.getAll();
    listaDevelopers.forEach((e) => log(e.nombre));
    log(chalk_1.default.green.bold("BORRAR uno"));
    yield DeveloperService_1.default.delete("DFM");
    var listaDevelopers = yield DeveloperService_1.default.getAll();
    listaDevelopers.forEach(e => log("nombre: " + e.nombre + " apellido: " + e.apellidoPaterno));
}));
