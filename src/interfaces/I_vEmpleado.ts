export default interface I_vEmpleado {
    v_mostrarPedidosPendientes(pedidos: any[]): void;
    v_reportarAprobacion(handler: Function): void;
    v_getPedidoSeleccionado(): number;
    v_reportarCancelacion(handler: Function): void;
    
}