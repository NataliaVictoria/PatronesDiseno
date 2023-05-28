import { Recibo } from "./Recibo";

/**
 * Clase Recibo_Insumo
 * Esta clase extiende la clase Recibo y representa un recibo de insumo.
 */
export class Recibo_Insumo extends Recibo {

    /**
     * Constructor de la clase Recibo_Insumo.
     * @param tipoRecibo - El tipo de recibo (string).
     * @param fecha - La fecha del recibo (string).
     * @param numeroRecibo - El número de recibo (number).
     * @param total - El total del recibo (number).
     * @param metodoPago - El método de pago utilizado (string).
     * @param nombre - El nombre asociado al recibo (string).
     */
    constructor(private tipoRecibo: string, private fecha: string, private numeroRecibo: number, private total: number, private metodoPago: string, private nombre: string) {
        super();
        this.fecha = fecha;
        this.tipoRecibo = tipoRecibo;
        this.nombre = nombre;
        this.metodoPago = metodoPago;
        this.total = total;
    }

    /**
     * Visualiza el recibo de insumo en la consola.
     */
    visualizarRecibo(): void {
        console.log(`\n**** RECIBO DE ${this.tipoRecibo} ****\n`);
        console.log("NOMBRE: ".concat(this.nombre, " "));
        console.log(`MONTO DE PAGO: ${this.total} `);
        console.log(`METODO DE PAGO : ${this.metodoPago} `);
        console.log("FECHA: ".concat(this.fecha));
        console.log("**************\n");
    }

    /**
     * Establece los valores del recibo.
     * @param fecha - La fecha del recibo (string).
     * @param numeroR - El número de recibo (number).
     * @param total - El total del recibo (number).
     * @param metodoPago - El método de pago utilizado (string).
     * @param nombre - El nombre asociado al recibo (string).
     */
    SetRecibo(fecha: string, numeroR: number, total: number, metodoPago: string, nombre: string): void {
        this.fecha = fecha;
        this.nombre = nombre;
        this.metodoPago = metodoPago;
        this.total = total;
    }
}
