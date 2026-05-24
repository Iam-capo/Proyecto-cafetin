export default interface I_vCliente {
    v_getNombreCliente(): string;
    v_getApellidoCliente(): string;
    v_getCedulaCliente(): string;
    v_getEdadCliente(): number;
    v_getSexoCliente(): string;
    v_getCodProducto(): string;
    v_getCntCantidad(): number;
    v_getBancoOrigen(): string;
    v_getDatosPago(): string;

    v_reportarPedido(handler: Function): void;

}