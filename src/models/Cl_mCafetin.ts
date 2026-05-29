// Paso 1: Importamos las clases de datos.
// Estos modelos definen la estructura de lo que es un 'Producto' y un 'Pedido'.
import Cl_mProducto from "./Cl_mProducto.js";
import Cl_mPedido from "./Cl_mPedido.js";

export default class Cl_mCafetin {
    // Definimos nuestras listas para almacenar los datos en memoria mientras la app corre.
    private _productos: Cl_mProducto[];
    private _pedidos: Cl_mPedido[];
    // La dirección (URL) de nuestra base de datos en la nube.
    private URL_API: string = "https://6a12729c78d0434e0d5d37b9.mockapi.io/Pedido";

    // Paso 2: Un "aviso" (callback) para avisar a la vista cuando los datos cambien.
    public onNuevoPedido: (() => void) | null = null;

    constructor() {
        this._productos = [];
        this._pedidos = [];
        // Al crear el cafetín, cargamos los productos de prueba y los pedidos de la API.
        this.cargarProductos();
        this.cargarPedidos();
    }

    // Paso 3: Función para traer los pedidos desde internet.
    // Usamos 'async' porque la respuesta tarda un poco en llegar.
    public async cargarPedidos(): Promise<void> {
        const respuesta = await fetch(this.URL_API);
        this._pedidos = await respuesta.json(); // Convertimos la respuesta cruda a formato JSON.
        
        // Si hay una función esperando este aviso, se la enviamos.
        if (this.onNuevoPedido) this.onNuevoPedido();
    }

    // Paso 4: Enviar un nuevo pedido a la base de datos.
    public async agregarPedido(pedido: any): Promise<void> {
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
    public async actualizarEstado(id: string, nuevoEstado: string): Promise<void> {
        await fetch(`${this.URL_API}/${id}`, {
            method: 'PUT', // El método PUT es para "actualizar" un dato que ya existe.
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ estado: nuevoEstado })
        });
        // Refrescamos la lista para mostrar el cambio al usuario.
        await this.cargarPedidos();
    }

    // Un "getter" para que otras partes del programa puedan leer los pedidos.
    public get pedidos(): Cl_mPedido[] {
        return this._pedidos;
    }

    // Paso 6: Lógica para manejar productos en memoria.
    public agregarProducto(producto: Cl_mProducto): void {
        this._productos.push(producto);
    }

    // Buscamos un producto específico usando su código identificador.
    public buscarProducto(codProducto: string): Cl_mProducto | undefined {
        return this._productos.find(p => p.codProducto === codProducto);
    }

    // Cargamos los productos iniciales que ofrece el cafetín.
    private cargarProductos() {
        this._productos.push(new Cl_mProducto( { codProducto: "P01", nomProducto: "Cafe", precioProducto: 1.50 } ));
        this._productos.push(new Cl_mProducto( { codProducto: "P02", nomProducto: "Empanada", precioProducto: 2.00 } ));
        this._productos.push(new Cl_mProducto( { codProducto: "P03", nomProducto: "Hamburguesa", precioProducto: 1.75 } ));
        this._productos.push(new Cl_mProducto( { codProducto: "P04", nomProducto: "Perro", precioProducto: 1.50 } ));
        this._productos.push(new Cl_mProducto( { codProducto: "P05", nomProducto: "Pollo", precioProducto: 2.00 } ));
    }
}