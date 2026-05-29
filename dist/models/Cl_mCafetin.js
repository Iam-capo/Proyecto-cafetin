// Paso 1: Importamos las clases de datos.
// Estos modelos definen la estructura de lo que es un 'Producto' y un 'Pedido'.
import Cl_mProducto from "./Cl_mProducto.js";
export default class Cl_mCafetin {
    // Definimos nuestras listas para almacenar los datos en memoria mientras la app corre.
    _productos;
    _pedidos;
    // La dirección (URL) de nuestra base de datos en la nube.
    URL_API = "https://6a12729c78d0434e0d5d37b9.mockapi.io/Pedido";
    // Paso 2: Un "aviso" (callback) para avisar a la vista cuando los datos cambien.
    onNuevoPedido = null;
    constructor() {
        this._productos = [];
        this._pedidos = [];
        // Al crear el cafetín, cargamos los productos de prueba y los pedidos de la API.
        this.cargarProductos();
        this.cargarPedidos();
    }
    // Paso 3: Función para traer los pedidos desde internet.
    // Usamos 'async' porque la respuesta tarda un poco en llegar.
    async cargarPedidos() {
        const respuesta = await fetch(this.URL_API);
        this._pedidos = await respuesta.json(); // Convertimos la respuesta cruda a formato JSON.
        // Si hay una función esperando este aviso, se la enviamos.
        if (this.onNuevoPedido)
            this.onNuevoPedido();
    }
    // Paso 4: Enviar un nuevo pedido a la base de datos.
    async agregarPedido(pedido) {
        const respuesta = await fetch(this.URL_API, {
            method: 'POST', // El método POST es para "enviar" o "crear" algo nuevo.
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pedido) // Convertimos nuestro objeto a texto tipo JSON.
        });
        // Si todo salió bien, actualizamos nuestra lista local con los datos más recientes.
        if (respuesta.ok) {
            await this.cargarPedidos();
        }
    }
    // Paso 5: Modificar el estado de un pedido (ej: de "Pendiente" a "Aprobado").
    async actualizarEstado(id, nuevoEstado) {
        await fetch(`${this.URL_API}/${id}`, {
            method: 'PUT', // El método PUT es para "actualizar" un dato que ya existe.
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ estado: nuevoEstado })
        });
        // Refrescamos la lista para mostrar el cambio al usuario.
        await this.cargarPedidos();
    }
    // Un "getter" para que otras partes del programa puedan leer los pedidos.
    get pedidos() {
        return this._pedidos;
    }
    // Paso 6: Lógica para manejar productos en memoria.
    agregarProducto(producto) {
        this._productos.push(producto);
    }
    // Buscamos un producto específico usando su código identificador.
    buscarProducto(codProducto) {
        return this._productos.find(p => p.codProducto === codProducto);
    }
    // Cargamos los productos iniciales que ofrece el cafetín.
    cargarProductos() {
        this._productos.push(new Cl_mProducto({ codProducto: "P01", nomProducto: "Cafe", precioProducto: 1.50 }));
        this._productos.push(new Cl_mProducto({ codProducto: "P02", nomProducto: "Empanada", precioProducto: 2.00 }));
        this._productos.push(new Cl_mProducto({ codProducto: "P03", nomProducto: "Hamburguesa", precioProducto: 1.75 }));
        this._productos.push(new Cl_mProducto({ codProducto: "P04", nomProducto: "Perro", precioProducto: 1.50 }));
        this._productos.push(new Cl_mProducto({ codProducto: "P05", nomProducto: "Pollo", precioProducto: 2.00 }));
    }
}
//# sourceMappingURL=Cl_mCafetin.js.map