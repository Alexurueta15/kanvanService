import { modelOptions, mongoose, Prop } from "@typegoose/typegoose";
import { Developer } from "./Developer";
import { Proyecto } from "./Proyecto";

@modelOptions({ schemaOptions: { toJSON: { virtuals: true }, toObject: { virtuals: true }} })
export class ProductBacklog {

    @Prop({default: mongoose.Types.ObjectId})
    public _id!: mongoose.Types.ObjectId;

    @Prop({ uppercase: true })
    public clave!: string;

    @Prop()
    public funcionalidad!: string;

    @Prop({ref: () => Proyecto})
    public proyecto!: Proyecto;

    @Prop({ref: () => Developer})
    public developer!: Developer;

    @Prop({ default: "Pendiente" })
    public estatus!: string;
}