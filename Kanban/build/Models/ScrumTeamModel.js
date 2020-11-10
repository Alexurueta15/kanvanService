"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const scrumTeamSchema = new mongoose_1.Schema({
    clave: String,
    claveProyecto: String,
    nombre: String,
    fechaInicio: Date,
    fechaFinal: Date,
    estatus: String,
    fechaEstatus: Date,
    integrantes: Array
}, {
    versionKey: false
});
exports.default = mongoose_1.model("ScrumTeam", scrumTeamSchema);
