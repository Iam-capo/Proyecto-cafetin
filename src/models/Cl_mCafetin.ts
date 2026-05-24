import Cl_mProducto from "./Cl_mProducto.js";
import Cl_mPedido from "./Cl_mPedido.js";

export default class Cl_mCafetin {
    private _productos: Cl_mProducto[];
    private _pedidos: Cl_mPedido[];
    private URL_API: string = "https://6a12729c78d0434e0d5d37b9.mockapi.io/Pedido";

    public onNuevoPedido: (() => void) | null = null;

    constructor() {
        this._productos = [];
        this._pedidos = [];
        this.cargarProductos();
        this.cargarPedidos(); // Llamada única a la carga desde la nube
    }

    // 1. CARGAR PEDIDOS DESDE LA NUBE (GET)
    public async cargarPedidos(): Promise<void> {
        const respuesta = await fetch(this.URL_API);
        this._pedidos = await respuesta.json();
        if (this.onNuevoPedido) this.onNuevoPedido();
    }

    // 2. AGREGAR PEDIDO A LA NUBE (POST)
    public async agregarPedido(pedido: any): Promise<void> {
        const respuesta = await fetch(this.URL_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pedido)
        });
        
        if (respuesta.ok) {
            await this.cargarPedidos(); // Recargamos la lista actualizada
        }
    }

    // 3. ACTUALIZAR ESTADO (PUT) - Útil para cuando el empleado apruebe
    public async actualizarEstado(id: string, nuevoEstado: string): Promise<void> {
        await fetch(`${this.URL_API}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ estado: nuevoEstado })
        });
        await this.cargarPedidos();
    }

    public get pedidos(): Cl_mPedido[] {
        return this._pedidos;
    }

    // Los métodos de productos se quedan igual porque son estáticos
    public agregarProducto(producto: Cl_mProducto): void {
        this._productos.push(producto);
    }

    public buscarProducto(codProducto: string): Cl_mProducto | undefined {
        return this._productos.find(p => p.codProducto === codProducto);
    }

    private cargarProductos() {
        this._productos.push(new Cl_mProducto( { codProducto: "P01", nomProducto: "Cafe", precioProducto: 1.50 } ));
        this._productos.push(new Cl_mProducto( { codProducto: "P02", nomProducto: "Empanada", precioProducto: 2.00 } ));
        this._productos.push(new Cl_mProducto( { codProducto: "P03", nomProducto: "Hamburguesa", precioProducto: 1.75 } ));
        this._productos.push(new Cl_mProducto( { codProducto: "P04", nomProducto: "Perro", precioProducto: 1.50 } ));
        this._productos.push(new Cl_mProducto( { codProducto: "P05", nomProducto: "Pollo", precioProducto: 2.00 } ));
    }
}