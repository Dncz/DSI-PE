import 'mocha';
import {expect} from 'chai';
import {ElextricPokemonCreator} from '../../src/ejercicio8/elextricPokemonCreator';

describe( 'Test de ElextricPokemonCreator', () => {
  let pikachu = new ElextricPokemonCreator('Pikachu', 'eléctrico', 40, 78, 71, 90, 35);
  it('Existe el método factoryMethod()', () => {
    expect(pikachu.factoryMethod).to.exist;
    expect(pikachu.factoryMethod).to.be.a('function');
    expect(pikachu).to.be.instanceOf(ElextricPokemonCreator);
    expect(pikachu.factoryMethod().getNombre()).to.be.equal('Pikachu');
    expect(pikachu.factoryMethod().getTipo()).to.be.equal('eléctrico');
  });
  // expect(pikachu.info).to.be.equal('Pokemon: Pikachu\n- Tipo eléctrico\n- Nivel de vida: 90\n- Nivel HP: 35\n- Nivel de defensa: 78\n- Velocidad: 71\n- Ataque: 40');
});
