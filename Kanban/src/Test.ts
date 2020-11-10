import mongoose, { Document } from "mongoose";
import { DeveloperService } from "./Services/DeveloperService";
import chalk from "chalk";
import DeveloperModel from "./Models/DeveloperModel";

const MONGO_URI = 'mongodb://localhost/kanban'
const log = console.log;
//conexion a mongodb
mongoose.set("useFindAndModify", true);
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(async () => {


    //---------------------test de CRUD para developers
    var developerService: DeveloperService = new DeveloperService()
    await DeveloperModel.deleteMany({ clave: "OUC" });
    await DeveloperModel.deleteMany({ clave: "DFM" });
    log(chalk.blue.bold("GUARDAR"));
    const developer = {
        nombre: "Oscar",
        apellidoPaterno: "urueta",
        apellidoMaterno: "Caballero"
    }

    await developerService.save(new DeveloperModel(developer));

    log(chalk.red.bold("CONSULTAR"));
    var listaDevelopers: Document[] = await developerService.getAll();
    listaDevelopers.forEach((e: Document) => log(e.get("nombre")));

    log(chalk.red.bold("GET ONE"));
    log(await developerService.getOne("OUC"));
    log(chalk.blue.bold("actualizar 7u7"));
    var developerToUpdate: Document | null = await developerService.getOne("OUC");
    if (developerToUpdate) {
        developerToUpdate.set("nombre", "estefano");
        await developerService.update(developerToUpdate);
    }
    log(chalk.blue.bold("GUARDAR otro registro"));
    const developer2 = {
        nombre: "Diego",
        apellidoPaterno: "flores",
        apellidoMaterno: "montes de oca"
    }
    await developerService.save(new DeveloperModel(developer2));
    var listaDevelopers = await developerService.getAll();
    listaDevelopers.forEach((e: Document) => log(e.get("nombre")));
    log(chalk.green.bold("BORRAR uno"));
    await developerService.deleteOne("DFM");
    var listaDevelopers = await developerService.getAll();
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
}); 