import {Algoritmo} from "./claseAbstracta";

/**
 * Clase hija del algoritmo con reduce Add
 */
export class FilterMapAddReduce extends Algoritmo {
  /**
   * Constructor
   * @param {number[]} arr Lista de números
   */
  constructor(arr: number[]) {
    super(arr);
  };

  /**
   * Método Reduce Add
   * @param {number} arrayNumber
   * @returns {number}
   */
  public reduce(arrayNumber: number[]): number {
    let numberReduce: number = 0;
    for (let i = 0; i < arrayNumber.length; i++) {
      numberReduce += arrayNumber[i];
    }
    return numberReduce;
  }
}
