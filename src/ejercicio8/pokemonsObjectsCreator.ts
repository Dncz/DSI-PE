/**
 * Interfaz de los métodos de los pokemons
 */
export interface PokemonInterface {
  getNombre(): string;
  getTipo(): string;
  getvida(): number;
  getHp(): number;
  getDefensa(): number;
  getVelocidad(): number;
  getAtaque(): number;
}

/**
 * Clase creadora de los objetos pokemons
 */
export abstract class PokemonsObjectsCreator {
  /**
   * Método abstrato
   */
  public abstract factoryMethod(): PokemonInterface;

  /**
   * Información de los objetos
   * @returns {string} Información
   */
  public info(): string {
    const pokemonObjetc = this.factoryMethod();
    return `Pokemon: ${pokemonObjetc.getNombre()}\n` +
           `- Tipo ${pokemonObjetc.getTipo()}\n` +
           `- Nivel de vida: ${pokemonObjetc.getvida()}\n` +
           `- Nivel HP: ${pokemonObjetc.getHp()} \n` +
           `- Nivel de defensa: ${pokemonObjetc.getDefensa()}\n` +
           `- Velocidad: ${pokemonObjetc.getVelocidad()} \n` +
           `- Ataque: ${pokemonObjetc.getAtaque()} \n`;
  }
}
