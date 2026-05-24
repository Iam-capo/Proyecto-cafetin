import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mEmpleado extends Cl_mPersona {
    _turno = "";
    constructor({ nombre, apellido, edad, sexo, cedula, turno }) {
        super(nombre, apellido, edad, sexo, cedula, "empleado");
        this.turno = turno;
    }
    get turno() {
        return this._turno;
    }
    set turno(value) {
        this._turno = value;
    }
}
//# sourceMappingURL=Cl_mEmpleado.js.map