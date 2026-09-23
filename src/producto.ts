import Item from "./item";
import { ESTADO_ITEM } from "./estado-item";
import { ESTADO_PEDIDO } from "./estado-pedido";
import { ESTACION } from "./estacion";

export default class Producto implements Item {
    private nombre: string;
    private precio: number;
    private estacion: ESTACION;
    private estado: ESTADO_ITEM; 

    constructor(nombre: string, precio: number, estacion: ESTACION) {
        this.nombre = nombre;
        this.precio = precio;
        this.estacion = estacion;
        this.estado = ESTADO_ITEM.PENDIENTE;
    }

    getPrecioFinal() {
        return this.precio;
    }
    
    estaListo() {
        return this.estado === ESTADO_ITEM.LISTO;
    }

    sePuedeCancelar(): boolean {
        return this.estado === ESTADO_ITEM.PENDIENTE;
    }

}