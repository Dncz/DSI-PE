import {Algoritmo} from "./claseAbstracta";

/**
 * Clase hija del algoritmo con reduce Sub
 */
export class FilterMapSubReduce extends Algoritmo {
  /**
   * Constructor
   * @param {number[]} arr Lista de números
   */
  constructor(arr: number[]) {
    super(arr);
  }

  /**
   * Método Reduce Sub
   * @param {number} arrayNumber
   * @returns {number}
   */
  public reduce(arrayNumber: number[]): number {
    let numberReduce: number = 0;
    for (let i = 0; i < arrayNumber.length; i++) {
      numberReduce -= arrayNumber[i];
    }
    return numberReduce;
  }
}
