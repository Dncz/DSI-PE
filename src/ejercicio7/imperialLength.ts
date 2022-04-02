
// trabaja con pulgadas, pies, yardas y millas

export class ImperialLength {
  /**
   * Constructor
   * @param {number} longitud longitud a convertir
   */
  constructor(private longitud: number, private unidadMedida: string) {
  }

  /**
   * Getter de la longitud
   * @returns {number}
   */
  getLongitud(): number {
    return this.longitud;
  }

  /**
   * Getter de la unidad de media
   * @returns {string}
   */
  getUnidadMedida(): string {
    return this.unidadMedida;
  }

  // /**
  //  * Convertidor de pulgadas a una unidad metrica
  //  * @param {string} unidad Unidad métrica a convertir
  //  * @returns {number}
  //  */
  // pulgadaAMetrica(unidad: string): number {
  //   let numeroConvertido: number = 0;
  //   if (unidad == "centimetro") {
  //     numeroConvertido = this.longitud * (1 / 2.54);
  //   } else if (unidad == "metro") {
  //     numeroConvertido = this.longitud * (12 / 0.3048);
  //   } else if (unidad == "kilometro") {
  //     numeroConvertido = this.longitud * (1 / 63.36) * (1 / 1.6093);
  //   }
  //   return numeroConvertido;
  // }

  // piesAMetrica(numero: number, unidad: string) {

  // }

  getPulgada() {}

  getPies() {}

  getYarda() {}

  getMilla() {}
}
