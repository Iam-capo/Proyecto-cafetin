

export default class Cl_mProducto {
    private _codProducto: string = "";
    private _precioProducto: number = 0;
    private _nomProducto: string = "";
    
  constructor({
    codProducto,
    nomProducto,
     precioProducto,}:{
    codProducto: string,
    nomProducto: string,
    precioProducto: number,
}) {
    this._codProducto = codProducto;
    this._precioProducto = precioProducto;
    this._nomProducto = nomProducto;
}
    get codProducto(): string {
        return this._codProducto;
    }
    set codProducto(value: string) {
        this._codProducto = value;
    }
    get precioProducto(): number {
        return this._precioProducto;
    }
    set precioProducto(value: number) {
        this._precioProducto = value;
    }

    get nomProducto(): string {
        return this._nomProducto;
    }
    set nomProducto(value: string) {
        this._nomProducto = value;
    }   

}

