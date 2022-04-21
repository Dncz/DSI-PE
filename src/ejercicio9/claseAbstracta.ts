/**
 * Clase abtracta del algoritmo
 */
export abstract class Algoritmo {
  /**
   * Constructor
   * @param {number} array Lista de números
   */
  constructor(protected array: number[]) {}

  /**
   * Getter del atributo privado
   * @returns {number[]} Lista de números
   */
  protected getArray(): number[] {
    return this.array;
  }

  /**
   * Método plantilla
   */
  public run(): void {
    // let result: number[] = [];
    // inicializacion de filter
    this.filter((x: number) => x);
    // Inicializacion de map
    this.map((x: number) => x);
    // hook
    this.afterMap();
    // hook
    this.afterFilter();
    // inicializacion de reduce
    // result = this.reduce();
  }

  /**
   * Operación filter
   * @param func función predicado
   * @returns {number[]} Lista nueva de números con el filtro
   */
  protected filter(func: (x: number) => number): number[] {
    let result: number[] = [];
    for (let i = 0; i < this.array.length; i++) {
      result[i] = func(this.array[i]);
    }
    return result;
  }

  /**
   * Operación Map
   * @param func funcioón predicado
   * @returns {number[]} Lista nueva de números
   */
  protected map(func: (x: number) => number): number[] {
    let result: number[] = [];
    for (let i = 0; i < this.array.length; i++) {
      result[i] = func(this.array[i] * this.array[i]);
    }
    return result;
  }

  /**
   * Funciones vacías que deben ser
   * implementadas por las subclases. métodos opcionales
   */
  protected afterMap() {};
  protected afterFilter() {};

  /**
   * métodos que las subclases deben implementar
   */
  protected abstract reduce(arr: number[]): number;
}
