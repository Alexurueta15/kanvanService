"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const proyectoSchema = new mongoose_1.Schema({
    clave: String,
    nombre: String,
    fechaInicio: Date,
    fechaFinal: Date,
    estatus: String,
    fechaEstatus: Date
}, {
    versionKey: false
});
exports.default = mongoose_1.model("Proyecto", proyectoSchema);
