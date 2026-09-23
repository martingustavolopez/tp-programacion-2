import Pedido from "./pedido";
import Item from "./item";

export default class pedidoSalon extends Pedido {

    private mesaAsociada: number;

    constructor(diaSemana: string, item: Item[], mesaAsociada: number) {
        super(diaSemana, item)
        this.mesaAsociada = mesaAsociada;
    }
    
}