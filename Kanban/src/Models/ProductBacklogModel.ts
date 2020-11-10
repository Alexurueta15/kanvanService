import { Schema, model } from "mongoose";

const productBacklogSchema = new Schema({
    claveProyecto: String,
    clave: String,
    claveScrumDeveloper: String,
    funcionalidad: String,
    estatus: String,
},{
    versionKey:false
});

export default model("ProductBacklog", productBacklogSchema);