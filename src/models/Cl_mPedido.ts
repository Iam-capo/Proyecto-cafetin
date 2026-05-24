import Cl_mProducto from "./Cl_mProducto.js";
import Cl_mCliente from "./Cl_mCliente.js"; 

export default class Cl_mPedido {
    _id: "";
    _cliente: Cl_mCliente;
    _producto: Cl_mProducto;
    _cntCantidad: number = 0;
    _bancoOrigen: string = "";
    _datosPago: string = "";
    _estado: string = "";

    constructor(
        {id,
        cliente,
        producto,
        cntCantidad,
        bancoOrigen,
        datosPago,
        estado,
        }:{
            id: string,
            cliente: Cl_mCliente,
            producto: Cl_mProducto,
            cntCantidad: number,
            bancoOrigen: string,
            datosPago: string,
            estado: string,
        }
        ) {
        this._id = "";
        this._cliente = cliente;
        this._producto = producto;
        this._bancoOrigen = bancoOrigen;
        this._datosPago = datosPago;
        this._cntCantidad = cntCantidad;
        this._estado = estado;
    }

    get id(): string {
        return this._id;
    }

    

    get cliente(): Cl_mCliente {
        return this._cliente;
    }

    get producto(): Cl_mProducto {
        return this._producto;
    }

    get estado(): string {
        return this._estado;
    }

    set estado(value: string) {
        this._estado = value;
    }
    get bancoOrigen(): string {
        return this._bancoOrigen;
    }

    set bancoOrigen(value: string) {
        this._bancoOrigen = value;
    }

    get datosPago(): string {
        return this._datosPago;
    }

    set datosPago(value: string) {
        this._datosPago = value;
    }

    public get montoTotal(): number {
        return this._producto.precioProducto * this._cntCantidad;
    }

    public cambioEstado(estado: string) {
        this._estado = estado;
    }
}
