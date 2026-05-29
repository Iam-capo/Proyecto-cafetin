export default class Cl_mPedido {
    // Definimos los atributos. Observa cómo usamos instancias de otras clases.
    _id = ""; // Identificador único del pedido en la base de datos.
    _cliente;
    _producto;
    _cntCantidad = 0;
    _bancoOrigen = "";
    _datosPago = "";
    _estado = "";
    constructor({ id, cliente, producto, cntCantidad, bancoOrigen, datosPago, estado, }) {
        // Paso 2: Asignamos los valores recibidos.
        this._id = id;
        this._cliente = cliente;
        this._producto = producto;
        this._bancoOrigen = bancoOrigen;
        this._datosPago = datosPago;
        this._cntCantidad = cntCantidad;
        this._estado = estado;
    }
    // Paso 3: Getters y Setters.
    // Usamos esto para que otras partes del sistema puedan consultar o cambiar datos
    // de forma controlada y segura.
    get id() { return this._id; }
    get cntCantidad() { return this._cntCantidad; }
    set cntCantidad(value) { this._cntCantidad = value; }
    get cliente() { return this._cliente; }
    get producto() { return this._producto; }
    get estado() { return this._estado; }
    set estado(value) { this._estado = value; }
    get bancoOrigen() { return this._bancoOrigen; }
    set bancoOrigen(value) { this._bancoOrigen = value; }
    get datosPago() { return this._datosPago; }
    set datosPago(value) { this._datosPago = value; }
    // Paso 4: Lógica de negocio encapsulada.
    // No necesitamos calcular esto afuera, el Pedido sabe cómo calcular su propio monto.
    get montoTotal() {
        return this._producto.precioProducto * this.cntCantidad;
    }
    // Un método simple para actualizar el estado, funciona como un atajo al setter.
    cambioEstado(estado) {
        this._estado = estado;
    }
}
//# sourceMappingURL=Cl_mPedido.js.map