import { modelOptions, mongoose, Prop } from "@typegoose/typegoose";
import { Developer } from "./Developer";
import { Proyecto } from "./Proyecto";

@modelOptions({ schemaOptions: { toJSON: { virtuals: true }, toObject: { virtuals: true }} })
export class Scrumteam {

    @Prop({default: mongoose.Types.ObjectId})
    public _id!: mongoose.Types.ObjectId;

    @Prop({ref: () => Proyecto})
    public proyecto?: Proyecto;

    @Prop({ uppercase: true })
    public clave!: string;

    @Prop({default: new Array, ref: () => Developer })
    public integrantes: Developer[] = new Array;

}