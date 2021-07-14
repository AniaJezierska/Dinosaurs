import Specie from "./Specie";

function Dino(species, where, when, fact, spec) {
  this.spec = spec;
  this.species = species;
  this.where = where;
  this.when = when;
  this.fact = fact;
}

export default Dino;
