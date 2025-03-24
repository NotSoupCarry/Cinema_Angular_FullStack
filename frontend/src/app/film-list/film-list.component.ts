import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Film } from '../models/Film';
import { Genere } from '../models/enums/Genere';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films: Film[] = [];
  genereOptions = Object.values(Genere);  
  selectedFilm: Film | null = null;
  searchTerm: string = '';

  // Dichiarazione di una variabile per il nuovo film
  newFilm: Film = {
    titolo: '',
    regista: '',
    annoUscita: 0,
    genere: Genere.Azione,
    descrizione: '',
    valutazione: 0
  };

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    // Ottieni tutti i film dal backend
    this.loadFilms();
  }

  loadFilms(): void {
    this.filmService.getAllFilms().subscribe((films) => {
      this.films = films;
    });
  }

  searchFilms(): void {
    if (this.searchTerm) {
      this.filmService.searchFilms(this.searchTerm).subscribe((films) => {
        this.films = films;
      });
    } else {
      this.loadFilms(); // Se il termine di ricerca è vuoto, carica tutti i film
    }
  }

  // Funzione per aggiungere un nuovo film
  addFilm(): void {
    this.filmService.addFilm(this.newFilm).subscribe(() => {

      this.loadFilms();

      this.newFilm = {  // Reset the newFilm form
        titolo: '',
        regista: '',
        annoUscita: 0,
        genere: Genere.Azione,
        descrizione: '',
        valutazione: 0
      };
    });
  }

  // Funzione per eliminare un film
  deleteFilm(id: number): void {
    const confirmDelete = window.confirm("Sei sicuro di voler eliminare questo film?");

    if (confirmDelete) {
      this.filmService.deleteFilm(id).subscribe(() => {
        // Rimuovi il film dalla lista
        this.films = this.films.filter(film => film.id !== id);
        alert("Film eliminato con successo!");
      }, (error) => {
        // Gestisci gli errori (opzionale)
        alert("Si è verificato un errore durante l'eliminazione del film.");
      });
    }
  }


  editFilm(film: Film): void {
    this.selectedFilm = { ...film };  // Crea una copia del film per la modifica
  }

  updateFilm(): void {
    if (this.selectedFilm) {
      this.filmService.updateFilm(this.selectedFilm).subscribe(() => {
        this.loadFilms();  // Ricarica la lista dopo l'aggiornamento
        this.selectedFilm = null;  // Resetta il film selezionato
      });
    }
  }

  cancelEdit(): void {
    this.selectedFilm = null;  // Resetta il film selezionato senza salvare
  }

}

