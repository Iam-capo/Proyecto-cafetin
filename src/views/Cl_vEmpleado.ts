import I_vEmpleado from "../interfaces/I_vEmpleado";

export default class Cl_vEmpleado implements I_vEmpleado {
    private tablaPedidos: HTMLTableElement;
    private btAprobar: HTMLButtonElement;
    private btCancelar: HTMLButtonElement;
    private pedidoSeleccionado: number = -1;

    constructor() {
        this.tablaPedidos = document.getElementById("tablaPedidos") as HTMLTableElement;
        this.btAprobar = document.getElementById("btAprobar") as HTMLButtonElement;
        this.btCancelar = document.getElementById("btCancelar") as HTMLButtonElement;
    }

    /**
     * Muestra los pedidos recibidos de la API (en formato plano)
     */
    v_mostrarPedidosPendientes(pedidos: any[]): void {
        this.tablaPedidos.innerHTML = ""; // Limpiamos tabla
        
        pedidos.forEach((pedido: any, index: number) => {
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
                Array.from(this.tablaPedidos.children).forEach((fila: any) => {
                    fila.style.backgroundColor = "transparent";
                });
                tr.style.backgroundColor = "lightgray";
                this.pedidoSeleccionado = index;
            };

            this.tablaPedidos.appendChild(tr);
        });
    }

    v_reportarAprobacion(handler: Function): void {
        this.btAprobar.onclick = () => handler();
    }

    v_reportarCancelacion(handler: Function): void {
        this.btCancelar.onclick = () => handler();
    }

    v_getPedidoSeleccionado(): number {
        return this.pedidoSeleccionado;
    }
}