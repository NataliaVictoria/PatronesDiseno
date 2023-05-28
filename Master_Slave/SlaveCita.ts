/**
 * La clase SlaveCita representa una cita médica.
 */
export class SlaveCita {
  /**
   * Crea una instancia de la clase SlaveCita.
   * @param doctor El nombre del doctor.
   * @param fecha La fecha de la cita.
   * @param hora La hora de la cita.
   */
  constructor(public doctor: string, public fecha: string, public hora: string) {}

  /**
   * Establece el nombre del doctor.
   * @param doctor El nombre del doctor a establecer.
   */
  setDoctor(doctor: string) {
    this.doctor = doctor;
  }

  /**
   * Establece la fecha de la cita.
   * @param fecha La fecha de la cita a establecer.
   */
  setFecha(fecha: string) {
    this.fecha = fecha;
  }

  /**
   * Establece la hora de la cita.
   * @param hora La hora de la cita a establecer.
   */
  setHora(hora: string) {
    this.hora = hora;
  }

  /**
   * Obtiene la información de la cita.
   * @returns Un objeto con el nombre del doctor, la fecha y la hora de la cita.
   */
  getInfo() {
    return {
      Doctor: this.doctor,
      Fecha: this.fecha,
      Hora: this.hora,
    };
  }
}
