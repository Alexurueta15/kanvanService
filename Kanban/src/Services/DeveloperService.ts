import { getModelForClass, ReturnModelType } from "@typegoose/typegoose";
import { Developer } from "../Beans/Developer";
export default class DeveloperService {

    private static developerModel = getModelForClass(Developer)

    public static async save(developer: Developer): Promise<Developer> {
        const clave = (developer.nombre[0] + developer.apellidoPaterno[0] + developer.apellidoMaterno[0]);
        developer.clave = clave;
        return DeveloperService.developerModel.create(developer);
    }

    public static async update(developer: Developer): Promise<Developer> {
        return this.save(developer);
    }

    public static async getAll(): Promise<Developer[]> {
        return DeveloperService.developerModel.find().exec();
    }

    public static async getOne(clave: string): Promise<Developer | null> {
        return DeveloperService.developerModel.findOne({ clave }).exec();
    }

    public static async delete(clave: string): Promise<void> {
        DeveloperService.developerModel.deleteOne({ clave }).exec();
    }
} 