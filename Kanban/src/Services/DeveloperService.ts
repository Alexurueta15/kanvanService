import DeveloperModel from "../Models/DeveloperModel";
import { Document } from "mongoose";
export class DeveloperService {

    public async save(developer: Document): Promise<Document> {
        const clave = (developer.get("nombre")[0] + developer.get("apellidoPaterno")[0] + developer.get("apellidoMaterno")[0]).toUpperCase();
        developer.set("clave", clave);
        var developer = new DeveloperModel(developer);
        await developer.save();
        return developer.toObject();
    }

    public async update(developer: Document): Promise<Document> {
        const clave = (developer.get("nombre")[0] + developer.get("apellidoPaterno")[0] + developer.get("apellidoMaterno")[0]).toUpperCase();
        developer.set("clave", clave);
        developer.save();
        return developer.toObject();
    }

    public async getAll(): Promise<Document[]> {
        return await DeveloperModel.find().exec();
    }

    public async getOne(clave: string): Promise<Document | null> {
        return await DeveloperModel.findOne({ clave: clave }).exec();
    }

    public async deleteOne(clave: string): Promise<void> {
        await DeveloperModel.deleteOne({ clave: clave }).exec();
    }
} 