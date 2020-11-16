import { getModelForClass, ReturnModelType } from "@typegoose/typegoose";
import { Developer } from "../Beans/Developer";
import Utilities from "../utils/Utilities";
export default class DeveloperService {

    private static developerModel = getModelForClass(Developer)

    public static async save(developer: Developer): Promise<Developer> {
        const fullName: String = developer.nombre + " " + developer.apellidoPaterno + " " + developer.apellidoMaterno;
        developer.clave = Utilities.getInitials(fullName);
        return await this.developerModel.create(developer);
    }

    public static async update(developer: Developer): Promise<Developer> {
        const claveAnterior: string = developer.clave;
        const fullName: String = developer.nombre + developer.apellidoPaterno + developer.apellidoMaterno;
        developer.clave = Utilities.getInitials(fullName);
        return await this.developerModel.updateOne({ clave: claveAnterior }, developer);
    }

    public static async getAll(): Promise<Developer[]> {
        return await this.developerModel.find().exec();
    }

    public static async getOne(clave: string): Promise<Developer | null> {
        return await this.developerModel.findOne({ clave }).exec();
    }

    public static async delete(clave: string): Promise<void> {
        await this.developerModel.deleteOne({ clave }).exec();
    }
} 