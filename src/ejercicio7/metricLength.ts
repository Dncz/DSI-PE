
// trabajar con centímetros, metros y kilómetros

export class MetricLength {
  /**
   * Constructor
   * @param {number} medidaMetrica
   */
  constructor(private medidaMetrica: number, private unidadMedida: string) {
  }

  /**
   * Retorna el numero
   * @returns {number}
   */
  getMedidaMetrica(): number {
    return this.medidaMetrica;
  }

  /**
   * Getter de la unidad métrica
   * @returns {string}
   */
  getUnidadMedida(): string {
    return this.unidadMedida;
  }

  // metricAImperial(numero: number): number {
  //   if (this.unidadMedida == "milimetro") {
  //     numero = this.medidaMetrica * (1 / 2.54);
  //   } else if (this.unidadMedida == "centimetro") {
  //     numero = this.medidaMetrica * (1 / 0.3048);
  //   } else if (this.unidadMedida == "metro") {
  //     numero = this.medidaMetrica * (1 / 0.9144);
  //   } else if (this.unidadMedida == "kilometro") {
  //     numero = this.medidaMetrica * (1 / 1.6093);
  //   }
  //   return numero;
  // }
}

