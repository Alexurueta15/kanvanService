import { mongoose, Prop } from "@typegoose/typegoose";

export class Developer {

    @Prop({default: mongoose.Types.ObjectId})
    public _id!: mongoose.Types.ObjectId;

    @Prop({ uppercase: true })
    public clave!: string;

    @Prop()
    public nombre!: string;

    @Prop()
    public apellidoMaterno!: string;

    @Prop()
    public apellidoPaterno!: string;

    @Prop()
    public rol!: string;
}


