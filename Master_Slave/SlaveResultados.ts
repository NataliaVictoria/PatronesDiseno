/**
 * La clase SlaveResultados representa los resultados de un esclavo.
 */
export class SlaveResultados {
  /**
   * Crea una instancia de la clase SlaveResultados.
   * @param tipo El tipo de resultados.
   * @param valores Los valores asociados a los resultados.
   */
  constructor(public tipo: string, public valores: string) {}

  /**
   * Establece el tipo de resultados.
   * @param tipo El tipo de resultados a establecer.
   */
  setTipo(tipo: string) {
    this.tipo = tipo;
  }

  /**
   * Establece los valores asociados a los resultados.
   * @param valores Los valores a establecer.
   */
  setValores(valores: string) {
    this.valores = valores;
  }

  /**
   * Obtiene la información de los resultados.
   * @returns Un objeto con el tipo y los valores de los resultados.
   */
  getInfo() {
    return {
      Tipo: this.tipo,
      Valores: this.valores,
    };
  }
}
