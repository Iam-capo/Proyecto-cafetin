export default class Cl_cCliente {
    // Definimos las propiedades que conectan la lógica (modelo) con la interfaz (vista).
    modelo;
    vista;
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
        // Paso 2: Configuramos el evento del botón de la vista.
        // Cuando el usuario haga clic en "Reportar Pedido", ejecutamos nuestro método procesarPedido.
        this.vista.v_reportarPedido(() => this.procesarPedido());
    }
    procesarPedido() {
        // Paso 3: Capturamos los datos que el usuario escribió en los inputs de la pantalla.
        let codProducto = this.vista.v_getCodProducto();
        let cntCantidad = this.vista.v_getCntCantidad();
        let bancoOrigen = this.vista.v_getBancoOrigen();
        let datosPago = this.vista.v_getDatosPago();
        // Paso 4: Validamos si el producto existe buscando en nuestro modelo de cafetín.
        let productoSeleccionado = this.modelo.buscarProducto(codProducto);
        if (productoSeleccionado) {
            // Paso 5: Si el producto existe, creamos un objeto 'pedidoPlano' con toda la información.
            // Esto es como preparar la ficha que vamos a guardar en la base de datos.
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
                estado: "Pendiente" // Por defecto, todo pedido empieza como pendiente.
            };
            // Paso 6: Enviamos el objeto al modelo para que lo guarde en la lista de pedidos.
            this.modelo.agregarPedido(pedidoPlano);
            // Paso 7: Confirmamos al usuario y al desarrollador que todo salió bien.
            console.log("Pedido enviado a la API:", pedidoPlano);
            alert("Pedido enviado correctamente");
        }
        else {
            // Si el producto no aparece, avisamos al usuario para que corrija el código.
            alert("Producto no encontrado");
        }
    }
}
//# sourceMappingURL=Cl_cCliente.js.map