// Paso 1: Importamos interfaces y modelos necesarios.
// La vista solo se preocupa de la interfaz (I_vCliente) y de comunicarse con el usuario.
import I_vCliente from "../interfaces/I_vCliente";
import Cl_mCliente from "../models/Cl_mCliente";

export default class Cl_vCliente implements I_vCliente {
    // Paso 2: Definición de los elementos del DOM.
    // Aquí declaramos cada casilla (input) o botón que el usuario toca en la pantalla.
    private inNombreCliente: HTMLInputElement;
    private inApellidoCliente: HTMLInputElement;
    private inCedulaCliente: HTMLInputElement;
    private inEdadCliente: HTMLInputElement;
    private inSexoCliente: HTMLSelectElement;
    private inCodProducto: HTMLSelectElement;
    private inCntCantidad: HTMLInputElement;
    private inBancoOrigen: HTMLInputElement;
    private inDatosPago: HTMLInputElement;
    private btEnviar: HTMLButtonElement;

    constructor() {
        // Paso 3: Conexión con el HTML.
        // Buscamos en el archivo index.html cada elemento por su ID.
        // 'as HTMLInputElement' le asegura a TypeScript que sabemos qué tipo de objeto es.
        this.inNombreCliente = document.getElementById("inNombreCliente") as HTMLInputElement;
        this.inApellidoCliente = document.getElementById("inApellidoCliente") as HTMLInputElement;
        this.inCedulaCliente = document.getElementById("inCedulaCliente") as HTMLInputElement;
        this.inEdadCliente = document.getElementById("inEdadCliente") as HTMLInputElement;
        this.inSexoCliente = document.getElementById("inSexoCliente") as HTMLSelectElement;
        this.inCodProducto = document.getElementById("inCodProducto") as HTMLSelectElement;
        this.inCntCantidad = document.getElementById("inCntCantidad") as HTMLInputElement;
        this.inBancoOrigen = document.getElementById("txtBancoOrigen") as HTMLInputElement;
        this.inDatosPago = document.getElementById("txtDatosPago") as HTMLInputElement;
        this.btEnviar = document.getElementById("btEnviar") as HTMLButtonElement;
    }

    // Paso 4: Métodos de lectura (Getters de la vista).
    // Estos métodos ayudan al controlador a obtener la información escrita por el usuario.
    // Usamos '.trim()' para eliminar espacios accidentales al inicio o final.
    
    v_getNombreCliente(): string { return this.inNombreCliente.value.trim(); }
    v_getApellidoCliente(): string { return this.inApellidoCliente.value.trim(); }
    v_getCedulaCliente(): string { return this.inCedulaCliente.value.trim(); }
    
    // Convertimos el texto ingresado a un número real para evitar errores de cálculo.
    v_getEdadCliente(): number { return parseInt(this.inEdadCliente.value.trim()) || 0; }
    
    v_getSexoCliente(): string { return this.inSexoCliente.value.trim(); }
    v_getCodProducto(): string { return this.inCodProducto.value; }
    
    v_getCntCantidad(): number { return parseInt(this.inCntCantidad.value) || 0; }
    v_getBancoOrigen(): string { return this.inBancoOrigen.value; }
    v_getDatosPago(): string { return this.inDatosPago.value; }

    // Paso 5: Manejo de eventos.
    // Esta función permite al controlador "escuchar" cuándo el usuario presiona el botón.
    v_reportarPedido(handler: Function): void {
        this.btEnviar.onclick = () => handler();
    }
}