import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mCliente extends Cl_mPersona {
    
    

    constructor(
        {nombre,
        apellido, 
        edad, 
        sexo, 
        cedula,
        rol,}:{
            nombre: string,
            apellido: string,
            edad: number,
            sexo: string,
            cedula: string,
            rol: string,
        }) {
        super( nombre, apellido, edad, sexo, cedula, rol);
    }
    

}