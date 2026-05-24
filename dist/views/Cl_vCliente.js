export default class Cl_vCliente {
    inNombreCliente;
    inApellidoCliente;
    inCedulaCliente;
    inEdadCliente;
    inSexoCliente;
    inCodProducto;
    inCntCantidad;
    inBancoOrigen;
    inDatosPago;
    btEnviar;
    constructor() {
        this.inNombreCliente = document.getElementById("inNombreCliente");
        this.inApellidoCliente = document.getElementById("inApellidoCliente");
        this.inCedulaCliente = document.getElementById("inCedulaCliente");
        this.inEdadCliente = document.getElementById("inEdadCliente");
        this.inSexoCliente = document.getElementById("inSexoCliente");
        this.inCodProducto = document.getElementById("inCodProducto");
        this.inCntCantidad = document.getElementById("inCntCantidad");
        // Corregidos los IDs para que coincidan con "txtBancoOrigen" y "txtDatosPago" de tu HTML
        this.inBancoOrigen = document.getElementById("txtBancoOrigen");
        this.inDatosPago = document.getElementById("txtDatosPago");
        // Corregido a getElementById (con "I" mayúscula) para capturar el botón
        this.btEnviar = document.getElementById("btEnviar");
    }
    v_getNombreCliente() {
        return this.inNombreCliente.value.trim();
    }
    v_getApellidoCliente() {
        return this.inApellidoCliente.value.trim();
    }
    v_getCedulaCliente() {
        return this.inCedulaCliente.value.trim();
    }
    v_getEdadCliente() {
        return parseInt(this.inEdadCliente.value.trim()) || 0;
    }
    v_getSexoCliente() {
        return this.inSexoCliente.value.trim();
    }
    v_getCodProducto() {
        return this.inCodProducto.value;
    }
    v_getCntCantidad() {
        return parseInt(this.inCntCantidad.value) || 0;
    }
    v_getBancoOrigen() {
        return this.inBancoOrigen.value;
    }
    v_getDatosPago() {
        return this.inDatosPago.value;
    }
    v_reportarPedido(handler) {
        // Ahora que btEnviar no es null, esto funcionará perfectamente
        this.btEnviar.onclick = () => handler();
    }
}
//# sourceMappingURL=Cl_vCliente.js.map