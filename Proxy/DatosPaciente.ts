/**
 * Clase que representa los datos de un paciente.
 */
export class DatosPaciente {
  public apellidos: string;
  public nombre: string;
  public fechaNacimiento: string;
  public sexo: string;
  public numeroCelular: string;
  public direccionEmail: string;

  /**
   * Constructor de la clase DatosPaciente.
   * @param apellidos - Apellidos del paciente.
   * @param nombre - Nombre del paciente.
   * @param fechaNacimiento - Fecha de nacimiento del paciente.
   * @param sexo - Sexo del paciente.
   * @param numeroCelular - Número de celular del paciente.
   * @param direccionEmail - Dirección de correo electrónico del paciente.
   */
  constructor(
      apellidos: string,
      nombre: string,
      fechaNacimiento: string,
      sexo: string,
      numeroCelular: string,
      direccionEmail: string
  ) {
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
  public getApellidos(): string {
      return this.apellidos;
  }

  /**
   * Establece los apellidos del paciente.
   * @param apellidos - Los apellidos del paciente.
   * @returns La instancia actual de DatosPaciente.
   */
  public setApellidos(apellidos: string): DatosPaciente {
      this.apellidos = apellidos;
      return this;
  }

  /**
   * Obtiene el nombre del paciente.
   * @returns El nombre del paciente.
   */
  public getNombre(): string {
      return this.nombre;
  }

  /**
   * Establece el nombre del paciente.
   * @param nombre - El nombre del paciente.
   * @returns La instancia actual de DatosPaciente.
   */
  public setNombre(nombre: string): DatosPaciente {
      this.nombre = nombre;
      return this;
  }

  /**
   * Obtiene la fecha de nacimiento del paciente.
   * @returns La fecha de nacimiento del paciente.
   */
  public getFechaNacimiento(): string {
      return this.fechaNacimiento;
  }

  /**
   * Establece la fecha de nacimiento del paciente.
   * @param fechaNacimiento - La fecha de nacimiento del paciente.
   * @returns La instancia actual de DatosPaciente.
   */
  public setFechaNacimiento(fechaNacimiento: string): DatosPaciente {
      this.fechaNacimiento = fechaNacimiento;
      return this;
  }

  /**
   * Obtiene el sexo del paciente.
   * @returns El sexo del paciente.
   */
  public getSexo(): string {
      return this.sexo;
  }

  /**
   * Establece el sexo del paciente.
   * @param sexo - El sexo del paciente.
   * @returns La instancia actual de DatosPaciente.
   */
  public setSexo(sexo: string): DatosPaciente {
      this.sexo = sexo;
      return this;
  }

  /**
   * Obtiene el número de celular del paciente.
   * @returns El número de celular del paciente.
   */
  public getNumeroCelular(): string {
      return this.numeroCelular;
  }

  /**
   * Establece el número de celular del paciente.
   * @param numeroCelular - El número de celular del paciente.
   * @returns La instancia actual de DatosPaciente.
   */
  public setNumeroCelular(numeroCelular: string): DatosPaciente {
      this.numeroCelular = numeroCelular;
      return this;
  }

  /**
   * Obtiene la dirección de correo electrónico del paciente.
   * @returns La dirección de correo electrónico del paciente.
   */
  public getDireccionEmail(): string {
      return this.direccionEmail;
  }

  /**
   * Establece la dirección de correo electrónico del paciente.
   * @param direccionEmail - La dirección de correo electrónico del paciente.
   * @returns La instancia actual de DatosPaciente.
   */
  public setDireccionEmail(direccionEmail: string): DatosPaciente {
      this.direccionEmail = direccionEmail;
      return this;
  }
}
