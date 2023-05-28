/**
 * Clase que representa los datos de pago.
 */
export class DatosPago {
    /**
     * Número de tarjeta de crédito o débito utilizado para el pago.
     */
    public numeroTarjeta: string;

    /**
     * Apellidos del titular de la tarjeta.
     */
    public apellidosTitular: string;

    /**
     * Nombre del titular de la tarjeta.
     */
    public nombreTitular: string;

    /**
     * Fecha de vencimiento de la tarjeta.
     */
    public fechaVencimiento: string;

    /**
     * Código CVV de seguridad de la tarjeta.
     */
    public cvv: string;

    /**
     * Precio total del pago.
     */
    public precioTotal: number;

    /**
     * Constructor de la clase DatosPago.
     * @param numeroTarjeta Número de tarjeta de crédito o débito.
     * @param apellidosTitular Apellidos del titular de la tarjeta.
     * @param nombreTitular Nombre del titular de la tarjeta.
     * @param fechaVencimiento Fecha de vencimiento de la tarjeta.
     * @param cvv Código CVV de seguridad de la tarjeta.
     * @param precioTotal Precio total del pago.
     */
    constructor(
        numeroTarjeta: string,
        apellidosTitular: string,
        nombreTitular: string,
        fechaVencimiento: string,
        cvv: string,
        precioTotal: number
    ) {
        this.numeroTarjeta = numeroTarjeta;
        this.apellidosTitular = apellidosTitular;
        this.nombreTitular = nombreTitular;
        this.fechaVencimiento = fechaVencimiento;
        this.cvv = cvv;
        this.precioTotal = precioTotal;
    }

    /**
     * Obtiene el número de tarjeta.
     * @returns El número de tarjeta.
     */
    public getNumeroTarjeta(): string {
        return this.numeroTarjeta;
    }

    /**
     * Establece el número de tarjeta.
     * @param numeroTarjeta El número de tarjeta a establecer.
     */
    public setNumeroTarjeta(numeroTarjeta: string): void {
        this.numeroTarjeta = numeroTarjeta;
    }

    /**
     * Obtiene los apellidos del titular de la tarjeta.
     * @returns Los apellidos del titular de la tarjeta.
     */
    public getApellidosTitular(): string {
        return this.apellidosTitular;
    }

    /**
     * Establece los apellidos del titular de la tarjeta.
     * @param apellidosTitular Los apellidos del titular de la tarjeta a establecer.
     */
    public setApellidosTitular(apellidosTitular: string): void {
        this.apellidosTitular = apellidosTitular;
    }

    /**
     * Obtiene el nombre del titular de la tarjeta.
     * @returns El nombre del titular de la tarjeta.
     */
    public getNombreTitular(): string {
        return this.nombreTitular;
    }

    /**
     * Establece el nombre del titular de la tarjeta.
     * @param nombreTitular El nombre del titular de la tarjeta a establecer.
     */
    public setNombreTitular(nombreTitular: string): void {
        this.nombreTitular = nombreTitular;
    }

    /**
     * Obtiene la fecha de vencimiento de la tarjeta.
     * @returns La fecha de vencimiento de la tarjeta.
     */
    public getFechaVencimiento(): string {
        return this.fechaVencimiento;
    }

    /**
     * Establece la fecha de vencimiento de la tarjeta.
     * @param fechaVencimiento La fecha de vencimiento de la tarjeta a establecer.
     */
    public setFechaVencimiento(fechaVencimiento: string): void {
        this.fechaVencimiento = fechaVencimiento;
    }

    /**
     * Obtiene el código CVV de seguridad de la tarjeta.
     * @returns El código CVV de seguridad de la tarjeta.
     */
    public getCvv(): string {
        return this.cvv;
    }

    /**
     * Establece el código CVV de seguridad de la tarjeta.
     * @param cvv El código CVV de seguridad de la tarjeta a establecer.
     */
    public setCvv(cvv: string): void {
        this.cvv = cvv;
    }

    /**
     * Obtiene el precio total del pago.
     * @returns El precio total del pago.
     */
    public getPrecioTotal(): number {
        return this.precioTotal;
    }

    /**
     * Establece el precio total del pago.
     * @param precioTotal El precio total del pago a establecer.
     */
    public setPrecioTotal(precioTotal: number): void {
        this.precioTotal = precioTotal;
    }
}
