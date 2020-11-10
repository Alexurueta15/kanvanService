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
const DeveloperService_1 = require("./Services/DeveloperService");
const chalk_1 = __importDefault(require("chalk"));
const DeveloperModel_1 = __importDefault(require("./Models/DeveloperModel"));
const MONGO_URI = 'mongodb://localhost/kanban';
const log = console.log;
//conexion a mongodb
mongoose_1.default.set("useFindAndModify", true);
mongoose_1.default.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => __awaiter(void 0, void 0, void 0, function* () {
    //---------------------test de CRUD para developers
    var developerService = new DeveloperService_1.DeveloperService();
    yield DeveloperModel_1.default.deleteMany({ clave: "OUC" });
    yield DeveloperModel_1.default.deleteMany({ clave: "DFM" });
    log(chalk_1.default.blue.bold("GUARDAR"));
    const developer = {
        nombre: "Oscar",
        apellidoPaterno: "urueta",
        apellidoMaterno: "Caballero"
    };
    yield developerService.save(new DeveloperModel_1.default(developer));
    log(chalk_1.default.red.bold("CONSULTAR"));
    var listaDevelopers = yield developerService.getAll();
    listaDevelopers.forEach((e) => log(e.get("nombre")));
    log(chalk_1.default.red.bold("GET ONE"));
    log(yield developerService.getOne("OUC"));
    log(chalk_1.default.blue.bold("actualizar 7u7"));
    var developerToUpdate = yield developerService.getOne("OUC");
    if (developerToUpdate) {
        developerToUpdate.set("nombre", "estefano");
        yield developerService.update(developerToUpdate);
    }
    log(chalk_1.default.blue.bold("GUARDAR otro registro"));
    const developer2 = {
        nombre: "Diego",
        apellidoPaterno: "flores",
        apellidoMaterno: "montes de oca"
    };
    yield developerService.save(new DeveloperModel_1.default(developer2));
    var listaDevelopers = yield developerService.getAll();
    listaDevelopers.forEach((e) => log(e.get("nombre")));
    log(chalk_1.default.green.bold("BORRAR uno"));
    yield developerService.deleteOne("DFM");
    var listaDevelopers = yield developerService.getAll();
    listaDevelopers.forEach(e => log(e));
    //---------------------test de CRUD para proyectos
    /*
    var proyectoService: ProyectoService = new ProyectoService();
    log(chalk.blue.bold("GUARDAR PROYECTO"));
    var proyecto: ProyectoBean = new ProyectoBean();
    proyecto.clave = "DSIC";
    proyecto.nombre = "desarrollo de sistema de control";
    proyecto.fechaInicio = new Date("07/11/2020");
    proyecto.fechaFinal = new Date("07/01/2021");
    await proyectoService.save(proyecto);
    var listaProyectos = await proyectoService.getAll();
    listaProyectos.forEach(e => log(e));

    //---------------------test de CRUD para scrum team

    log(chalk.blue.bold("GUARDAR SCRUM TEAM DEVELOP"));
    var scrumTeamService: ScrumTeamService = new ScrumTeamService();
    scrumTeamService.deleteOne("DSIC")
    var scrumTeam = new ScrumteamBean();
    scrumTeam.claveProyecto = "DSIC";
    scrumTeam.clave = "DINAMITA";
    scrumTeam.integrantes = [listaDevelopers[0]];
    await scrumTeamService.save(scrumTeam);
    var listaScrumTeams = await scrumTeamService.getAll();
    listaScrumTeams.forEach(e => log(e));

    //---------------------test de CRUD para product backlog
    log(chalk.blue.bold("GUARDAR PRODUCT BACKLOG"));
    var productBacklogService: ProductBacklogService = new ProductBacklogService();
    var productBacklog = new ProductBacklogBean()
    productBacklog.claveProyecto = "DSIC";
    productBacklog.claveScrumDeveloper = "AVRR";
    productBacklog.funcionalidad = "desarrollar pantallas de inicio de sesión";
    productBacklog.funcionalidad = "Alta";
    await productBacklogService.save(productBacklog);
    var listaProductsBacklogs = await productBacklogService.getAll();
    listaProductsBacklogs.forEach(e => log(e));
    log(chalk.red.bold("actualizando PRODUCT BACKLOG"));

    var docPorActualizar: ProductBacklogBean = listaProductsBacklogs[0];
    docPorActualizar.estatus = "Terminado";
    await productBacklogService.save(docPorActualizar);
    log(chalk.blue.bold("CONSULTA DE CAMBIO DE PROYECTO ESTATUS"));
    var listaProyectos = await proyectoService.getAll();
    listaProyectos.forEach(e => log(e));

    */
}));
