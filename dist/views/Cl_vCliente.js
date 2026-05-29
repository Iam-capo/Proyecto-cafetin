export default class Cl_vCliente {
    // Paso 2: Definición de los elementos del DOM.
    // Aquí declaramos cada casilla (input) o botón que el usuario toca en la pantalla.
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
        // Paso 3: Conexión con el HTML.
        // Buscamos en el archivo index.html cada elemento por su ID.
        // 'as HTMLInputElement' le asegura a TypeScript que sabemos qué tipo de objeto es.
        this.inNombreCliente = document.getElementById("inNombreCliente");
        this.inApellidoCliente = document.getElementById("inApellidoCliente");
        this.inCedulaCliente = document.getElementById("inCedulaCliente");
        this.inEdadCliente = document.getElementById("inEdadCliente");
        this.inSexoCliente = document.getElementById("inSexoCliente");
        this.inCodProducto = document.getElementById("inCodProducto");
        this.inCntCantidad = document.getElementById("inCntCantidad");
        this.inBancoOrigen = document.getElementById("txtBancoOrigen");
        this.inDatosPago = document.getElementById("txtDatosPago");
        this.btEnviar = document.getElementById("btEnviar");
    }
    // Paso 4: Métodos de lectura (Getters de la vista).
    // Estos métodos ayudan al controlador a obtener la información escrita por el usuario.
    // Usamos '.trim()' para eliminar espacios accidentales al inicio o final.
    v_getNombreCliente() { return this.inNombreCliente.value.trim(); }
    v_getApellidoCliente() { return this.inApellidoCliente.value.trim(); }
    v_getCedulaCliente() { return this.inCedulaCliente.value.trim(); }
    // Convertimos el texto ingresado a un número real para evitar errores de cálculo.
    v_getEdadCliente() { return parseInt(this.inEdadCliente.value.trim()) || 0; }
    v_getSexoCliente() { return this.inSexoCliente.value.trim(); }
    v_getCodProducto() { return this.inCodProducto.value; }
    v_getCntCantidad() { return parseInt(this.inCntCantidad.value) || 0; }
    v_getBancoOrigen() { return this.inBancoOrigen.value; }
    v_getDatosPago() { return this.inDatosPago.value; }
    // Paso 5: Manejo de eventos.
    // Esta función permite al controlador "escuchar" cuándo el usuario presiona el botón.
    v_reportarPedido(handler) {
        this.btEnviar.onclick = () => handler();
    }
}
//# sourceMappingURL=Cl_vCliente.js.map