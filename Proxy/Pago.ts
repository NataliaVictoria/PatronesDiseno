import { Recibo } from "./Recibo";
import { DatosPaciente } from "./DatosPaciente";
import { DatosPago } from "./DatosPago";
import { IPago } from "./IPago";

/**
 * Clase Pago que implementa la interfaz IPago.
 * Realiza y registra un pago, genera un recibo y muestra los detalles del pago.
 */
export class Pago implements IPago {

  public recibo: Recibo;

  /**
   * Constructor de la clase Pago.
   * @param nombre - Nombre del cliente.
   * @param datospago - Datos de pago.
   * @param monto - Monto del pago.
   * @param descripcion - Descripción del pago.
   * @param fecha - Fecha del pago.
   */
  constructor(public nombre: string, public datospago: DatosPago, public monto: string, public descripcion: string, public fecha: string) {
  }

  /**
   * Realiza el pago y genera el recibo correspondiente.
   */
  public efectua_Pago(): void {
    this.recibo = new Recibo(
      this.nombre,
      this.monto,
      this.fecha,
      this.descripcion
    );
    this.recibo.GenerarNumRecibo();
    this.recibo.GenerarCodigoQR();
  }

  /**
   * Obtiene el recibo generado.
   * @returns El objeto Recibo generado.
   */
  public getRecibo(): Recibo {
    return this.recibo;
  }

  /**
   * Muestra los detalles del recibo de pago.
   */
  public despliegaRecibo(): void {
    console.log("\n********** RECIBO DE PAGO **********\n");
    console.log(`PACIENTE: ${this.nombre} `);
    console.log(`MONTO DE PAGO: ${this.monto}`);
    console.log(`DESCRIPCION : ${this.descripcion}`);
    console.log(`FECHA: ${this.fecha}`);
    console.log(`NUMERO DE RECIBO: ${this.recibo.getGenerarNumRecibo()}\n`);
    console.log("**************************************\n");
    console.log(`CÓDIGO QR: ${this.recibo.getCodigoQR()}\n`);
  }
}
