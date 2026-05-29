// Paso 1: Importamos la clase padre.
import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mEmpleado extends Cl_mPersona {
    // Paso 2: Añadimos atributos propios del empleado.
    // Un empleado no solo es una persona, también tiene un 'turno' de trabajo.
    private _turno: string = "";
    
    constructor({
        nombre,
        apellido, 
        edad, 
        sexo, 
        cedula,
        turno,
    }: {
        nombre: string,
        apellido: string, 
        edad: number, 
        sexo: string, 
        cedula: string,
        turno: string,
    }) {
        // Paso 3: Llamada a super() con un valor fijo.
        // Como todos los que usan esta clase son empleados, enviamos "empleado" 
        // automáticamente al rol de la clase padre.
        super(nombre, apellido, edad, sexo, cedula, "empleado");
        this.turno = turno;
    }

    // Paso 4: Encapsulamiento con Getters y Setters.
    // Usamos esto para controlar cómo se accede o se cambia el turno del empleado.
    get turno(): string {
        return this._turno;
    }

    set turno(value: string) {
        // Podríamos agregar aquí una validación, por ejemplo:
        // if(value === "Mañana" || value === "Tarde") this._turno = value;
        this._turno = value;
    }
}