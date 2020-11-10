export class DeveloperBean {

    private id!: number;
    private clave!: string;
    private nombre!: string;
    private apellidoMaterno!: string;
    private apellidoPaterno!: string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

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

    public getApellidoMaterno(): string {
        return this.apellidoMaterno;
    }

    public setApellidoMaterno(apellidoMaterno: string): void {
        this.apellidoMaterno = apellidoMaterno;
    }

    public getApellidoPaterno(): string {
        return this.apellidoPaterno;
    }

    public setApellidoPaterno(apellidoPaterno: string): void {
        this.apellidoPaterno = apellidoPaterno;
    }
}