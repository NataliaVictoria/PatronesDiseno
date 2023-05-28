/**
 * Clase que representa los datos de un paciente.
 */
class DatosPaciente {
    /**
     * Constructor de la clase DatosPaciente.
     * @param apellidos - Apellidos del paciente.
     * @param nombre - Nombre del paciente.
     * @param fechaNacimiento - Fecha de nacimiento del paciente.
     * @param sexo - Sexo del paciente.
     * @param numeroCelular - Número de celular del paciente.
     * @param direccionEmail - Dirección de correo electrónico del paciente.
     */
    constructor(apellidos, nombre, fechaNacimiento, sexo, numeroCelular, direccionEmail) {
        this.apellidos = apellidos;
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.sexo = sexo;
        this.numeroCelular = numeroCelular;
        this.direccionEmail = direccionEmail;
    }

    /**
     * Obtiene los apellidos del paciente.
     * @returns Los apellidos del paciente.
     */
    getApellidos() {
        return this.apellidos;
    }

    /**
     * Establece los apellidos del paciente.
     * @param apellidos - Los apellidos del paciente.
     * @returns La instancia actual de DatosPaciente.
     */
    setApellidos(apellidos) {
        this.apellidos = apellidos;
        return this;
    }

    /**
     * Obtiene el nombre del paciente.
     * @returns El nombre del paciente.
     */
    getNombre() {
        return this.nombre;
    }

    /**
     * Establece el nombre del paciente.
     * @param nombre - El nombre del paciente.
     * @returns La instancia actual de DatosPaciente.
     */
    setNombre(nombre) {
        this.nombre = nombre;
        return this;
    }

    /**
     * Obtiene la fecha de nacimiento del paciente.
     * @returns La fecha de nacimiento del paciente.
     */
    getFechaNacimiento() {
        return this.fechaNacimiento;
    }

    /**
     * Establece la fecha de nacimiento del paciente.
     * @param fechaNacimiento - La fecha de nacimiento del paciente.
     * @returns La instancia actual de DatosPaciente.
     */
    setFechaNacimiento(fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
        return this;
    }

    /**
     * Obtiene el sexo del paciente.
     * @returns El sexo del paciente.
     */
    getSexo() {
        return this.sexo;
    }

    /**
     * Establece el sexo del paciente.
     * @param sexo - El sexo del paciente.
     * @returns La instancia actual de DatosPaciente.
     */
    setSexo(sexo) {
        this.sexo = sexo;
        return this;
    }

    /**
     * Obtiene el número de celular del paciente.
     * @returns El número de celular del paciente.
     */
    getNumeroCelular() {
        return this.numeroCelular;
    }

    /**
     * Establece el número de celular del paciente.
     * @param numeroCelular - El número de celular del paciente.
     * @returns La instancia actual de DatosPaciente.
     */
    setNumeroCelular(numeroCelular) {
        this.numeroCelular = numeroCelular;
        return this;
    }

    /**
     * Obtiene la dirección de correo electrónico del paciente.
     * @returns La dirección de correo electrónico del paciente.
     */
    getDireccionEmail() {
        return this.direccionEmail;
    }

    /**
     * Establece la dirección de correo electrónico del paciente.
     * @param direccionEmail - La dirección de correo electrónico del paciente.
     * @returns La instancia actual de DatosPaciente.
     */
    setDireccionEmail(direccionEmail) {
        this.direccionEmail = direccionEmail;
        return this;
    }
}

// Exporta la clase DatosPaciente para poder ser utilizada en otros archivos.
exports.DatosPaciente = DatosPaciente;
