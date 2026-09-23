import Pedido from "./pedido";
import Item from "./item";

export default class pedidoRetirar extends Pedido {

    private horarioRetiro: string;

    constructor(diaSemana: string, item: Item[], horarioRetiro: string) {
            super(diaSemana, item)
            this.horarioRetiro = horarioRetiro;
        }

}