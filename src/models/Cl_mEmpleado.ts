
import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mEmpleado extends Cl_mPersona {
    private _turno: string = "";
    

    constructor(
        {nombre,
        apellido, 
        edad, 
        sexo, 
        cedula,
        turno}:{
            nombre: string,
            apellido: string,
            edad: number,
            sexo: string,
            cedula: string,
            turno: string,
        }) {
        super( nombre, apellido, edad, sexo, cedula, "empleado");
        this.turno = turno;
    }

    get turno(): string {
        return this._turno;
    }

    set turno(value: string) {
        this._turno = value;
    }}