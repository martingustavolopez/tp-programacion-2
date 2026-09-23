import Pedido from "./pedido";
import Item from "./item";

export default class pedidoEnvio extends Pedido {

    private direccion: string;
    private costoEnvio: number;

    constructor(diaSemana: string, item: Item[], direccion: string, costoEnvio: number) {
            super(diaSemana, item)
            this.direccion = direccion;
            this.costoEnvio = costoEnvio;
        }
}