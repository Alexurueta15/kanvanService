import { getModelForClass } from "@typegoose/typegoose";
import { ProductBacklog } from "../Beans/ProductBacklog";
import { Proyecto } from "../Beans/Proyecto";
import { ProyectoService } from "./ProyectoService";

export class ProductBacklogService {

    private static productBacklogModel = getModelForClass(ProductBacklog)

    public static async save(productBacklog: ProductBacklog): Promise<ProductBacklog> {
        return this.productBacklogModel.create(productBacklog);
    }

    public static async update(productBacklog: ProductBacklog): Promise<ProductBacklog> {
        await this.save(productBacklog);
        var estatusProyecto: string;
        var estatusProyectoTerminado: boolean = false;
        var estatusProyectoSeleccionado: boolean = false;
        var estatusProyectoProceso: boolean = false;
        const productBacklogList: ProductBacklog[] = await this.getAllByFilter({ claveProyecto: productBacklog.});
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
        var proyecto: Proyecto = await proyectoService.getOne(productBacklog.getClaveProyecto());
        proyecto.setEstatus(estatusProyecto);
        await proyectoService.save(proyecto);
        return productBacklogDao.toJSON();
    }

    public static async getAllByFilter(claveProyecto: string): Promise<ProductBacklog[]> {
        return await this.productBacklogModel.find({claveProyecto}).exec();
    }

    public static async getAll(): Promise<ProductBacklog[]> {
        return await this.productBacklogModel.find().exec();
       }

    public static async getOne(claveProyecto: string): Promise<ProductBacklog | null> {
        return await this.productBacklogModel.findOne({claveProyecto}).exec();
    }

    public static async deleteOne(claveProyecto: string): Promise<void> {
         await this.productBacklogModel.deleteOne({claveProyecto}).exec();
    }
} 