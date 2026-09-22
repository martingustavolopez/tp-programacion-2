import Item from "./item";
import Producto from "./producto"
import { ESTADO_ITEM } from "./estado-item";
import { ESTADO_PEDIDO } from "./estado-pedido";
 
 
export default class Combo implements Item {
    protected productos: Producto[];
    protected nombreCombo: string;
    protected precioCombo: number | undefined;
    protected porcentajeDescuento: number | undefined;
 
    constructor(productos: Producto[], nombreCombo: string, precioCombo: number, porcentajeDescuento:number ) {
        this.productos =  productos;
        this.nombreCombo = nombreCombo;
        this.precioCombo = precioCombo;
        this.porcentajeDescuento = porcentajeDescuento;
    }
 
    getPrecioFinal() {
        return this.productos.reduce((acumulador, productos) => acumulador + productos.getPrecioFinal(), 0);
    }
     
    estaListo() {
        return Item.getEstadoItem() === ESTADO_ITEM.LISTO;
    }
 
     sePuedeCancelar(){
         return ESTADO_ITEM.EN_PREPARACION === Item.getEstadoItem();
     }
    }
