import {ElextricPokemonCreator} from "./elextricPokemonCreator";
import {PokemonsObjectsCreator} from "./pokemonsObjectsCreator";
import {FirePokemonCreator} from "./firePokemonCreator";

/**
 * función cleinte
 * @param {PokemonsObjectsCreator} pokemonCreator Información de los objetos
 */
export function clientCode(pokemonCreator: PokemonsObjectsCreator) {
  console.log(pokemonCreator.info());
}

clientCode(new ElextricPokemonCreator('Pikachu', 'eléctrico', 40, 78, 71, 90, 35));
clientCode(new FirePokemonCreator('Charmander', 'fuego', 54, 87, 60, 10, 65));
