import I_vCliente from "../interfaces/I_vCliente";
import Cl_mCliente from "../models/Cl_mCliente";

export default class Cl_vCliente implements I_vCliente {
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
        this.inNombreCliente = document.getElementById("inNombreCliente") as HTMLInputElement;
        this.inApellidoCliente = document.getElementById("inApellidoCliente") as HTMLInputElement;
        this.inCedulaCliente = document.getElementById("inCedulaCliente") as HTMLInputElement;
        this.inEdadCliente = document.getElementById("inEdadCliente") as HTMLInputElement;
        this.inSexoCliente = document.getElementById("inSexoCliente") as HTMLSelectElement;
        this.inCodProducto = document.getElementById("inCodProducto") as HTMLSelectElement;
        this.inCntCantidad = document.getElementById("inCntCantidad") as HTMLInputElement;
        
        // Corregidos los IDs para que coincidan con "txtBancoOrigen" y "txtDatosPago" de tu HTML
        this.inBancoOrigen = document.getElementById("txtBancoOrigen") as HTMLInputElement;
        this.inDatosPago = document.getElementById("txtDatosPago") as HTMLInputElement;
        
        // Corregido a getElementById (con "I" mayúscula) para capturar el botón
        this.btEnviar = document.getElementById("btEnviar") as HTMLButtonElement;
    }

    v_getNombreCliente(): string {
        return this.inNombreCliente.value.trim();
    }

    v_getApellidoCliente(): string {
        return this.inApellidoCliente.value.trim();
    }

    v_getCedulaCliente(): string {
        return this.inCedulaCliente.value.trim();
    }

    v_getEdadCliente(): number {
        return parseInt(this.inEdadCliente.value.trim()) || 0;
    }

    v_getSexoCliente(): string {
        return this.inSexoCliente.value.trim();
    }

    v_getCodProducto(): string {
        return this.inCodProducto.value;
    }

    v_getCntCantidad(): number {
        return parseInt(this.inCntCantidad.value) || 0;
    }

    v_getBancoOrigen(): string {
        return this.inBancoOrigen.value;
    }

    v_getDatosPago(): string {
        return this.inDatosPago.value;
    }

    v_reportarPedido(handler: Function): void {
        // Ahora que btEnviar no es null, esto funcionará perfectamente
        this.btEnviar.onclick = () => handler();
    }
}