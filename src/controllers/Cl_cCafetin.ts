// Paso 1: Importamos las clases necesarias para conectar el modelo, las vistas y los controladores.
// Esto es como armar el rompecabezas del sistema de cafetín.
import Cl_mCafetin from "../models/Cl_mCafetin.js";
import Cl_cCliente from "./Cl_cCliente.js";
import Cl_cEmpleado from "./Cl_cEmpleado.js";
import Cl_vCliente from "../views/Cl_vCliente.js";
import Cl_vEmpleado from "../views/Cl_vEmpleado.js";

export default class Cl_cCafetin {
    // Aquí guardamos el modelo central, que es el que tiene la lógica del negocio.
    private modelo: Cl_mCafetin;

    constructor() {
        // Paso 2: Inicializamos el modelo al arrancar el programa.
        this.modelo = new Cl_mCafetin();
        // Llamamos a iniciar para ver en qué página estamos.
        this.iniciar();
    }

    private iniciar() {
        // Paso 3: Obtenemos la ruta del navegador para saber si el usuario es cliente o empleado.
        const ruta = window.location.pathname;

        // Paso 4: Según la ruta, decidimos qué pantalla mostrar y qué controlador activar.
        if (ruta.includes("cliente")) {
            // Si la URL dice "cliente", creamos la vista del cliente y lanzamos su controlador.
            const vista = new Cl_vCliente();
            new Cl_cCliente(this.modelo, vista);
        } 
        else if (ruta.includes("empleado")) {
            // Si dice "empleado", hacemos lo mismo pero con los archivos del empleado.
            const vista = new Cl_vEmpleado();
            new Cl_cEmpleado(this.modelo, vista);
        }
        // Nota: Si no encuentra ninguna, no hace nada (podríamos agregar un log aquí después).
    }
}
