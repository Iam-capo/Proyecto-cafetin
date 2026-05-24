export default class Cl_mPersona {
    private _nombre: string = "";
    private _apellido: string = "";
    private _edad: number = 0;
    private _sexo: string = "";
    private _cedula: string = "";
    private _rol: string = "";

    constructor(nombre: string, apellido: string, edad: number, sexo: string, cedula: string, rol: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
        this.cedula = cedula;
        this.rol = rol;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get apellido(): string {
        return this._apellido;
    }

    set apellido(value: string) {
        this._apellido = value;
    }

    get edad(): number {
        return this._edad;
    }

    set edad(value: number) {
        this._edad = value;
    }

    get sexo(): string {
        return this._sexo;
    }

    set sexo(value: string) {
        this._sexo = value;
    }

    get cedula(): string {
        return this._cedula;
    }

    set cedula(value: string) {
        this._cedula = value;
    }

    get rol(): string {
        return this._rol;
    }

    set rol(value: string) {
        this._rol = value;
    }
}