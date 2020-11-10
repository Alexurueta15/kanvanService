export class ProyectoBean {

    private clave!: string;
    private nombre!: string;
    private fechaInicio!: Date;
    private fechaFinal!: Date;
    private estatus!: string;
    private fechaEstatus!: string;

    public getClave(): string {
        return this.clave;
    }

    public setClave(clave: string): void {
        this.clave = clave;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getFechaInicio(): Date {
        return this.fechaInicio;
    }

    public setFechaInicio(fechaInicio: Date): void {
        this.fechaInicio = fechaInicio;
    }

    public getFechaFinal(): Date {
        return this.fechaFinal;
    }

    public setFechaFinal(fechaFinal: Date): void {
        this.fechaFinal = fechaFinal;
    }

    public getEstatus(): string {
        return this.estatus;
    }

    public setEstatus(estatus: string): void {
        this.estatus = estatus;
    }

    public getFechaEstatus(): string {
        return this.fechaEstatus;
    }

    public setFechaEstatus(fechaEstatus: string): void {
        this.fechaEstatus = fechaEstatus;
    }



}