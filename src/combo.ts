 import Item from "./item";
 
 export default class Combo implements Item {

     protected nombreCombo: string;
     protected precioCombo?: number | undefined;
     protected porcentajeDescuento?: number | undefined;
 
     constructor(nombreCombo: string, precioCombo: number, porcentajeDescuento:number ) {
         this.nombreCombo = nombreCombo;
         this.precioCombo = precioCombo;
         this.porcentajeDescuento = porcentajeDescuento;
     }
 
     getPrecioFinal(){
 
     }
     
     estaListo(){
 
     }
 
     sePuedeCancelar(){
         
     }
 