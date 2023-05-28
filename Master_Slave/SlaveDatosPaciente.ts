/**
 * La clase SlaveDatosPaciente representa los datos de un paciente.
 */
export class SlaveDatosPaciente {
  /**
   * Crea una instancia de la clase SlaveDatosPaciente.
   * @param nombre El nombre del paciente.
   * @param edad La edad del paciente.
   * @param sexo El sexo del paciente.
   */
  constructor(public nombre: string, public edad: string, public sexo: string) {}

  /**
   * Establece el nombre del paciente.
   * @param nombre El nombre a establecer.
   */
  setNombre(nombre: string) {
    this.nombre = nombre;
  }

  /**
   * Establece la edad del paciente.
   * @param edad La edad a establecer.
   */
  setEdad(edad: string) {
    this.edad = edad;
  }

  /**
   * Establece el sexo del paciente.
   * @param sexo El sexo a establecer.
   */
  setSexo(sexo: string) {
    this.sexo = sexo;
  }

  /**
   * Obtiene la información del paciente.
   * @returns Un objeto con el nombre, la edad y el sexo del paciente.
   */
  getInfo() {
    return {
      Nombre: this.nombre,
      Edad: this.edad,
      Sexo: this.sexo,
    };
  }
}
