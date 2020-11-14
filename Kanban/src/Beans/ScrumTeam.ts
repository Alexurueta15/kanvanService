import { Prop, Ref } from "@typegoose/typegoose";
import {Developer} from "./Developer";
import { Proyecto } from "./Proyecto";

export class Scrumteam {

    @Prop({ref:()=>Proyecto})
    private proyecto!: Ref<Proyecto>;

    @Prop()
    private clave!: string;
    
    @Prop()
    private integrantes!: Array<Developer>;

}