import { getModelForClass } from "@typegoose/typegoose";
import { Developer } from "../Beans/Developer";
import { ProductBacklog } from "../Beans/ProductBacklog";
import { Proyecto } from "../Beans/Proyecto";
import Utilities from "../utils/Utilities";
import ProyectoService from "./ProyectoService";

export default class ProductBacklogService {

    private static productBacklogModel = getModelForClass(ProductBacklog);

    public static async save(productBacklog: ProductBacklog): Promise<ProductBacklog> {
        productBacklog.clave = Utilities.getInitials(productBacklog.funcionalidad);
        if (productBacklog.developer != null || productBacklog.developer != undefined) {
            productBacklog.estatus = "Seleccionado";
        }
        const newProductBacklog: ProductBacklog = await this.productBacklogModel.create(productBacklog);
        await this.changeStatus(newProductBacklog);
        return newProductBacklog;
    }

    public static async update(productBacklog: ProductBacklog): Promise<ProductBacklog> {
        const claveAnterior: string = productBacklog.clave;
        productBacklog.clave = Utilities.getInitials(productBacklog.funcionalidad);
        if (productBacklog.developer != null || productBacklog.developer != undefined && productBacklog.estatus == "Pendiente") {
            productBacklog.estatus = "Seleccionado";
        }
        await this.productBacklogModel.updateOne({ clave: claveAnterior }, productBacklog).exec();
        await this.changeStatus(productBacklog);
        return productBacklog;
    }

    public static async getAllByProyecto(proyecto: Proyecto): Promise<ProductBacklog[]> {
        return await this.productBacklogModel.find({ proyecto: proyecto }).exec();
    }

    public static async getAll(): Promise<ProductBacklog[]> {
        return await this.productBacklogModel.find()
            .populate({ path: "proyecto", model: getModelForClass(Proyecto) })
            .populate({ path: "developer", model: getModelForClass(Developer) })
            .exec();
    }

    public static async getOne(clave: string): Promise<ProductBacklog | null> {
        return await this.productBacklogModel.findOne({ clave })
            .populate({ path: "proyecto", model: getModelForClass(Proyecto) })
            .populate({ path: "developer", model: getModelForClass(Developer) })
            .exec();
    }

    public static async deleteOne(clave: string): Promise<void> {
        const productBacklog: ProductBacklog | null = await this.getOne(clave);
        if (productBacklog) {
            await this.productBacklogModel.deleteOne({ clave }).exec();
            await this.changeStatus(productBacklog);
        }

    }

    private static async changeStatus(productBacklog: ProductBacklog) {
        var estatusProyecto: string;
        const productBacklogList: ProductBacklog[] = await this.getAllByProyecto(productBacklog.proyecto);
        if (productBacklogList.length > 0) {
            const terminados: ProductBacklog[] = productBacklogList.filter((e: ProductBacklog) => e.estatus == "Terminado");
            const enProceso: ProductBacklog[] = productBacklogList.filter((e: ProductBacklog) => e.estatus == "Proceso");
            const seleccionados: ProductBacklog[] = productBacklogList.filter((e: ProductBacklog) => e.estatus == "Seleccionado");
            if (terminados.length == productBacklogList.length) {
                estatusProyecto = "Terminado";
            } else if (enProceso.length > 0) {
                estatusProyecto = "Proceso";
            } else if (seleccionados.length > 0) {
                estatusProyecto = "Seleccionado";
            } else {
                estatusProyecto = "Pendiente";
            }
        } else {
            estatusProyecto = "Pendiente";
        }
        var proyecto: Proyecto | null = await ProyectoService.getOne(productBacklog.proyecto.clave);
        if (proyecto) {
            proyecto.estatus = estatusProyecto;
            await ProyectoService.update(proyecto);
        }
    }
} 