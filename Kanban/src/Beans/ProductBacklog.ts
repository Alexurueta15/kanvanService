import { Prop, Ref } from "@typegoose/typegoose";
import { Developer } from "./Developer";
import { Proyecto } from "./Proyecto";

export class ProductBacklog {

    @Prop({ ref: () => Proyecto })
    private proyecto!: Ref<Proyecto>;
    @Prop()
    private clave!: string;
    @Prop({ ref: () => Developer })
    private scrumDeveloper!: Ref<Proyecto>;
    @Prop()
    private funcionalidad!: string;
    @Prop({default: "Pendiente"})
    private estatus!: string;
}