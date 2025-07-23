import { Animal } from './Animal.js';

export class Perroquet extends Animal {

    
    parler() {
        console.log(`${this.nom} : QU'EST CE QU'ON DIT AU CHAUFFEUR ?`);
      }
    
      crier() {
        return "ROOOOOOH (ouais je sais pas en fait... il parle déja)";
      }
    
    
    
    }