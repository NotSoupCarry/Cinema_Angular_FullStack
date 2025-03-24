package com.example.backend.services;

import java.util.List;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.example.backend.models.Film;
import com.example.backend.repositories.FilmRepository;


@Service
@RequiredArgsConstructor
public class FilmService {
    private final FilmRepository filmRepository;

    public List<Film> getAllFilm(){
        return filmRepository.findAll();
    }

    public List<Film> searchFilmsByTitle(String title) {
        return filmRepository.findByTitoloContainingIgnoreCase(title);
    }

    @Transactional
    public void addFilm(@Valid Film film){
        filmRepository.save(film);
    }

    @Transactional
    public void deleteFilmById(Long id){
        filmRepository.deleteById(id);
    }

    @Transactional
    public void updateFilm(Long id, Film film) {
        if (filmRepository.existsById(id)) {
            film.setId(id);  // Mantieni l'ID del film esistente
            filmRepository.save(film);  // Salva l'aggiornamento
        } else {
            throw new RuntimeException("Film non trovato con id: " + id);
        }
    }
}