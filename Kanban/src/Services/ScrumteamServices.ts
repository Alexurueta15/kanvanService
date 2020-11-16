import { getModelForClass } from "@typegoose/typegoose";
import { Developer } from "../Beans/Developer";
import { Proyecto } from "../Beans/Proyecto";
import { Scrumteam } from "../Beans/ScrumTeam";

export class ScrumTeamService {

    private static scrumTeamModel = getModelForClass(Scrumteam);

    public static async save(scrumTeam: Scrumteam): Promise<Scrumteam> {
        scrumTeam.clave = "sc-" + scrumTeam.proyecto?.clave;
        return await this.scrumTeamModel.create(scrumTeam);
    }

    public static async update(scrumTeam: Scrumteam): Promise<Scrumteam> {
        const claveAnterior: string = scrumTeam.clave;
        var scrumTeamToUpdate: Scrumteam | null = await this.getOne(claveAnterior);
        if (scrumTeamToUpdate) {
            scrumTeamToUpdate.clave = "sc-" + scrumTeamToUpdate.proyecto?.clave;
            return await this.scrumTeamModel.updateOne({ clave: claveAnterior }, scrumTeamToUpdate);
        } else {
            return scrumTeam;
        }
    }

    public static async getAll(): Promise<Scrumteam[]> {
        return await this.scrumTeamModel.find()
            .populate({ path: "proyecto", model: getModelForClass(Proyecto) })
            .populate({ path: "integrantes", model: getModelForClass(Developer) })
            .exec();
    }

    public static async getOne(clave: string): Promise<Scrumteam | null> {
        return await this.scrumTeamModel.findOne({ clave: clave })
            .populate({ path: "proyecto", model: getModelForClass(Proyecto) })
            .populate({ path: "integrantes", model: getModelForClass(Developer) })
            .exec();
    }

    public static async deleteOne(clave: string): Promise<void> {
        await this.scrumTeamModel.deleteOne({ clave: clave }).exec();
    }
}