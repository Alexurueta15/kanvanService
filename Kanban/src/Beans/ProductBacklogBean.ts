export class ProductBacklogBean {

    private claveProyecto!: string;
    private clave!: string;
    private claveScrumDeveloper!: string;
    private funcionalidad!: string;
    private estatus!: string;

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

    public getClaveScrumDeveloper(): string {
        return this.claveScrumDeveloper;
    }

    public setClaveScrumDeveloper(claveScrumDeveloper: string): void {
        this.claveScrumDeveloper = claveScrumDeveloper;
    }

    public getFuncionalidad(): string {
        return this.funcionalidad;
    }

    public setFuncionalidad(funcionalidad: string): void {
        this.funcionalidad = funcionalidad;
    }

    public getEstatus(): string {
        return this.estatus;
    }

    public setEstatus(estatus: string): void {
        this.estatus = estatus;
    }



    
}