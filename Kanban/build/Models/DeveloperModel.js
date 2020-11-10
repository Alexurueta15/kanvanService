"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const developerSchema = new mongoose_1.Schema({
    clave: String,
    nombre: String,
    apellidoPaterno: String,
    apellidoMaterno: String
}, {
    versionKey: false
});
exports.default = mongoose_1.model("Developer", developerSchema);
