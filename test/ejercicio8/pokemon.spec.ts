import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio8/pokemonElectric';

describe( 'Test de Pokemon', () => {
  let pikachu = new Pokemon('Pikachu', 'eléctrico', 40, 78, 71, 90, 35);
  it('Existe el método getNombre()', () => {
    expect(pikachu.getNombre).to.exist;
    expect(pikachu.getNombre).to.be.a('function');
    expect(pikachu.getNombre()).to.be.equal('Pikachu');
  });
  it('Existe el método setNombre()', () => {
    expect(pikachu.setNombre).to.exist;
    expect(pikachu.setNombre).to.be.a('function');
    pikachu.setNombre('pikachu2');
    expect(pikachu.getNombre()).to.be.equal('pikachu2');
  });
  it('Existe el método getTipo()', () => {
    expect(pikachu.getTipo).to.exist;
    expect(pikachu.getTipo).to.be.a('function');
    expect(pikachu.getTipo()).to.be.equal('eléctrico');
  });
  it('Existe el método setTipo()', () => {
    expect(pikachu.setTipo).to.exist;
    expect(pikachu.setTipo).to.be.a('function');
    pikachu.setTipo('electric');
    expect(pikachu.getTipo()).to.be.equal('electric');
  });
  it('Existe el método getAtaque()', () => {
    expect(pikachu.getAtaque).to.exist;
    expect(pikachu.getAtaque).to.be.a('function');
    expect(pikachu.getAtaque()).to.be.equal(40);
  });
  it('Existe el método setAtaque()', () => {
    expect(pikachu.setAtaque).to.exist;
    expect(pikachu.setAtaque).to.be.a('function');
    pikachu.setAtaque(90);
    expect(pikachu.getAtaque()).to.be.equal(90);
  });
  it('Existe el método getDefensa()', () => {
    expect(pikachu.getDefensa).to.exist;
    expect(pikachu.getDefensa).to.be.a('function');
    expect(pikachu.getDefensa()).to.be.equal(78);
  });
  it('Existe el método setDefensa()', () => {
    expect(pikachu.setDefensa).to.exist;
    expect(pikachu.setDefensa).to.be.a('function');
    pikachu.setDefensa(91);
    expect(pikachu.getDefensa()).to.be.equal(91);
  });
  it('Existe el método getVelocidad()', () => {
    expect(pikachu.getVelocidad).to.exist;
    expect(pikachu.getVelocidad).to.be.a('function');
    expect(pikachu.getVelocidad()).to.be.equal(71);
  });
  it('Existe el método setVelocidad()', () => {
    expect(pikachu.setVelocidad).to.exist;
    expect(pikachu.setVelocidad).to.be.a('function');
    pikachu.setVelocidad(10);
    expect(pikachu.getVelocidad()).to.be.equal(10);
  });
  it('Existe el método getvida()', () => {
    expect(pikachu.getvida).to.exist;
    expect(pikachu.getvida).to.be.a('function');
    expect(pikachu.getvida()).to.be.equal(90);
  });
  it('Existe el método setVida()', () => {
    expect(pikachu.setVida).to.exist;
    expect(pikachu.setVida).to.be.a('function');
    pikachu.setVida(50);
    expect(pikachu.getvida()).to.be.equal(50);
  });
  it('Existe el método getHp()', () => {
    expect(pikachu.getHp).to.exist;
    expect(pikachu.getHp).to.be.a('function');
    expect(pikachu.getHp()).to.be.equal(35);
  });
  it('Existe el método setHP()', () => {
    expect(pikachu.setHP).to.exist;
    expect(pikachu.setHP).to.be.a('function');
    pikachu.setHP(55);
    expect(pikachu.getHp()).to.be.equal(55);
  });
});
