// Paso 1: Importamos las interfaces y el modelo.
// Aquí conectamos al empleado con la lógica que sabe cómo consultar la base de datos (modelo).
import I_vEmpleado from "../interfaces/I_vEmpleado";
import Cl_mCafetin from "../models/Cl_mCafetin";

export default class Cl_cEmpleado {
    private modelo: Cl_mCafetin;
    private vista: I_vEmpleado;

    constructor(modelo: Cl_mCafetin, vista: I_vEmpleado) {
        this.modelo = modelo;
        this.vista = vista;

        // Paso 2: Arrancamos el sistema.
        // Cargamos los pedidos apenas abre la página y configuramos los botones.
        this.procesarPedidos();
        this.asignarEventosBotones();

        // Paso 3: Creamos un "autómata" de actualización.
        // Cada 5000ms (5 segundos), el programa consulta la nube para ver si hay pedidos nuevos.
        setInterval(() => {
            this.procesarPedidos();
        }, 5000);
    }

    // Paso 4: Método asíncrono para traer datos de internet.
    // Usamos 'async' porque la respuesta de la nube no es instantánea.
    public async procesarPedidos() {
        try {
            // Esperamos a que el modelo termine de descargar los datos de la nube.
            await this.modelo.cargarPedidos();
            // Una vez descargados, le decimos a la vista que los dibuje en la tabla.
            this.vista.v_mostrarPedidosPendientes(this.modelo.pedidos);
            console.log("Tabla actualizada con datos de la nube");
        } catch (error) {
            // Si algo falla al conectar, capturamos el error para que el programa no se detenga.
            console.error("Error al sincronizar pedidos:", error);
        }
    }

    // Paso 5: Conectamos los botones de la interfaz con nuestras funciones de lógica.
    private asignarEventosBotones() {
        document.getElementById('btAprobar')?.addEventListener('click', async () => {
            await this.gestionarAccion('Aprobado', '¡Pedido Aprobado en la nube!');
        });

        document.getElementById('btCancelar')?.addEventListener('click', async () => {
            await this.gestionarAccion('Cancelado', 'Pedido marcado como Cancelado.');
        });
    }

    // Paso 6: Función genérica para gestionar cambios de estado.
    // Esto evita repetir código para "Aprobar" y "Cancelar".
    private async gestionarAccion(nuevoEstado: string, mensaje: string) {
        const index = this.vista.v_getPedidoSeleccionado();
        
        // Verificamos que el empleado realmente haya seleccionado un pedido antes de actuar.
        if (index !== -1) {
            const pedido = this.modelo.pedidos[index];
            
            // Actualizamos el estado en la base de datos de la nube.
            await this.modelo.actualizarEstado((pedido as any).id, nuevoEstado);
            
            alert(mensaje);
            
            // Paso 7: Refrescamos la tabla inmediatamente para ver el cambio reflejado.
            await this.procesarPedidos();
        } else {
            alert('Por favor, selecciona una fila.');
        }
    }
}