import Item from "./item";
import Producto from "./producto"
import { ESTADO_ITEM } from "./estado-item";
import { ESTADO_PEDIDO } from "./estado-pedido";
 
 
export default class Combo implements Item {
    private productos: Producto[];
    private nombreCombo: string;
    private precioCombo: number | undefined;
    private porcentajeDescuento: number | undefined;
    private estado: ESTADO_ITEM;
 
    constructor(productos: Producto[], nombreCombo: string, precioCombo: number, porcentajeDescuento:number ) {
        this.productos =  productos;
        this.nombreCombo = nombreCombo;
        this.precioCombo = precioCombo;
        this.porcentajeDescuento = porcentajeDescuento;
        this.estado = ESTADO_ITEM.PENDIENTE;
    }
 
    getPrecioFinal() {
        return this.productos.reduce((acumulador, productos) => acumulador + productos.getPrecioFinal(), 0);
        // Hasta aca tenemos el precio total de los productos, falta aplicarle el descuento.
    }
     
    estaListo() {
        return this.estado === ESTADO_ITEM.LISTO;
    }
 
    sePuedeCancelar(): boolean {
        return this.estado === ESTADO_ITEM.PENDIENTE;
    }
}
