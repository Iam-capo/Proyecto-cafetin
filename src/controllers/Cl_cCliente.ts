import Cl_mPedido from "../models/Cl_mPedido.js";
import Cl_mCliente from "../models/Cl_mCliente.js";
import I_vCliente from "../interfaces/I_vCliente.js";
import Cl_mCafetin from "../models/Cl_mCafetin.js";

export default class Cl_cCliente {
    private modelo: Cl_mCafetin;
    private vista: I_vCliente;

    constructor(modelo: Cl_mCafetin, vista: I_vCliente) {
        this.modelo = modelo;
        this.vista = vista;

        this.vista.v_reportarPedido( () => this.procesarPedido() );
    }

    procesarPedido(){
        // 1. Obtenemos los valores desde la vista
        let codProducto = this.vista.v_getCodProducto();
        let cntCantidad = this.vista.v_getCntCantidad();
        let bancoOrigen = this.vista.v_getBancoOrigen();
        let datosPago = this.vista.v_getDatosPago();

        // 2. Buscamos el producto en el modelo
        let productoSeleccionado = this.modelo.buscarProducto(codProducto);

        if (productoSeleccionado) {
            // 3. Preparamos el objeto con la estructura PLANA que MockAPI espera
            // Nota: Estos nombres (Nombre, Apellido, etc.) deben coincidir 
            // exactamente con los campos que creaste en MockAPI.
            let pedidoPlano = {
                Nombre: this.vista.v_getNombreCliente(),
                Apellido: this.vista.v_getApellidoCliente(),
                Cedula: Number(this.vista.v_getCedulaCliente()),
                Edad: Number(this.vista.v_getEdadCliente()),
                Sexo: this.vista.v_getSexoCliente(),
                Producto: productoSeleccionado.nomProducto,
                Cantidad: Number(cntCantidad),
                Precio: productoSeleccionado.precioProducto,
                Banco: bancoOrigen,
                Ref: datosPago,
                estado: "Pendiente"
            };

            // 4. Enviamos al modelo (que se encarga del fetch POST)
            this.modelo.agregarPedido(pedidoPlano);

            console.log("Pedido enviado a la API:", pedidoPlano);
            alert("Pedido enviado correctamente");
        } else {
            alert("Producto no encontrado");
        }
    }
}