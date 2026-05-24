export default class Cl_cEmpleado {
    modelo;
    vista;
    constructor(modelo, vista) {
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
    async procesarPedidos() {
        try {
            await this.modelo.cargarPedidos();
            this.vista.v_mostrarPedidosPendientes(this.modelo.pedidos);
            console.log("Tabla actualizada con datos de la nube");
        }
        catch (error) {
            console.error("Error al sincronizar pedidos:", error);
        }
    }
    asignarEventosBotones() {
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
    async gestionarAccion(nuevoEstado, mensaje) {
        const index = this.vista.v_getPedidoSeleccionado();
        if (index !== -1) {
            const pedido = this.modelo.pedidos[index];
            // Actualizamos en MockAPI
            await this.modelo.actualizarEstado(pedido.id, nuevoEstado);
            alert(mensaje);
            // Refrescamos la lista inmediatamente para que el cambio sea visual
            await this.procesarPedidos();
        }
        else {
            alert('Por favor, selecciona una fila.');
        }
    }
}
//# sourceMappingURL=Cl_cEmpleado.js.map