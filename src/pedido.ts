import Item from "./item";

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
    
  }

  estaElPedidoListo(): boolean {

  }

  sacarDelPedido(item: Item): void {
    
  }

}