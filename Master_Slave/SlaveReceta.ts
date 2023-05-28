/**
 * La clase SlaveReceta representa una receta de medicamentos.
 */
export class SlaveReceta {
  /**
   * Crea una instancia de la clase SlaveReceta.
   * @param medicamentos Los medicamentos prescritos en la receta.
   * @param dosis Las dosis asociadas a los medicamentos.
   */
  constructor(public medicamentos: string, public dosis: string) {}

  /**
   * Establece los medicamentos prescritos en la receta.
   * @param medicamentos Los medicamentos a establecer.
   */
  setMedicamentos(medicamentos: string) {
    this.medicamentos = medicamentos;
  }

  /**
   * Establece las dosis asociadas a los medicamentos.
   * @param dosis Las dosis a establecer.
   */
  setDosis(dosis: string) {
    this.dosis = dosis;
  }

  /**
   * Obtiene la información de la receta.
   * @returns Un objeto con los medicamentos y las dosis de la receta.
   */
  getInfo() {
    return {
      Medicamentos: this.medicamentos,
      Dosis: this.dosis,
    };
  }
}
