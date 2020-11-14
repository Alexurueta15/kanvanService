import { Prop } from "@typegoose/typegoose";

export class Proyecto {

    @Prop()
    private clave!: string;

    @Prop()
    private nombre!: string;

    @Prop()
    private fechaInicio!: Date;

    @Prop()
    private fechaFinal!: Date;

    @Prop({default: "Pendiente"})
    private estatus!: string;

    @Prop({default: Date.now()})
    private fechaEstatus!: string;


}