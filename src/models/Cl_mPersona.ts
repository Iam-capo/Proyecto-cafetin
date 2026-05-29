// Paso 1: Definimos la clase base (Padre).
// Esta clase representa a cualquier persona en el sistema, sea cliente o empleado.
export default class Cl_mPersona {
    // Paso 2: Encapsulamiento de atributos.
    // Usamos el guion bajo '_' para indicar que son privados y no deben tocarse directamente.
    private _nombre: string = "";
    private _apellido: string = "";
    private _edad: number = 0;
    private _sexo: string = "";
    private _cedula: string = "";
    private _rol: string = "";

    // Constructor: El "molde" inicial para crear cualquier persona.
    constructor(nombre: string, apellido: string, edad: number, sexo: string, cedula: string, rol: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
        this.cedula = cedula;
        this.rol = rol;
    }

    // Paso 3: Getters y Setters.
    // Esto es el corazón del encapsulamiento. Obligamos a que cualquier cambio
    // pase por estos métodos, protegiendo así los datos internos.
    
    get nombre(): string { return this._nombre; }
    set nombre(value: string) { this._nombre = value; }

    get apellido(): string { return this._apellido; }
    set apellido(value: string) { this._apellido = value; }

    get edad(): number { return this._edad; }
    set edad(value: number) { this._edad = value; }

    get sexo(): string { return this._sexo; }
    set sexo(value: string) { this._sexo = value; }

    get cedula(): string { return this._cedula; }
    set cedula(value: string) { this._cedula = value; }

    get rol(): string { return this._rol; }
    set rol(value: string) { this._rol = value; }
}