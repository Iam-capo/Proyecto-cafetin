export default class Cl_mPersona {
    _nombre = "";
    _apellido = "";
    _edad = 0;
    _sexo = "";
    _cedula = "";
    _rol = "";
    constructor(nombre, apellido, edad, sexo, cedula, rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
        this.cedula = cedula;
        this.rol = rol;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(value) {
        this._apellido = value;
    }
    get edad() {
        return this._edad;
    }
    set edad(value) {
        this._edad = value;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(value) {
        this._sexo = value;
    }
    get cedula() {
        return this._cedula;
    }
    set cedula(value) {
        this._cedula = value;
    }
    get rol() {
        return this._rol;
    }
    set rol(value) {
        this._rol = value;
    }
}
//# sourceMappingURL=Cl_mPersona.js.map