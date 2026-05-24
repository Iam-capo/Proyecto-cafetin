export default class Cl_vEmpleado {
    tablaPedidos;
    btAprobar;
    btCancelar;
    pedidoSeleccionado = -1;
    constructor() {
        this.tablaPedidos = document.getElementById("tablaPedidos");
        this.btAprobar = document.getElementById("btAprobar");
        this.btCancelar = document.getElementById("btCancelar");
    }
    /**
     * Muestra los pedidos recibidos de la API (en formato plano)
     */
    v_mostrarPedidosPendientes(pedidos) {
        this.tablaPedidos.innerHTML = ""; // Limpiamos tabla
        pedidos.forEach((pedido, index) => {
            const tr = document.createElement("tr");
            tr.style.cursor = "pointer";
            // Accedemos a las propiedades planas definidas en el Cliente
            // Asegúrate de que estos nombres coincidan con los que guardaste en MockAPI
            tr.innerHTML = `
                <td>${pedido.Nombre || 'N/A'} ${pedido.Apellido || ''}</td>
                <td>${pedido.Producto || 'N/A'}</td>
                <td>${pedido.Precio ? pedido.Precio + '$' : '0$'}</td>
                <td>${pedido.Banco || 'N/A'}</td>
                <td>${pedido.Ref || 'N/A'}</td>
                <td>${pedido.Cantidad || 0}</td>
                <td style="color: ${pedido.estado === 'Aprobado' ? '#28a745' :
                pedido.estado === 'Cancelado' ? '#dc3545' : '#6c757d'}; 
                                  font-weight: bold;">
                    ${pedido.estado || 'Pendiente'}
                </td>
            `;
            // Lógica de selección de fila
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