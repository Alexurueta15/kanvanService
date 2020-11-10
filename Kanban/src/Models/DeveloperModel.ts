import { Schema, model } from "mongoose";

const developerSchema = new Schema({
    clave: String,
    nombre: String,
    apellidoPaterno: String,
    apellidoMaterno: String
},{
    versionKey:false
});

export default model("Developer", developerSchema);