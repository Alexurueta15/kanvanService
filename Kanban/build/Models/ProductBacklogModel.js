"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productBacklogSchema = new mongoose_1.Schema({
    claveProyecto: String,
    clave: String,
    claveScrumDeveloper: String,
    funcionalidad: String,
    estatus: String,
}, {
    versionKey: false
});
exports.default = mongoose_1.model("ProductBacklog", productBacklogSchema);
