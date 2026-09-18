import Item from "./item";
import { ESTADO_ITEM } from "./estado-item";

export default abstract class Pedido {

  protected diaSemana: string;
  protected item: Item[];

  constructor(diaSemana: string, item: Item[]) {
    this.diaSemana = diaSemana;
    this.item = item;
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

  estaElPedidoListo(): boolean {
    

  }

  sacarDelPedido(item: Item): void {

    
  }

}