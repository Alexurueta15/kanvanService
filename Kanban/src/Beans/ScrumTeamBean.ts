import {DeveloperBean} from "./DeveloperBean";

export class ScrumteamBean {

    private claveProyecto!: string;
    private clave!: string;
    private integrantes!: Array<DeveloperBean>;


    public getClaveProyecto(): string {
        return this.claveProyecto;
    }

    public setClaveProyecto(claveProyecto: string): void {
        this.claveProyecto = claveProyecto;
    }

    public getClave(): string {
        return this.clave;
    }

    public setClave(clave: string): void {
        this.clave = clave;
    }

    public getIntegrantes(): Array<DeveloperBean> {
        return this.integrantes;
    }

    public setIntegrantes(integrantes: Array<DeveloperBean>): void {
        this.integrantes = integrantes;
    }


}