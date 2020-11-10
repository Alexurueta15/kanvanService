import { Schema, model } from "mongoose";

const proyectoSchema = new Schema({
    clave: String,
    nombre: String,
    fechaInicio: Date,
    fechaFinal: Date,
    estatus: String,
    fechaEstatus: Date
},{
    versionKey:false
});

export default model("Proyecto", proyectoSchema);