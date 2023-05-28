/**
 * Clase abstracta Recibo.
 * Esta clase define la estructura básica de un recibo.
 */
export abstract class Recibo {
    
    /**
     * Método abstracto para visualizar el recibo.
     */
    abstract visualizarRecibo(): void;

    /**
     * Método abstracto para establecer los valores del recibo.
     * @param fecha - La fecha del recibo (string).
     * @param numeroR - El número de recibo (number).
     * @param total - El total del recibo (number).
     * @param metodoPago - El método de pago utilizado (string).
     * @param nombre - El nombre asociado al recibo (string).
     */
    abstract SetRecibo(fecha: string, numeroR: number, total: number, metodoPago: string, nombre: string): void;
}
