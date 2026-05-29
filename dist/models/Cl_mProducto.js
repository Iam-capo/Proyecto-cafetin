// Paso 1: Definición de la clase Producto.
// Esta clase es un "molde" que describe qué es un producto en nuestro sistema.
export default class Cl_mProducto {
    // Paso 2: Atributos privados.
    // Guardamos la información básica que identifica a cada producto.
    _codProducto = "";
    _precioProducto = 0;
    _nomProducto = "";
    // Paso 3: Constructor.
    // Usamos la desestructuración de objetos ({}) para que al crear un producto
    // el código sea más legible y fácil de entender.
    constructor({ codProducto, nomProducto, precioProducto, }) {
        this._codProducto = codProducto;
        this._precioProducto = precioProducto;
        this._nomProducto = nomProducto;
    }
    // Paso 4: Getters y Setters.
    // Permiten consultar o modificar los valores de forma controlada.
    get codProducto() { return this._codProducto; }
    set codProducto(value) { this._codProducto = value; }
    get precioProducto() { return this._precioProducto; }
    set precioProducto(value) { this._precioProducto = value; }
    get nomProducto() { return this._nomProducto; }
    set nomProducto(value) { this._nomProducto = value; }
}
//# sourceMappingURL=Cl_mProducto.js.map