import {PokemonFire} from "./pokemonfire";
import {PokemonInterface, PokemonsObjectsCreator} from "./pokemonsObjectsCreator";

/**
 * Clase para pokemosn de tipo fuego
 */
export class FirePokemonCreator extends PokemonsObjectsCreator {
  /**
   * Constructor
   * @param {string} nombre
   * @param {string} tipo
   * @param {number} ataque
   * @param {number} defensa
   * @param {number} velocidad
   * @param {number} vida
   * @param {number} Hp
   */
  constructor(private nombre: string, private tipo: string, private ataque: number,
      private defensa: number, private velocidad: number, private vida: number, private Hp: number) {
    super();
  }
  /**
   * Clase que actúa de constructor
   * @returns {PokemonInterface}
   */
  public factoryMethod(): PokemonInterface {
    return new PokemonFire(this.nombre, this.tipo, this.ataque, this.defensa, this.velocidad, this.vida, this.Hp);
  }
}
