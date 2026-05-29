// Paso 1: Importamos la clase padre (Cl_mPersona).
// 'Cliente' es un tipo de persona, por eso usamos 'extends'.
import Cl_mPersona from "./Cl_mPersona.js";

// Paso 2: Definimos la clase Cliente.
// Gracias a 'extends Cl_mPersona', nuestro Cliente automáticamente tiene nombre, apellido, etc.
export default class Cl_mCliente extends Cl_mPersona {
    
    // Paso 3: El constructor.
    // Recibimos un objeto con todos los datos necesarios para crear a la persona.
    constructor({
        nombre,
        apellido, 
        edad, 
        sexo, 
        cedula,
        rol,
    }: {
        nombre: string;
        apellido: string;
        edad: number;
        sexo: string;
        cedula: string;
        rol: string;
    }) {
        // Paso 4: Llamamos a 'super()'.
        // Esto es obligatorio. 'super' envía los datos a la clase padre (Cl_mPersona) 
        // para que ella se encargue de inicializar los atributos básicos.
        super(nombre, apellido, edad, sexo, cedula, rol);
    }
}