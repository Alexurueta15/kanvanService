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
const mongoose_1 = __importDefault(require("mongoose"));
const chalk_1 = __importDefault(require("chalk"));
const Proyecto_1 = require("./Beans/Proyecto");
const ProyectoService_1 = __importDefault(require("./Services/ProyectoService"));
const MONGO_URI = 'mongodb://localhost/kanban';
const log = console.log;
//conexion a mongodb
mongoose_1.default.set("useFindAndModify", true);
mongoose_1.default.connect(MONGO_URI, { useNewUrlParser: true, useCreateIndex: true }).then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("conectado a la bd");
    //---------------------test de CRUD para developers
    // const log = console.log;
    // const developerModel = getModelForClass(Developer);
    // log(chalk.blue.bold("GUARDAR DEVELOPER"));
    // var developer: Developer = new Developer();
    // developer.nombre = "oscar alexis";
    // developer.apellidoPaterno = "urueta";
    // developer.apellidoMaterno = "Caballero";
    // await DeveloperService.save(developer);
    // log(chalk.red.bold("CONSULTAR"));
    // var listaDevelopers: Developer[] = await DeveloperService.getAll()
    // listaDevelopers.forEach(e=>log(e));
    // log(chalk.red.bold("GET ONE"));
    // log(await DeveloperService.getOne("OUC"));
    // log(chalk.blue.bold("actualizar 7u7"));
    // var developerToUpdate: Developer | null = await DeveloperService.getOne("OUC");
    // if (developerToUpdate) {
    //     developerToUpdate.nombre = "estefano";
    //     await DeveloperService.update(developerToUpdate);
    // }
    // log(chalk.blue.bold("GUARDAR otro registro"));
    // var developer: Developer = new Developer();
    // developer.nombre = "diego";
    // developer.apellidoPaterno = "flores";
    // developer.apellidoMaterno = "montes";
    // await DeveloperService.save(developer);
    // var listaDevelopers: Developer[] = await DeveloperService.getAll();
    // listaDevelopers.forEach((e: Developer) => log(e.nombre));
    // log(chalk.green.bold("BORRAR uno"));
    // await DeveloperService.delete("DFM");
    // var listaDevelopers: Developer[] = await DeveloperService.getAll();
    // listaDevelopers.forEach(e => log("nombre: " + e.nombre + " apellido: " + e.apellidoPaterno));
    //---------------------test de CRUD para proyectos
    // log(chalk.white.bold("--------------------------------------"));
    log(chalk_1.default.blue.bold("REGISTRAR PROYECTO "));
    var proyecto = new Proyecto_1.Proyecto();
    proyecto.nombre = "Kanban";
    proyecto.fechaInicio = "15/11/2020";
    proyecto.fechaFinal = "30/02/2021";
    yield ProyectoService_1.default.save(proyecto);
    log(chalk_1.default.blue.bold("REGISTRO EXITOSO"));
    log(chalk_1.default.blue.bold("REGISTRAR PROYECTO "));
    var proyecto = new Proyecto_1.Proyecto();
    proyecto.nombre = "Kanban dos";
    proyecto.fechaInicio = "16/11/2020";
    proyecto.fechaFinal = "30/02/2021";
    yield ProyectoService_1.default.save(proyecto);
    log(chalk_1.default.blue.bold("REGISTRO EXITOSO"));
    // log(chalk.red.bold("consultar PROYECTOS "));
    // var proyectos: Proyecto[] = await ProyectoService.getAll();
    // proyectos.forEach(e => log(e));
    // log(chalk.red.bold("actualizar"));
    // var proyectoToUpdate: Proyecto | null = await ProyectoService.getOne("KBN");
    // log("consulta: " + proyectoToUpdate);
    // if (proyectoToUpdate) {
    //     proyectoToUpdate.nombre = "proyecto de tablero kanban";
    //     proyectoToUpdate.fechaFinal = "15/01/2021";
    //     await ProyectoService.update(proyectoToUpdate);
    // }
    // log(chalk.red.bold("consultar PROYECTOS "));
    // proyectos = await ProyectoService.getAll();
    // proyectos.forEach(e => log(e));
    // log(chalk.red.bold("segundo  registro "));
    // var proyecto: Proyecto = new Proyecto();
    // proyecto.nombre = "proyecto SHOMAD";
    // proyecto.fechaInicio = "15/11/2020";
    // proyecto.fechaFinal = "30/02/2021";
    // await ProyectoService.save(proyecto);
    // log(chalk.blue.bold("REGISTRO EXITOSO"));
    // log(chalk.red.bold("consultar PROYECTOS "));
    // proyectos = await ProyectoService.getAll();
    // proyectos.forEach(e => log(e));
    // log(chalk.green.bold("eliminar"));
    // await ProyectoService.deleteOne("PDTK");
    // log(chalk.blue.bold("elimnar exitoso"));
    // log(chalk.red.bold("consultar PROYECTOS "));
    // proyectos = await ProyectoService.getAll();
    // proyectos.forEach(e => log(e));
    //---------------------test de CRUD para proyectos
    // log(chalk.white.bold("--------------------------------------"));
    // log(chalk.blue.bold("REGISTRAR SCRUM TEAM "));
    // var scrumTeam: Scrumteam = new Scrumteam();
    // var developer: Developer | null = await DeveloperService.getOne("OAUC");
    // var proyecto: Proyecto | null = await ProyectoService.getOne("NNAJ");
    // if (developer && proyecto) {
    //     scrumTeam.integrantes.push(developer);
    //     scrumTeam.proyecto = proyecto;
    //     await ScrumTeamService.save(scrumTeam);
    // }
    // log(chalk.blue.bold("consultar SCRUM TEAM "));
    // var scrumTeams: Scrumteam[] = await ScrumTeamService.getAll();
    // scrumTeams.forEach(e => log(e));
    // log(chalk.blue.bold("actualizar SCRUM TEAM con base en nuevo nombre de proyecto"));
    // var proyecto: Proyecto | null = await ProyectoService.getOne("NNAJ");
    // if (proyecto) {
    //     proyecto.nombre = "avr si ahora si xd";
    //     await ProyectoService.update(proyecto);
    // }
    // log(chalk.red.bold("eliminar SCRUM TEAM "));
    // await ScrumTeamService.deleteOne("SC-ASASX");
    // log(chalk.blue.bold("consultar SCRUM TEAM "));
    // var scrumTeams: Scrumteam[] = await ScrumTeamService.getAll();
    // scrumTeams.forEach(e => log(e));
    //-------------CRUD de productBacklog
    // log(chalk.green("registrar productbacklog"));
    // var productBacklog: ProductBacklog = new ProductBacklog();
    // productBacklog.developer = (await DeveloperService.getAll())[0];
    // productBacklog.funcionalidad = "pantalla de inicio de sesion";
    // productBacklog.proyecto = (await ProyectoService.getAll())[0];
    // await ProductBacklogService.save(productBacklog);
    // log(chalk.green("consultar productbacklog"));
    // var productBacklogs: ProductBacklog[] = await ProductBacklogService.getAll();
    // productBacklogs.forEach(e=>log(e));
    // log(chalk.green("actualizar productbacklog"));
    // var productBacklogToUpdate: ProductBacklog|null = await ProductBacklogService.getOne("PDIDS");
    // if (productBacklogToUpdate) {
    //     productBacklogToUpdate.estatus = "Terminado";
    //     await ProductBacklogService.update(productBacklogToUpdate);
    // }
    // log(chalk.green("consultar productbacklog"));
    // var productBacklogs: ProductBacklog[] = await ProductBacklogService.getAll();
    // productBacklogs.forEach(e=>log(e));
    // log(chalk.green("eliminar productbacklog"));
    // await ProductBacklogService.deleteOne("PDIDS");
    // log(chalk.green("consultar productbacklog"));
    // var productBacklogs: ProductBacklog[] = await ProductBacklogService.getAll();
    // productBacklogs.forEach(e=>log(e));
    mongoose_1.default.connection.close();
}));
