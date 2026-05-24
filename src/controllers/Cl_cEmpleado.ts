import I_vEmpleado from "../interfaces/I_vEmpleado";
import Cl_mCafetin from "../models/Cl_mCafetin";

export default class Cl_cEmpleado {
    private modelo: Cl_mCafetin;
    private vista: I_vEmpleado;

    constructor(modelo: Cl_mCafetin, vista: I_vEmpleado) {
        this.modelo = modelo;
        this.vista = vista;

        // 1. Inicializamos la pantalla al cargar
        this.procesarPedidos();

        // 2. Asignamos los eventos de los botones
        this.asignarEventosBotones();

        // 3. (Opcional) Auto-refresco cada 5 segundos para ver pedidos del cliente
        setInterval(() => {
            this.procesarPedidos();
        }, 5000);
    }

    /**
     * Trae los datos de la nube y los muestra en la tabla
     */
    public async procesarPedidos() {
        try {
            await this.modelo.cargarPedidos();
            this.vista.v_mostrarPedidosPendientes(this.modelo.pedidos);
            console.log("Tabla actualizada con datos de la nube");
        } catch (error) {
            console.error("Error al sincronizar pedidos:", error);
        }
    }

    private asignarEventosBotones() {
        // Evento Aprobar
        document.getElementById('btAprobar')?.addEventListener('click', async () => {
            await this.gestionarAccion('Aprobado', '¡Pedido Aprobado en la nube!');
        });

        // Evento Cancelar
        document.getElementById('btCancelar')?.addEventListener('click', async () => {
            await this.gestionarAccion('Cancelado', 'Pedido marcado como Cancelado.');
        });
    }

    /**
     * Método auxiliar para evitar repetir código en los botones
     */
    private async gestionarAccion(nuevoEstado: string, mensaje: string) {
        const index = this.vista.v_getPedidoSeleccionado();
        if (index !== -1) {
            const pedido = this.modelo.pedidos[index];
            
            // Actualizamos en MockAPI
            await this.modelo.actualizarEstado((pedido as any).id, nuevoEstado);
            
            alert(mensaje);
            
            // Refrescamos la lista inmediatamente para que el cambio sea visual
            await this.procesarPedidos();
        } else {
            alert('Por favor, selecciona una fila.');
        }
    }
}
