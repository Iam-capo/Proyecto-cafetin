export default class Cl_vEmpleado {
    // Paso 2: Elementos de la interfaz.
    // Usamos HTMLTableElement y HTMLButtonElement para tener acceso directo a los objetos de la página.
    tablaPedidos;
    btAprobar;
    btCancelar;
    // Esta variable nos ayuda a recordar qué fila eligió el usuario.
    pedidoSeleccionado = -1;
    constructor() {
        this.tablaPedidos = document.getElementById("tablaPedidos");
        this.btAprobar = document.getElementById("btAprobar");
        this.btCancelar = document.getElementById("btCancelar");
    }
    // Paso 3: Renderizado dinámico de la tabla.
    // Esta función recibe un arreglo de pedidos y "dibuja" cada fila en el HTML.
    v_mostrarPedidosPendientes(pedidos) {
        this.tablaPedidos.innerHTML = ""; // Limpiamos la tabla antes de volver a dibujar.
        pedidos.forEach((pedido, index) => {
            const tr = document.createElement("tr");
            tr.style.cursor = "pointer"; // Cambiamos el cursor para indicar que se puede hacer clic.
            // Paso 4: Creación de contenido con plantillas (Template Literals).
            // Usamos lógica de colores para que el estado del pedido se vea profesional.
            tr.innerHTML = `
                <td>${pedido.Nombre || 'N/A'} ${pedido.Apellido || ''}</td>
                <td>${pedido.Producto || 'N/A'}</td>
                <td>${pedido.Precio ? pedido.Precio + '$' : '0$'}</td>
                <td>${pedido.Cantidad || 0}</td>
                <td>${pedido.Banco || 'N/A'}</td>
                <td>${pedido.DatosPago || 'N/A'}</td>
                <td>${pedido.MontoTotal = pedido.Precio * pedido.Cantidad}$</td>
                <td style="color: ${pedido.estado === 'Aprobado' ? '#28a745' :
                pedido.estado === 'Cancelado' ? '#dc3545' : '#6c757d'}; 
                                    font-weight: bold;">
                    ${pedido.estado || 'Pendiente'}
                </td>
            `;
            // Paso 5: Gestión de eventos de selección.
            // Cuando hacen clic en la fila, resaltamos el color y guardamos el índice del pedido.
            tr.onclick = () => {
                Array.from(this.tablaPedidos.children).forEach((fila) => {
                    fila.style.backgroundColor = "transparent";
                });
                tr.style.backgroundColor = "lightgray";
                this.pedidoSeleccionado = index;
            };
            this.tablaPedidos.appendChild(tr);
        });
    }
    // Paso 6: Conectores para el controlador.
    // Igual que en la vista de cliente, enviamos al controlador la responsabilidad de la lógica.
    v_reportarAprobacion(handler) {
        this.btAprobar.onclick = () => handler();
    }
    v_reportarCancelacion(handler) {
        this.btCancelar.onclick = () => handler();
    }
    v_getPedidoSeleccionado() {
        return this.pedidoSeleccionado;
    }
}
//# sourceMappingURL=Cl_vEmpleado.js.map