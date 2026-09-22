import Item from "./item";
import { ESTADO_ITEM } from "./estado-item";
import { ESTADO_PEDIDO } from "./estado-pedido";

export default abstract class Pedido {

  protected diaSemana: string;
  protected item: Item[];
  protected estadoPedido: ESTADO_PEDIDO;

  constructor(diaSemana: string, item: Item[]) {
    this.diaSemana = diaSemana;
    this.item = item;
    this.estadoPedido = ESTADO_PEDIDO.EN_CONSTRUCCION
  }

  getdiaSemana(): string {
    return this.diaSemana;
  }

  setdiaSemana(diaSemana: string): void {
    this.diaSemana = diaSemana;
  }

  puedeFacturar(): boolean {
    // .every() devuelve true solo si TODOS los elementos cumplen la condición
    // .forEach() recorre todo, pero no se puede cortar en el medio.
    const todosListos = this.item.every((unItem) => unItem.estaListo());
    return todosListos;
  }
    

  sacarDelPedido(): void {
    if (this.estadoPedido == ESTADO_PEDIDO.EN_CONSTRUCCION) {
      this.item.pop();
    } else {
      throw new Error("El pedido no esta en Construccion");
    }
  }

  agregarItem(item: Item): void {
    if (this.estadoPedido == ESTADO_PEDIDO.EN_CONSTRUCCION) {
      this.item.push(item);
    } 
    else {
      throw new Error("El pedido no esta en Construccion");
    } 
  }
  
  confirmar(): void {
    if (this.item.length >= 1) {
      this.estadoPedido = ESTADO_PEDIDO.CONFIRMADO;
    }
    else {
      throw new Error("El pedido esta vacio");
    }
  }

}