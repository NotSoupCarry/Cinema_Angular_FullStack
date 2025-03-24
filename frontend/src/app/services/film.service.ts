import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Importa HttpClient
import { Observable } from 'rxjs';
import { Film } from '../models/Film';
import { Genere } from '../models/enums/Genere';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiUrl = 'http://localhost:8080/api/film';

  constructor(private http: HttpClient) { }

  // Ottieni tutti i film dal backend
  getAllFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiUrl);
  }

  // Metodo per cercare film per titolo
  searchFilms(title: string): Observable<Film[]> {
    // Passa il termine di ricerca come parametro nella query string
    return this.http.get<Film[]>(`${this.apiUrl}/search?title=${title}`);
  }

  // Aggiungi un nuovo film
  addFilm(film: Film): Observable<void> {
    return this.http.post<void>(this.apiUrl, film);
  }

  // Elimina un film tramite ID
  deleteFilm(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Aggiorna un film esistente
  updateFilm(film: Film): Observable<Film> {
    return this.http.put<Film>(`${this.apiUrl}/${film.id}`, film);
  }
}

