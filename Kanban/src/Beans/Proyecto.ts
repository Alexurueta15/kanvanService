import { mongoose, Prop } from "@typegoose/typegoose";

export class Proyecto {

    @Prop({default: mongoose.Types.ObjectId()})
    public _id!: mongoose.Types.ObjectId;

    @Prop({ uppercase: true })
    public clave!: string;

    @Prop()
    public nombre!: string;

    @Prop()
    public fechaInicio!: string;

    @Prop()
    public fechaFinal!: string;

    @Prop({ default: "Pendiente" })
    public estatus!: string;

    @Prop({ default: Date.now().toString() })
    public fechaEstatus!: string;


}