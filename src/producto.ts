import Item from "./item";
import {ESTACION, ESTADO_ITEM} from "./enum";

export default class Producto implements Item {
    protected nombre: string;
    protected precio: number;
    protected estacion: ESTACION;
    protected estado: ESTADO_ITEM; 

    constructor(nombre: string, precio: number, estacion: ESTACION, estado: ESTADO_PEDIDO) {
        this.nombre = nombre;
        this.precio = precio;
        this.estacion = estacion;
        this.estado = estado;
    }

    getPrecioFinal(){

    }
    
    estaListo(){

    }

    sePuedeCancelar(){

    }

}