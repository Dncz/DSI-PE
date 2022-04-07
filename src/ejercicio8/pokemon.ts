import {PokemonInterface} from "./pokemonsObjectsCreator";

/**
 * Clase pokemon que implementa la interfaz común
 */
export class Pokemon implements PokemonInterface {
  private readonly sides = 4;
  /**
   * Constructor
   */
  constructor(private nombre: string, private tipo: string, private ataque: number,
      private defensa: number, private velocidad: number, private vida: number, private Hp: number) {
  }

  /**
   * Getter del atributo privado nombre
   * @returns {string} nombre
   */
  getNombre(): string {
    return this.nombre;
  }

  /**
   * Setter: modifica el nombre del pokemon
   * @param {string} nuevoNombre
   */
  setNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre;
  }

  /**
   * Getter del atributo tipo
   * @returns {string} tipo del pokemon
   */
  getTipo(): string {
    return this.tipo;
  }

  /**
   * Setter: modifica el tipo de pokemon
   * @param {string} nuevoTipo
   */
  setTipo(nuevoTipo: string): void {
    this.tipo = nuevoTipo;
  }

  /**
   * Getter del pokemon
   * @returns {number} Nivel de ataque
   */
  getAtaque(): number {
    return this.ataque;
  }

  /**
   * Setter: modifica el nivel de ataque
   * @param {number} ataqueModificado
   */
  setAtaque(ataqueModificado: number): void {
    this.ataque = ataqueModificado;
  }

  /**
   * Getter del atributo defensa
   * @returns {number} Nivel de defensa
   */
  getDefensa(): number {
    return this.defensa;
  }

  /**
   * Setter: modifica el nivel de defensa
   * @param {number} defensaMod
   */
  setDefensa(defensaMod: number): void {
    this.defensa = defensaMod;
  }

  /**
   * Getter que devuelve la velocidad
   * @returns {number} Velocidad
   */
  getVelocidad(): number {
    return this.velocidad;
  }

  /**
   * Setter: modifica la velocidad
   * @param {number} nuevaVelocidad
   */
  setVelocidad(nuevaVelocidad: number): void {
    this.velocidad = nuevaVelocidad;
  }

  /**
   * Getter del atributo vida
   * @returns {number} Nivel de vida
   */
  getvida(): number {
    return this.vida;
  }

  /**
   * Setter: modifica el nivel de vida
   * @param {number} vidaMod
   */
  setVida(vidaMod: number): void {
    this.vida = vidaMod;
  }

  /**
   * Getter del nivel de daño
   * @returns {number}
   */
  getHp(): number {
    return this.Hp;
  }

  /**
   * Setter: modifica el nivel de daño
   * @param {number} hpMod
   */
  setHP(hpMod: number):void {
    this.Hp = hpMod;
  }
}
