import mongoose, { Document } from "mongoose";
import DeveloperService from "./Services/DeveloperService";
import chalk from "chalk";
import { Developer } from "./Beans/Developer";
import { DocumentType, getModelForClass } from "@typegoose/typegoose";

const MONGO_URI = 'mongodb://localhost/kanban'
const log = console.log;
//conexion a mongodb
mongoose.set("useFindAndModify", true);
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useCreateIndex: true }).then(async () => {
    console.log("conectado a la bd")

    //---------------------test de CRUD para developers

    const log = console.log;
    const developerModel = getModelForClass(Developer);
    log(chalk.blue.bold("GUARDAR"));
    var developer: Developer = new Developer();
    developer.nombre = "oscar alexis";
    developer.apellidoPaterno = "urueta";
    developer.apellidoMaterno = "Caballero";
    await DeveloperService.save(developer);

    log(chalk.red.bold("CONSULTAR"));
    var listaDevelopers: Developer[] = await DeveloperService.getAll()
    listaDevelopers.forEach(e=>log(e));

    log(chalk.red.bold("GET ONE"));
    log(await DeveloperService.getOne("OUC"));
    log(chalk.blue.bold("actualizar 7u7"));
    var developerToUpdate: Developer | null = await DeveloperService.getOne("OUC");
    if (developerToUpdate) {
        developerToUpdate.nombre = "estefano";
        await DeveloperService.update(developerToUpdate);
    }
    log(chalk.blue.bold("GUARDAR otro registro"));
    var developer: Developer = new Developer();
    developer.nombre = "diego";
    developer.apellidoPaterno = "flores";
    developer.apellidoMaterno = "montes";
    await DeveloperService.save(developer);
    var listaDevelopers: Developer[] = await DeveloperService.getAll();
    listaDevelopers.forEach((e: Developer) => log(e.nombre));
    log(chalk.green.bold("BORRAR uno"));
    await DeveloperService.delete("DFM");
    var listaDevelopers: Developer[] = await DeveloperService.getAll();
    listaDevelopers.forEach(e => log("nombre: " + e.nombre + " apellido: " + e.apellidoPaterno));
});