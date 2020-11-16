import { getModelForClass } from "@typegoose/typegoose";
import { Proyecto } from "../Beans/Proyecto";
import { Scrumteam } from "../Beans/ScrumTeam";
import Utilities from "../utils/Utilities";
import { ScrumTeamService } from "./ScrumteamServices";

export default class ProyectoService {

    private static proyectoModel = getModelForClass(Proyecto);

    public static async save(proyecto: Proyecto): Promise<Proyecto> {
        proyecto.clave = Utilities.getInitials(proyecto.nombre);
        return await this.proyectoModel.create(proyecto);
    }

    public static async update(proyecto: Proyecto): Promise<Proyecto> {
        const claveAnterior: string = proyecto.clave;
        proyecto.clave = Utilities.getInitials(proyecto.nombre);
        var scrumTeamtoUpdate: Scrumteam | null = await ScrumTeamService.getOne("SC-" + claveAnterior);
        await this.proyectoModel.updateOne({ clave: claveAnterior }, proyecto).exec();
        if (scrumTeamtoUpdate) {
            await ScrumTeamService.update(scrumTeamtoUpdate);
        }
        return proyecto;
    }

    public static async getAll(): Promise<Proyecto[]> {
        return await this.proyectoModel.find().exec();
    }

    public static async getOne(clave: string): Promise<Proyecto | null> {
        return await this.proyectoModel.findOne({ clave: clave }).exec();
    }

    public static async deleteOne(clave: string): Promise<void> {
        await this.proyectoModel.deleteOne({ clave: clave }).exec();
    }
} 