import { Animal } from './Animal.js';

export class Lion extends Animal {


chasser() {
    console.log(`${this.nom} cherche a bouffer.`);
  }

  crier() {
    return "rugi, miaou";
  }



}