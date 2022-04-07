import {ElextricPokemonCreator} from "./elextricPokemonCreator";
import {PokemonsObjectsCreator} from "./pokemonsObjectsCreator";

/**
 * función cleinte
 * @param {PokemonsObjectsCreator} pokemonCreator Información de los objetos
 */
export function clientCode(pokemonCreator: PokemonsObjectsCreator) {
  console.log(pokemonCreator.info());
}

clientCode(new ElextricPokemonCreator('Pikachu', 'eléctrico', 40, 78, 71, 90, 35));
// clientCode(new CircleCreator('BlueCircle', 'blue', 7));
