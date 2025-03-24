import { Genere } from "./enums/Genere";

export class Film {
    id?: number;
    titolo: string;
    regista: string;
    annoUscita: number;
    genere: Genere;
    descrizione: string;
    valutazione?: number;  // `valutazione` è opzionale
  
    constructor(
      id: number,
      titolo: string,
      regista: string,
      annoUscita: number,
      genere: Genere,
      descrizione: string,
      valutazione?: number
    ) {
      this.id = id;
      this.titolo = titolo;
      this.regista = regista;
      this.annoUscita = annoUscita;
      this.genere = genere;
      this.descrizione = descrizione;
      this.valutazione = valutazione;
    }
  }
  