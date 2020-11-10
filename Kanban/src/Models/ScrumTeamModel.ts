import { Schema, model } from "mongoose";

const scrumTeamSchema = new Schema({
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

export default model("ScrumTeam", scrumTeamSchema);