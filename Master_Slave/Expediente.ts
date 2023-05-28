import { SlaveCita } from "./SlaveCita";
import { SlaveDatosPaciente } from "./SlaveDatosPaciente";
import { SlaveReceta } from "./SlaveReceta";
import { SlaveResultados } from "./SlaveResultados";

/**
 * La clase Expediente representa un expediente médico que contiene información sobre una cita, receta, resultados y datos del paciente.
 */
export class Expediente {
  NumerodeAfilicion = "1232";
  
  /**
   * Crea una instancia de la clase Expediente.
   * @param selReceta Un valor numérico para indicar si se seleccionó una receta (1: seleccionado, 0: no seleccionado).
   * @param selCita Un valor numérico para indicar si se seleccionó una cita (1: seleccionado, 0: no seleccionado).
   * @param selResultados Un valor numérico para indicar si se seleccionaron resultados (1: seleccionado, 0: no seleccionado).
   * @param selDatosPaciente Un valor numérico para indicar si se seleccionaron datos del paciente (1: seleccionado, 0: no seleccionado).
   */
  constructor(
    public selReceta: number,
    public selCita: number,
    public selResultados: number,
    public selDatosPaciente: number
  ) {}

  /**
   * Realiza una simulación de la ejecución de tareas y muestra la información del expediente.
   */
  SimulacionEjecucionTareas() {
    console.log("Aqui Ando");
    let receta = new SlaveReceta("", "");
    let cita = new SlaveCita("", "", "");
    let resultados = new SlaveResultados("", "");
    let datospaciente = new SlaveDatosPaciente("", "", "");
    
    if (this.selReceta == 1) {
      receta = this.creacionReceta("Paracetamol", "800 mg");
    } else {
      receta = new SlaveReceta("", "");
    }

    if (this.selCita == 1) {
      cita = this.creacionCita("Alexander", "25-05-23", "12:30");
    } else {
      cita = new SlaveCita("", "", "");
    }

    if (this.selResultados == 1) {
      resultados = this.creacionResultados(
        "Analisis de Sangre",
        "Glucosa 100, Colesterol 200"
      );
    } else {
      resultados = new SlaveResultados("", "");
    }

    if (this.selDatosPaciente == 1) {
      datospaciente = this.creacionDatosPaciente("Aldo", "23", "Masculino");
    } else {
      datospaciente = new SlaveDatosPaciente("", "", "");
    }
    
    this.mostrar_InfoReservacion(receta, cita, resultados, datospaciente);
  }

  /**
   * Crea una instancia de la clase SlaveReceta.
   * @param medicamentos Los medicamentos de la receta.
   * @param dosis Las dosis de los medicamentos de la receta.
   * @returns Una instancia de la clase SlaveReceta.
   */
  creacionReceta(medicamentos: string, dosis: string) {
    return new SlaveReceta(medicamentos, dosis);
  }

  /**
   * Crea una instancia de la clase SlaveCita.
   * @param doctor El nombre del doctor de la cita.
   * @param fecha La fecha de la cita.
   * @param hora La hora de la cita.
   * @returns Una instancia de la clase SlaveCita.
   */
  creacionCita(doctor: string, fecha: string, hora: string) {
    return new SlaveCita(doctor, fecha, hora);
  }

  /**
   * Crea una instancia de la clase SlaveResultados.
   * @param tipo El tipo de resultados.
   * @param valores Los valores de los resultados.
   * @returns Una instancia de la clase SlaveResultados.
   */
  creacionResultados(tipo: string, valores: string) {
    return new SlaveResultados(tipo, valores);
  }

  /**
   * Crea una instancia de la clase SlaveDatosPaciente.
   * @param nombre El nombre del paciente.
   * @param edad La edad del paciente.
   * @param sexo El sexo del paciente.
   * @returns Una instancia de la clase SlaveDatosPaciente.
   */
  creacionDatosPaciente(nombre: string, edad: string, sexo: string) {
    return new SlaveDatosPaciente(nombre, edad, sexo);
  }

  /**
   * Muestra la información del expediente, incluyendo datos del paciente, receta, cita y resultados.
   * @param receta La instancia de la clase SlaveReceta.
   * @param cita La instancia de la clase SlaveCita.
   * @param resultados La instancia de la clase SlaveResultados.
   * @param datospaciente La instancia de la clase SlaveDatosPaciente.
   */
  mostrar_InfoReservacion(
    receta: SlaveReceta,
    cita: SlaveCita,
    resultados: SlaveResultados,
    datospaciente: SlaveDatosPaciente
  ) {
    console.log("NUMERO DE AFILIACION: " + this.NumerodeAfilicion + "\n\n");

    if (this.selDatosPaciente === 1) {
      console.log("***DATOS DEL PACIENTE:***\n");
      console.log("Nombre: " + datospaciente.getInfo().Nombre + "\n");
      console.log("Edad: " + datospaciente.getInfo().Edad + "\n");
      console.log("Sexo: " + datospaciente.getInfo().Sexo + "\n\n");
    }
    
    if (this.selReceta === 1) {
      console.log("***DATOS DE LA RECETA:***\n");
      console.log("Medicamentos: " + receta.getInfo().Medicamentos + "\n");
      console.log("Dosis: " + receta.getInfo().Dosis + "\n\n");
    }

    if (this.selCita === 1) {
      console.log("***DATOS DE LA CITA:***\n");
      console.log("Nombre del Doctor: " + cita.getInfo().Doctor + "\n");
      console.log("Fecha: " + cita.getInfo().Fecha + "\n");
      console.log("Hora: " + cita.getInfo().Hora + "\n\n");
    }

    if (this.selResultados === 1) {
      console.log("***DATOS DE LOS RESULTADOS:***\n");
      console.log("Tipo de Resultados: " + resultados.getInfo().Tipo + "\n");
      console.log("Valores arrojados: " + resultados.getInfo().Valores + "\n");
    }
  }
}

