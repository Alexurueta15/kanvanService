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
exports.ProductBacklogService = void 0;
const ProductBacklogModel_1 = __importDefault(require("../Models/ProductBacklogModel"));
const ProyectoService_1 = require("./ProyectoService");
class ProductBacklogService {
    save(productBacklog) {
        return __awaiter(this, void 0, void 0, function* () {
            productBacklog.estatus = "Pendiente";
            var productBacklogDao = new ProductBacklogModel_1.default(productBacklog);
            yield productBacklogDao.save();
            return productBacklogDao.toJSON();
        });
    }
    update(productBacklog) {
        return __awaiter(this, void 0, void 0, function* () {
            var productBacklogDao = new ProductBacklogModel_1.default(productBacklog);
            yield productBacklogDao.save();
            var estatusProyecto;
            var estatusProyectoTerminado = false;
            var estatusProyectoSeleccionado = false;
            var estatusProyectoProceso = false;
            const productBacklogList = yield this.getAllByFilter({ claveProyecto: productBacklog.getClaveProyecto() });
            productBacklogList.forEach(e => {
                if (e.getEstatus() != "Terminado") {
                    estatusProyectoTerminado = false;
                }
            });
            if (estatusProyectoTerminado) {
                estatusProyecto = "Terminado";
            }
            else {
                productBacklogList.forEach(e => {
                    if (e.getEstatus() == "Proceso") {
                        estatusProyectoProceso = true;
                    }
                });
                if (estatusProyectoProceso) {
                    estatusProyecto = "Proceso";
                }
                else {
                    productBacklogList.forEach(e => {
                        if (e.getEstatus() != null) {
                            estatusProyectoSeleccionado = true;
                        }
                    });
                    if (estatusProyectoSeleccionado) {
                        estatusProyecto = "Seleccionado";
                    }
                    else {
                        estatusProyecto = "Pendiente";
                    }
                }
            }
            var proyectoService = new ProyectoService_1.ProyectoService();
            var proyecto = yield proyectoService.getOne(productBacklog.getClaveProyecto());
            proyecto.setEstatus(estatusProyecto);
            yield proyectoService.save(proyecto);
            return productBacklogDao.toJSON();
        });
    }
    getAllByFilter(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return JSON.parse((yield ProductBacklogModel_1.default.find(filter).lean().exec()).toString());
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return JSON.parse((yield ProductBacklogModel_1.default.find().lean().exec()).toString());
        });
    }
    getOne(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProductBacklogModel_1.default.findOne({ _clave: clave }).exec().then(d => d === null || d === void 0 ? void 0 : d.toJSON());
        });
    }
    deleteOne(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProductBacklogModel_1.default.deleteOne({ _clave: clave }).lean().exec().then(d => d === null || d === void 0 ? void 0 : d.toJSON());
        });
    }
}
exports.ProductBacklogService = ProductBacklogService;
