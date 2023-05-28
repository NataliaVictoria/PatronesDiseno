/**
 * Clase Recibo
 * Representa un recibo de pago.
 */
export class Recibo {
    /**
     * @property cliente - Nombre del cliente.
     * @property monto - Monto del pago.
     * @property fecha - Fecha del pago.
     * @property descripcion - Descripción del pago.
     * @property NumRecibo - Número de recibo generado.
     * @property codigoQR - Código QR generado.
     */

    public cliente: string;
    public monto: string;
    public fecha: string;
    public descripcion: string;
    public NumRecibo: string;
    public codigoQR: string;

    /**
     * Constructor de la clase Recibo.
     * @param cliente - Nombre del cliente.
     * @param monto - Monto del pago.
     * @param fecha - Fecha del pago.
     * @param descripcion - Descripción del pago.
     */
    constructor(cliente: string, monto: string, fecha: string, descripcion: string) {
        this.cliente = cliente;
        this.monto = monto;
        this.fecha = fecha;
        this.descripcion = descripcion;
    }

    /**
     * Genera un número de recibo.
     */
    public GenerarNumRecibo(): void {
        // Se simula la asignación de asientos
        this.NumRecibo = "18A";
    }

    /**
     * Genera un código QR aleatorio.
     */
    public GenerarCodigoQR(): void {
        // Se simula la generación del código QR
        const caracteresPermitidos: string = '0123456789abcdefghijklmnopqrstuvwxyz';
        this.codigoQR = caracteresPermitidos
            .split('')
            .sort(() => 0.5 - Math.random())
            .join('')
            .substring(0, 10);
    }

    /**
     * Obtiene el número de recibo generado.
     * @returns Número de recibo generado.
     */
    public getGenerarNumRecibo(): string {
        return this.NumRecibo;
    }

    /**
     * Obtiene el código QR generado.
     * @returns Código QR generado.
     */
    public getCodigoQR(): string {
        return this.codigoQR;
    }
}
