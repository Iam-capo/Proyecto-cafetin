export default class Cl_mPedido {
    _id;
    _cliente;
    _producto;
    _cntCantidad = 0;
    _bancoOrigen = "";
    _datosPago = "";
    _estado = "";
    constructor({ id, cliente, producto, cntCantidad, bancoOrigen, datosPago, estado, }) {
        this._id = "";
        this._cliente = cliente;
        this._producto = producto;
        this._bancoOrigen = bancoOrigen;
        this._datosPago = datosPago;
        this._cntCantidad = cntCantidad;
        this._estado = estado;
    }
    get id() {
        return this._id;
    }
    get cliente() {
        return this._cliente;
    }
    get producto() {
        return this._producto;
    }
    get estado() {
        return this._estado;
    }
    set estado(value) {
        this._estado = value;
    }
    get bancoOrigen() {
        return this._bancoOrigen;
    }
    set bancoOrigen(value) {
        this._bancoOrigen = value;
    }
    get datosPago() {
        return this._datosPago;
    }
    set datosPago(value) {
        this._datosPago = value;
    }
    get montoTotal() {
        return this._producto.precioProducto * this._cntCantidad;
    }
    cambioEstado(estado) {
        this._estado = estado;
    }
}
//# sourceMappingURL=Cl_mPedido.js.map