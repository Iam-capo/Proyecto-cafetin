// Paso 1: Importamos las clases que componen al Pedido.
// Nota: Un Pedido necesita saber quién lo compró (Cliente) y qué compró (Producto).
import Cl_mProducto from "./Cl_mProducto.js";
import Cl_mCliente from "./Cl_mCliente.js"; 

export default class Cl_mPedido {
    // Definimos los atributos. Observa cómo usamos instancias de otras clases.
    private _id: string = ""; // Identificador único del pedido en la base de datos.
    private _cliente: Cl_mCliente;
    private _producto: Cl_mProducto;
    private _cntCantidad: number = 0;
    private _bancoOrigen: string = "";
    private _datosPago: string = "";
    private _estado: string = "";
 
    constructor({
        id,
        cliente,
        producto,
        cntCantidad,
        bancoOrigen,
        datosPago,
        estado,
    }: {
        id: string,
        cliente: Cl_mCliente,
        producto: Cl_mProducto,
        cntCantidad: number,
        bancoOrigen: string,
        datosPago: string,
        estado: string,
    }) {
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
    get id(): string { return this._id; }

    get cntCantidad(): number { return this._cntCantidad; }
    set cntCantidad(value: number) { this._cntCantidad = value; }

    get cliente(): Cl_mCliente { return this._cliente; }
    get producto(): Cl_mProducto { return this._producto; }

    get estado(): string { return this._estado; }
    set estado(value: string) { this._estado = value; }

    get bancoOrigen(): string { return this._bancoOrigen; }
    set bancoOrigen(value: string) { this._bancoOrigen = value; }

    get datosPago(): string { return this._datosPago; }
    set datosPago(value: string) { this._datosPago = value; }

    // Paso 4: Lógica de negocio encapsulada.
    // No necesitamos calcular esto afuera, el Pedido sabe cómo calcular su propio monto.
    public get montoTotal(): number {
        return this._producto.precioProducto * this.cntCantidad;
    }

    // Un método simple para actualizar el estado, funciona como un atajo al setter.
    public cambioEstado(estado: string) {
        this._estado = estado;
    }
}
