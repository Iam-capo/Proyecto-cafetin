// Paso 1: Definición de la clase Producto.
// Esta clase es un "molde" que describe qué es un producto en nuestro sistema.
export default class Cl_mProducto {
    // Paso 2: Atributos privados.
    // Guardamos la información básica que identifica a cada producto.
    private _codProducto: string = "";
    private _precioProducto: number = 0;
    private _nomProducto: string = "";
    
    // Paso 3: Constructor.
    // Usamos la desestructuración de objetos ({}) para que al crear un producto
    // el código sea más legible y fácil de entender.
    constructor({
        codProducto,
        nomProducto,
        precioProducto,
    }: {
        codProducto: string,
        nomProducto: string,
        precioProducto: number,
    }) {
        this._codProducto = codProducto;
        this._precioProducto = precioProducto;
        this._nomProducto = nomProducto;
    }

    // Paso 4: Getters y Setters.
    // Permiten consultar o modificar los valores de forma controlada.
    
    get codProducto(): string { return this._codProducto; }
    set codProducto(value: string) { this._codProducto = value; }

    get precioProducto(): number { return this._precioProducto; }
    set precioProducto(value: number) { this._precioProducto = value; }

    get nomProducto(): string { return this._nomProducto; }
    set nomProducto(value: string) { this._nomProducto = value; }   

}

