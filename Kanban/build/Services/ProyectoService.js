"use strict";
/**
 * import { ProyectoBean } from "../Beans/ProyectoBean";
import ProyectoModel from "../Models/ProyectoModel";

export class ProyectoService {

    public async save(proyecto: ProyectoBean): Promise<ProyectoBean> {
        var proyectoDao = new ProyectoModel(proyecto);
        await proyectoDao.save();
        return proyectoDao.toJSON();
    }

    public async update(proyecto: ProyectoBean): Promise<ProyectoBean> {
        return await this.save(proyecto);
    }

    public async getAll(): Promise<ProyectoBean[]> {
        return JSON.parse((await ProyectoModel.find().lean().exec()).toString());
       }

    public async getOne(clave: string): Promise<ProyectoBean> {
        return await ProyectoModel.findOne({ _clave: clave }).exec().then(d=>d?.toJSON());
    }

    public async deleteOne(clave: string): Promise<ProyectoBean> {
        return await ProyectoModel.deleteOne({ _clave: clave }).lean().exec().then(d=>d?.toJSON());
    }
}
 */ 
