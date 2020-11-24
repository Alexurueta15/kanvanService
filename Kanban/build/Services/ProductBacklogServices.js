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
const ProductBacklog_1 = require("../Beans/ProductBacklog");
const Proyecto_1 = require("../Beans/Proyecto");
const Utilities_1 = __importDefault(require("../utils/Utilities"));
const ProyectoService_1 = __importDefault(require("./ProyectoService"));
class ProductBacklogService {
    static save(productBacklog) {
        return __awaiter(this, void 0, void 0, function* () {
            productBacklog.clave = Utilities_1.default.getInitials(productBacklog.funcionalidad);
            if (productBacklog.developer != null || productBacklog.developer != undefined) {
                productBacklog.estatus = "Seleccionado";
            }
            const newProductBacklog = yield this.productBacklogModel.create(productBacklog);
            yield this.changeStatus(newProductBacklog);
            return newProductBacklog;
        });
    }
    static update(productBacklog) {
        return __awaiter(this, void 0, void 0, function* () {
            const claveAnterior = productBacklog.clave;
            productBacklog.clave = Utilities_1.default.getInitials(productBacklog.funcionalidad);
            if (productBacklog.developer != null || productBacklog.developer != undefined && productBacklog.estatus == "Pendiente") {
                productBacklog.estatus = "Seleccionado";
            }
            yield this.productBacklogModel.updateOne({ clave: claveAnterior }, productBacklog).exec();
            yield this.changeStatus(productBacklog);
            return productBacklog;
        });
    }
    static getAllByProyecto(proyecto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productBacklogModel.find({ proyecto: proyecto }).exec();
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productBacklogModel.find()
                .populate({ path: "proyecto", model: typegoose_1.getModelForClass(Proyecto_1.Proyecto) })
                .populate({ path: "developer", model: typegoose_1.getModelForClass(Developer_1.Developer) })
                .exec();
        });
    }
    static getOne(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productBacklogModel.findOne({ clave })
                .populate({ path: "proyecto", model: typegoose_1.getModelForClass(Proyecto_1.Proyecto) })
                .populate({ path: "developer", model: typegoose_1.getModelForClass(Developer_1.Developer) })
                .exec();
        });
    }
    static deleteOne(clave) {
        return __awaiter(this, void 0, void 0, function* () {
            const productBacklog = yield this.getOne(clave);
            if (productBacklog) {
                yield this.productBacklogModel.deleteOne({ clave }).exec();
                yield this.changeStatus(productBacklog);
            }
        });
    }
    static changeStatus(productBacklog) {
        return __awaiter(this, void 0, void 0, function* () {
            var estatusProyecto;
            const productBacklogList = yield this.getAllByProyecto(productBacklog.proyecto);
            if (productBacklogList.length > 0) {
                const terminados = productBacklogList.filter((e) => e.estatus == "Terminado");
                const enProceso = productBacklogList.filter((e) => e.estatus == "Proceso");
                const seleccionados = productBacklogList.filter((e) => e.estatus == "Seleccionado");
                if (terminados.length == productBacklogList.length) {
                    estatusProyecto = "Terminado";
                }
                else if (enProceso.length > 0) {
                    estatusProyecto = "Proceso";
                }
                else if (seleccionados.length > 0) {
                    estatusProyecto = "Seleccionado";
                }
                else {
                    estatusProyecto = "Pendiente";
                }
            }
            else {
                estatusProyecto = "Pendiente";
            }
            var proyecto = yield ProyectoService_1.default.getOne(productBacklog.proyecto.clave);
            if (proyecto) {
                proyecto.estatus = estatusProyecto;
                yield ProyectoService_1.default.update(proyecto);
            }
        });
    }
}
exports.default = ProductBacklogService;
ProductBacklogService.productBacklogModel = typegoose_1.getModelForClass(ProductBacklog_1.ProductBacklog);
