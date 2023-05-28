/**
 * Clase ProxyPago
 * Implementa la interfaz IPago y actúa como un proxy para el objeto Pago real.
 */
import { Pago } from "./Pago";
import { DatosPago } from "./DatosPago";
import { IPago } from "./IPago";

export class ProxyPago implements IPago {
    /**
     * @property nombre - Nombre del cliente.
     * @property datospago - Datos de pago.
     * @property pago - Objeto Pago real.
     * @property monto - Monto del pago.
     * @property descripcion - Descripción del pago.
     * @property fecha - Fecha del pago.
     */

    public nombre: string;
    public datospago: DatosPago;
    public pago: Pago;
    public monto: string;
    public descripcion: string;
    public fecha: string;

    /**
     * Constructor de la clase ProxyPago.
     * @param nombre - Nombre del cliente.
     * @param datospago - Datos de pago.
     * @param monto - Monto del pago.
     * @param descripcion - Descripción del pago.
     * @param fecha - Fecha del pago.
     */
    constructor(nombre: string, datospago: DatosPago, monto: string, descripcion: string, fecha: string) {
        this.nombre = this.nombre;
        this.datospago = this.datospago;
        this.monto = this.monto;
        this.descripcion = this.descripcion;
        this.fecha = this.fecha;
        this.pago = new Pago(nombre, datospago, monto, descripcion, fecha);
    }

    /**
     * Realiza el pago llamando a los métodos correspondientes.
     */
    public efectua_Pago(): void {
        this.registrar_Pago();
        this.pago.efectua_Pago();
        //return this.despliegaRecibo();
    }

    /**
     * Registra el pago.
     */
    public registrar_Pago(): void {
        console.log("SE LOGRO REGISTRAR");
    }

    /**
     * Muestra el recibo del pago.
     */
    public despliegaRecibo() {
        this.pago.despliegaRecibo();
        console.log("SE LOGRO DESPLEGAR");
    }
}

