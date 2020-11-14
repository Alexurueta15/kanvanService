"use strict";
/**
 * import { ProductBacklogBean } from "../Beans/ProductBacklogBean";
import { ProyectoBean } from "../Beans/ProyectoBean";
import ProductBacklogModel from "../Models/ProductBacklogModel";
import { ProyectoService } from "./ProyectoService";

export class ProductBacklogService {

    public async save(productBacklog: any): Promise<ProductBacklogBean> {
        productBacklog.estatus = "Pendiente";
        var productBacklogDao = new ProductBacklogModel(productBacklog);
        await productBacklogDao.save();
        return productBacklogDao.toJSON();
    }

    public async update(productBacklog: ProductBacklogBean): Promise<ProductBacklogBean> {
        var productBacklogDao = new ProductBacklogModel(productBacklog);
        await productBacklogDao.save();
        var estatusProyecto: string;
        var estatusProyectoTerminado: boolean = false;
        var estatusProyectoSeleccionado: boolean = false;
        var estatusProyectoProceso: boolean = false;
        const productBacklogList: ProductBacklogBean[] = await this.getAllByFilter({ claveProyecto: productBacklog.getClaveProyecto()});
        productBacklogList.forEach(e => {
            if (e.getEstatus() != "Terminado") {
                estatusProyectoTerminado = false;
            }
        });
        if (estatusProyectoTerminado) {
            estatusProyecto = "Terminado";
        } else {
            productBacklogList.forEach(e => {
                if (e.getEstatus() == "Proceso") {
                    estatusProyectoProceso = true;
                }
            });
            if (estatusProyectoProceso) {
                estatusProyecto = "Proceso";
            } else {
                productBacklogList.forEach(e => {
                    if (e.getEstatus() != null) {
                        estatusProyectoSeleccionado = true;
                    }
                });
                if (estatusProyectoSeleccionado) {
                    estatusProyecto = "Seleccionado";
                } else {
                    estatusProyecto = "Pendiente";
                }
            }
        }
        var proyectoService = new ProyectoService();
        var proyecto: ProyectoBean = await proyectoService.getOne(productBacklog.getClaveProyecto());
        proyecto.setEstatus(estatusProyecto);
        await proyectoService.save(proyecto);
        return productBacklogDao.toJSON();
    }

    public async getAllByFilter(filter: Object): Promise<ProductBacklogBean[]> {
        return JSON.parse((await ProductBacklogModel.find(filter).lean().exec()).toString());
    }

    public async getAll(): Promise<ProductBacklogBean[]> {
        return JSON.parse((await ProductBacklogModel.find().lean().exec()).toString());
       }

    public async getOne(clave: string): Promise<ProductBacklogBean> {
        return await ProductBacklogModel.findOne({ _clave: clave }).exec().then(d=>d?.toJSON());
    }

    public async deleteOne(clave: string): Promise<ProductBacklogBean> {
        return await ProductBacklogModel.deleteOne({ _clave: clave }).lean().exec().then(d=>d?.toJSON());
    }
}
 */ 
