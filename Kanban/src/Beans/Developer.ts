import { Prop } from "@typegoose/typegoose";

export class Developer {

    @Prop({ uppercase: true })
    public clave!: string;

    @Prop()
    public nombre!: string;

    @Prop()
    public apellidoMaterno!: string;

    @Prop()
    public apellidoPaterno!: string;
}


