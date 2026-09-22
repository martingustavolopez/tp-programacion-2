import Item from "./item";
import { ESTADO_ITEM } from "./estado-item";
import { ESTADO_PEDIDO } from "./estado-pedido";
import { ESTACION } from "./estacion";

export default class Producto implements Item {
    private nombre: string;
    private precio: number;
    private estacion: ESTACION;
    private estado: ESTADO_ITEM; 

    constructor(nombre: string, precio: number, estacion: ESTACION, estado: ESTADO_ITEM) {
        this.nombre = nombre;
        this.precio = precio;
        this.estacion = estacion;
        this.estado = estado;
    }

    getPrecioFinal() {
        return this.precio;
    }
    
    estaListo() {
        return this.estado === ESTADO_ITEM.LISTO;
    }

    sePuedeCancelar() {
        return ESTADO_ITEM.EN_PREPARACION === Item.getEstadoItem();
    }

}