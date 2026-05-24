export default class Cl_mProducto {
    _codProducto = "";
    _precioProducto = 0;
    _nomProducto = "";
    constructor({ codProducto, nomProducto, precioProducto, }) {
        this._codProducto = codProducto;
        this._precioProducto = precioProducto;
        this._nomProducto = nomProducto;
    }
    get codProducto() {
        return this._codProducto;
    }
    set codProducto(value) {
        this._codProducto = value;
    }
    get precioProducto() {
        return this._precioProducto;
    }
    set precioProducto(value) {
        this._precioProducto = value;
    }
    get nomProducto() {
        return this._nomProducto;
    }
    set nomProducto(value) {
        this._nomProducto = value;
    }
}
//# sourceMappingURL=Cl_mProducto.js.map